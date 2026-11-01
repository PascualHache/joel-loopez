/**
 * The dance floor's sound, synthesised in the browser: a 16-step sequencer in
 * which each awake body part adds a layer — feet a kick, hips a bassline, arms
 * hats and claps, head an arpeggio, chest a filtered pad.
 *
 * Browsers only start audio from a user gesture, so the graph is built on the
 * first touch rather than on mount.
 */
const ARP = [440, 523.25, 587.33, 659.25, 783.99, 880, 1046.5]
const ARP_MOVES = [1, 2, -1, -2, 3]
const BASS_ROOTS = [55, 55, 49, 43.65]
const PAD_NOTES = [110, 164.81, 220, 261.63, 329.63]

export class DanceAudio {
  zones = {}
  bpm = 104

  start() {
    if (this.ac) {
      if (this.ac.state === 'suspended') this.ac.resume()
      return
    }
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return
    const ac = new AC()
    this.ac = ac

    const comp = ac.createDynamicsCompressor()
    comp.threshold.value = -16
    comp.ratio.value = 3.5
    comp.connect(ac.destination)
    const master = ac.createGain()
    master.gain.value = 0.85
    master.connect(comp)
    this.bus = ac.createGain()
    this.bus.gain.value = 0.9
    this.bus.connect(master)

    // Tempo-synced echo, darkened on every repeat.
    this.fxIn = ac.createGain()
    this.fxIn.gain.value = 0.5
    this.delay = ac.createDelay(1.5)
    this.delay.delayTime.value = 0.43
    const feedback = ac.createGain()
    feedback.gain.value = 0.38
    const tone = ac.createBiquadFilter()
    tone.type = 'lowpass'
    tone.frequency.value = 3200
    const wet = ac.createGain()
    wet.gain.value = 0.35
    this.fxIn.connect(this.delay)
    this.delay.connect(tone)
    tone.connect(feedback)
    feedback.connect(this.delay)
    tone.connect(wet)
    wet.connect(master)

    const noise = ac.createBuffer(1, ac.sampleRate, ac.sampleRate)
    const samples = noise.getChannelData(0)
    for (let i = 0; i < samples.length; i++) samples[i] = Math.random() * 2 - 1
    this.noise = noise

    // The pad drones from the start, silent until the chest wakes.
    const padFilter = ac.createBiquadFilter()
    padFilter.type = 'lowpass'
    padFilter.frequency.value = 1100
    padFilter.Q.value = 0.8
    this.padGain = ac.createGain()
    this.padGain.gain.value = 0.0001
    padFilter.connect(this.padGain)
    this.padGain.connect(master)
    PAD_NOTES.forEach((f, i) => {
      const o = ac.createOscillator()
      o.type = i % 2 ? 'triangle' : 'sawtooth'
      o.frequency.value = f
      o.detune.value = (i - 2) * 5
      const g = ac.createGain()
      g.gain.value = i === 0 ? 0.07 : 0.045
      o.connect(g)
      g.connect(padFilter)
      o.start()
    })
    const lfo = ac.createOscillator()
    lfo.frequency.value = 0.09
    const lfoDepth = ac.createGain()
    lfoDepth.gain.value = 300
    lfo.connect(lfoDepth)
    lfoDepth.connect(padFilter.frequency)
    lfo.start()

    this.step = 0
    this.bar = 0
    this.arp = 0
    this.nextTime = ac.currentTime + 0.08
    this.timer = setInterval(() => this.schedule(), 25)
    this.applyMix()
  }

  /** Called on every change of awake zones or tempo; works before start() too. */
  update(zones, bpm) {
    this.zones = zones
    this.bpm = bpm
    this.applyMix()
  }

  applyMix() {
    if (!this.ac) return
    const now = this.ac.currentTime
    this.padGain.gain.setTargetAtTime(this.zones.pecho ? 0.45 : 0.0001, now, 0.5)
    this.delay.delayTime.setTargetAtTime((0.75 * 60) / this.bpm, now, 0.3)
  }

  /** A short bell run, used when an agreement is accepted. */
  chime(freqs) {
    try {
      this.start()
      const ac = this.ac
      if (!ac) return
      freqs.forEach((f, i) => {
        const t = ac.currentTime + 0.02 + i * 0.09
        const o = ac.createOscillator()
        const g = ac.createGain()
        o.type = 'sine'
        o.frequency.setValueAtTime(f, t)
        g.gain.setValueAtTime(0.0001, t)
        g.gain.exponentialRampToValueAtTime(0.12, t + 0.008)
        g.gain.exponentialRampToValueAtTime(0.0001, t + 1.8)
        o.connect(g)
        g.connect(this.bus)
        g.connect(this.fxIn)
        o.start(t)
        o.stop(t + 1.9)
      })
    } catch {
      /* Sound is a bonus; the page works silently without it. */
    }
  }

  close() {
    clearInterval(this.timer)
    if (this.ac) this.ac.close().catch(() => {})
    this.ac = null
  }

  /** Look-ahead scheduling: queue every step that falls in the next 120 ms. */
  schedule() {
    const ac = this.ac
    if (!ac) return
    if (this.nextTime < ac.currentTime - 0.2) this.nextTime = ac.currentTime + 0.05
    const active = Object.values(this.zones).some(Boolean)
    while (this.nextTime < ac.currentTime + 0.12) {
      if (active) {
        if (this.step === 0) this.bar++
        this.playStep(this.step, this.nextTime)
      }
      this.nextTime += 60 / this.bpm / 4
      this.step = (this.step + 1) % 16
    }
  }

  playStep(st, t) {
    const z = this.zones
    if (z.pies && st % 4 === 0) this.kick(t, 0.85)
    if (z.caderas) {
      const root = BASS_ROOTS[this.bar % 4]
      if (st % 4 === 2) {
        this.tone(t, root, 0.32, 0.22, 'sine', false)
        this.tone(t, root * 2, 0.05, 0.12, 'triangle', false)
      }
      if (st === 7) this.tone(t, root * 1.5, 0.12, 0.12, 'sine', false)
    }
    if (z.brazos) {
      this.noiseHit(t, st % 4 === 2 ? 0.13 : 0.055, 'highpass', 7500, 0.05, 0.7, false)
      if (st === 4 || st === 12) this.noiseHit(t, 0.2, 'bandpass', 1600, 0.14, 1.2, true)
    }
    if (z.cabeza && st % 2 === 0 && Math.random() < 0.72) {
      const move = ARP_MOVES[Math.floor(Math.random() * ARP_MOVES.length)]
      this.arp = (this.arp + move + ARP.length) % ARP.length
      this.tone(t, ARP[this.arp], 0.07, 0.5, 'sine', true)
      this.tone(t, ARP[this.arp] * 2, 0.012, 0.3, 'triangle', true)
    }
  }

  tone(t, f, v, dur, type, fx) {
    const o = this.ac.createOscillator()
    const g = this.ac.createGain()
    o.type = type
    o.frequency.setValueAtTime(f, t)
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, v), t + 0.006)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    o.connect(g)
    g.connect(this.bus)
    if (fx) g.connect(this.fxIn)
    o.start(t)
    o.stop(t + dur + 0.05)
  }

  kick(t, v) {
    const o = this.ac.createOscillator()
    const g = this.ac.createGain()
    o.type = 'sine'
    o.frequency.setValueAtTime(130, t)
    o.frequency.exponentialRampToValueAtTime(42, t + 0.13)
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(v, t + 0.004)
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.4)
    o.connect(g)
    g.connect(this.bus)
    o.start(t)
    o.stop(t + 0.45)
  }

  noiseHit(t, v, type, freq, dur, q, fx) {
    const src = this.ac.createBufferSource()
    src.buffer = this.noise
    const f = this.ac.createBiquadFilter()
    f.type = type
    f.frequency.value = freq
    f.Q.value = q
    const g = this.ac.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(v, t + 0.002)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    src.connect(f)
    f.connect(g)
    g.connect(this.bus)
    if (fx) g.connect(this.fxIn)
    src.start(t, Math.random() * 0.8)
    src.stop(t + dur + 0.05)
  }
}
