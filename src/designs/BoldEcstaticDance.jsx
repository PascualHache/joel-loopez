import { useEffect, useRef, useState } from 'react'
import { agreements, bring, moods, signup, tempos, zones } from '../data/dance'
import { DanceAudio } from '../lib/danceAudio'
import { BoldContact, BoldSubpage, ServicePaths, SubHero } from './Bold'
import './BoldMusicService.css'
import './BoldEcstaticDance.css'

const AGREEMENT_NOTES = [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.66, 1318.51]
const OPEN_CHORD = [440, 523.25, 659.25, 783.99, 1046.5]
const ALL_ASLEEP = Object.fromEntries(zones.map((z) => [z.id, false]))

/**
 * The crowd: three rows, back to front, each figure bigger and brighter as it
 * nears the viewer. Fixed jitter keeps the layout stable between renders.
 * `rank` orders figures by closeness to the dancer, who join first.
 */
const CROWD = (() => {
  const rows = [
    { n: 10, bottom: 420, s: 1.1, op: 0.5, near: 0.35 },
    { n: 10, bottom: 250, s: 1.5, op: 0.75, near: 0.15 },
    { n: 6, bottom: 36, s: 2.0, op: 1, near: 0, fixed: [5, 15, 25, 67, 78, 89] },
  ]
  const jitter = [
    0.3, -0.6, 0.8, -0.2, 0.5, -0.9, 0.1, 0.7, -0.4, 0.9, -0.7, 0.2, -0.1, 0.6, -0.5, 0.4, -0.8,
    0.0, 0.65, -0.35, 0.15, -0.55, 0.45, -0.25, 0.75, -0.65,
  ]
  const crowd = []
  let k = 0
  rows.forEach((r, ri) => {
    const step = 94 / r.n
    for (let i = 0; i < r.n; i++) {
      const j = jitter[k % jitter.length]
      const left = r.fixed
        ? r.fixed[i] + j * 2
        : 3 + step * (i + 0.5) + j * step * 0.3 - (ri === 1 ? step * 0.25 : 0)
      crowd.push({
        left,
        bottom: r.bottom + Math.round(j * 10),
        head: Math.round(12 * r.s),
        w: Math.round(14 * r.s),
        h: Math.round((40 + j * 8) * r.s),
        gap: Math.max(2, Math.round(4 * r.s)),
        op: r.op,
        phase: (k * 0.37) % 1,
        hue: j * 0.08,
        dist: Math.abs(left - 48) / 50 + r.near,
      })
      k++
    }
  })
  ;[...crowd.keys()]
    .sort((a, b) => crowd[a].dist - crowd[b].dist)
    .forEach((idx, rank) => {
      crowd[idx].rank = rank
    })
  return crowd
})()

/** Energy 0–1 sweeps the crowd from blue through violet to warm orange. */
function colorAt(x) {
  const v = Math.max(0, Math.min(1, x))
  return `hsl(${Math.round(215 + v * 163) % 360}, 92%, 66%)`
}

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

/** B subview: accept the floor's agreements, then play the dance floor. */
export function BoldEcstaticDance() {
  const [ok, setOk] = useState(() => agreements.map(() => false))
  const [open, setOpen] = useState(false)
  const [showCards, setShowCards] = useState(true)
  const [awake, setAwake] = useState(ALL_ASLEEP)
  const [tempo, setTempo] = useState(1)

  const audio = useRef(null)
  const openTimer = useRef(null)
  if (!audio.current) audio.current = new DanceAudio()

  useEffect(() => {
    const engine = audio.current
    return () => {
      clearTimeout(openTimer.current)
      engine.close()
    }
  }, [])

  useEffect(() => {
    audio.current.update(awake, tempos[tempo].bpm)
  }, [awake, tempo])

  function toggleAgreement(i) {
    if (open) return
    const next = ok.slice()
    next[i] = !next[i]
    const all = next.every(Boolean)
    if (next[i]) audio.current.chime(all ? OPEN_CHORD : [AGREEMENT_NOTES[i]])
    setOk(next)
    clearTimeout(openTimer.current)
    if (all) {
      openTimer.current = setTimeout(() => {
        setOpen(true)
        setShowCards(false)
      }, 750)
    }
  }

  function toggleZone(id) {
    audio.current.start()
    setAwake((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const count = ok.filter(Boolean).length
  const total = agreements.length
  const collapsing = open && !showCards

  const beat = (60 / tempos[tempo].bpm).toFixed(3)
  const awakeCount = zones.filter((z) => awake[z.id]).length
  const energy = (awakeCount / zones.length) * (0.7 + 0.15 * tempo)
  const dancing = Math.round(energy * CROWD.length)
  const bucket = awakeCount ? Math.max(1, Math.min(4, Math.ceil(energy * 4))) : 0

  let hint = 'Toca una parte del cuerpo. La pista te sigue.'
  if (awakeCount === 5 && tempo === 2) hint = 'Todo el cuerpo y toda la pista. Así suena un solo pulso.'
  else if (awakeCount === 5) hint = 'Todo el cuerpo bailando. Sube a Intenso para llevar la pista a la cima.'
  else if (awakeCount > 0)
    hint = `${awakeCount} de 5 partes del cuerpo bailando. Suma otra o sube el tempo y mira quién se une.`

  const hero = (
    <SubHero
      label="Ecstatic Dance"
      title={open ? 'La pista está abierta.' : 'Antes de entrar a la pista.'}
      aside={
        <>
          <p className="bo__subLede">
            {open
              ? 'Aquí no hay pasos que aprender: la música entra por el cuerpo. Toca una parte y escucha. Cuanta más energía pongas, más gente se une a bailar contigo.'
              : 'El Ecstatic Dance es un encuentro de baile libre de unas tres horas, centrado en lo que siente el cuerpo. Lo que permite soltarse son unos pocos acuerdos que todo el mundo comparte. Tócalos uno a uno para aceptarlos y abrir la pista.'}
          </p>
          <div className="ec__bring">
            <span className="ec__bringLabel">Qué traer</span>
            <span className="ec__chips">
              {bring.map((item) => (
                <span className="ec__chip" key={item}>
                  {item}
                </span>
              ))}
            </span>
          </div>
          <div className="bo__subCtas">
            <a className="bo__btnLight" href={signup.href} target="_blank" rel="noreferrer">
              {signup.label}
            </a>
            <span className="ec__next">{signup.next}</span>
          </div>
        </>
      }
    />
  )

  return (
    <BoldSubpage hero={hero}>
      <main className="ec container">
      <div className="ec__stage">
        {/* Once the floor opens the agreements fold into this summary line. */}
        <div
          className="ec__fold"
          style={{
            gridTemplateRows: open ? '1fr' : '0fr',
            visibility: open ? 'visible' : 'hidden',
            transition: `grid-template-rows 500ms ease ${showCards ? '0ms' : '450ms'}`,
          }}
        >
          <div className="ec__foldInner">
            <div className="ec__summary">
              <span className="ec__check">
                <Check />
              </span>
              <span className="ec__summaryText">{total} acuerdos aceptados</span>
              <span className="ec__dots" aria-hidden="true">
                {agreements.map((a) => (
                  <span className="ec__dot" key={a.title} />
                ))}
              </span>
              <button
                type="button"
                className="ec__summaryBtn"
                aria-expanded={showCards}
                onClick={() => setShowCards((v) => !v)}
              >
                {showCards ? 'Ocultar acuerdos' : 'Ver acuerdos'}
              </button>
            </div>
          </div>
        </div>

        <div
          className="ec__fold"
          style={{
            gridTemplateRows: showCards ? '1fr' : '0fr',
            visibility: showCards ? 'visible' : 'hidden',
            transition: `grid-template-rows 650ms cubic-bezier(0.65, 0, 0.35, 1) ${collapsing ? '480ms' : '0ms'}, visibility 0s linear ${showCards ? '0ms' : '1200ms'}`,
          }}
        >
          <div className="ec__foldInner">
            <section className="ec__agreements" aria-labelledby="ec-agreements">
              <h2 className="bo__h2" id="ec-agreements">
                Los acuerdos.
              </h2>
              <div className="ec__progress">
                <span className="ec__count" role="status">
                  {count} de {total} acuerdos
                </span>
                <div className="ec__bar">
                  <div className="ec__barFill" style={{ width: `${(count / total) * 100}%` }} />
                </div>
                <span className="ec__progressNote">
                  {count === total ? 'La pista se abre…' : 'Cuando los aceptes todos, la pista se abre.'}
                </span>
              </div>

              <div className="ec__cards">
                {agreements.map((a, i) => (
                  <button
                    type="button"
                    className="ec__card"
                    key={a.title}
                    aria-pressed={ok[i]}
                    onClick={() => toggleAgreement(i)}
                    style={{
                      opacity: collapsing ? 0 : 1,
                      transform: collapsing ? 'translateY(-28px) scale(0.9)' : 'none',
                      '--ec-delay': collapsing ? `${i * 55}ms` : '0ms',
                    }}
                  >
                    <span className="ec__cardTop">
                      <span className="ec__cardNum">{String(i + 1).padStart(2, '0')}</span>
                      <span className="ec__cardIcon">{ok[i] && <Check />}</span>
                    </span>
                    <span className="ec__cardTitle">{a.title}</span>
                    <span className="ec__cardDesc">{a.desc}</span>
                    <span className="ec__cardLabel">{ok[i] ? 'Aceptado' : 'Toca para aceptar'}</span>
                  </button>
                ))}
              </div>
            </section>
          </div>
        </div>

        <section
          className="ec__fold ec__floorFold"
          aria-labelledby="ec-floor"
          style={{
            gridTemplateRows: open ? '1fr' : '0fr',
            visibility: open ? 'visible' : 'hidden',
          }}
        >
          <div className="ec__foldInner">
            <div
              className="ec__floorWrap"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'none' : 'translateY(32px)',
              }}
            >
              <div className="ec__head">
                <h2 className="bo__h2" id="ec-floor">
                  La pista.
                </h2>
                <p className="ec__note">Mejor con auriculares.</p>
              </div>

              <div className="ec__floor">
                <div className="ec__crowd" aria-hidden="true">
                  {CROWD.map((d, i) => {
                    const active = d.rank < dancing
                    const late = bucket > 1 && d.rank >= dancing * 0.65
                    const color = active ? colorAt(energy + d.hue) : '#1F1F23'
                    return (
                      <div
                        className="ec__dancer"
                        key={i}
                        style={{
                          left: `${d.left.toFixed(2)}%`,
                          bottom: d.bottom,
                          gap: d.gap,
                          opacity: active ? d.op : (d.op * 0.7).toFixed(2),
                          animation: active
                            ? `ecDance${late ? bucket - 1 : bucket} ${beat}s ease-in-out ${(-d.phase * beat).toFixed(3)}s infinite alternate`
                            : `ecIdle 3.2s ease-in-out ${(-d.phase * 3.2).toFixed(2)}s infinite alternate`,
                        }}
                      >
                        <div
                          className="ec__dancerPart"
                          style={{ width: d.head, height: d.head, background: color }}
                        />
                        <div
                          className="ec__dancerPart"
                          style={{
                            width: d.w,
                            height: d.h,
                            background: color,
                            boxShadow: `0 0 ${active ? Math.round(energy * energy * 18) : 0}px ${color}`,
                          }}
                        />
                      </div>
                    )
                  })}
                </div>

                <span className="ec__mood">La pista · {moods[bucket]}</span>
                <div className="ec__meter">
                  <span className="ec__meterText">
                    {dancing} de {CROWD.length} bailando
                  </span>
                  <div className="ec__meterBar">
                    <div
                      className="ec__meterFill"
                      style={{ width: `${Math.round(energy * 100)}%`, background: colorAt(energy) }}
                    />
                  </div>
                </div>

                <Figure awake={awake} beat={beat} onToggle={toggleZone} />
              </div>

              <div className="ec__controls">
                <div className="ec__tempos">
                  <span className="ec__tempoLabel">Tempo</span>
                  {tempos.map((t, i) => (
                    <button
                      type="button"
                      className="ec__pill"
                      key={t.label}
                      aria-pressed={i === tempo}
                      onClick={() => setTempo(i)}
                    >
                      {t.label} <span className="ec__bpm">{t.bpm} BPM</span>
                    </button>
                  ))}
                </div>
                <p className="ec__hint" role="status">
                  {hint}
                </p>
                <button type="button" className="ec__pill" onClick={() => setAwake(ALL_ASLEEP)}>
                  Silencio total
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      </main>

      <section className="ms__services container" aria-labelledby="ec-services">
        <h2 className="bo__h2" id="ec-services">
          Services.
        </h2>
        <ServicePaths />
      </section>

      <BoldContact />
    </BoldSubpage>
  )
}

/** The dancer: each body part pulses on the beat and glows in its hue once awake. */
function Figure({ awake, beat, onToggle }) {
  const look = (id) => {
    const zone = zones.find((z) => z.id === id)
    const color = `hsl(${zone.hue}, 92%, 66%)`
    const on = awake[id]
    return {
      color: on ? color : '#34343A',
      style: {
        animation: on ? `ecPulse ${beat}s ease-out infinite` : 'none',
        filter: on ? `drop-shadow(0 0 12px ${color})` : 'none',
      },
    }
  }
  const arms = look('brazos')
  const feet = look('pies')
  const hips = look('caderas')
  const chest = look('pecho')
  const head = look('cabeza')

  return (
    <div className="ec__figure">
      <svg viewBox="0 0 300 600" aria-hidden="true">
        <g className="ec__part" style={arms.style}>
          <polyline points="122,150 78,100 92,34" fill="none" stroke={arms.color} strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="182,152 236,200 274,158" fill="none" stroke={arms.color} strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="ec__part" style={feet.style}>
          <polyline points="128,312 104,428 118,544 90,560" fill="none" stroke={feet.color} strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" />
          <polyline points="160,312 196,420 236,520 264,540" fill="none" stroke={feet.color} strokeWidth="26" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <g className="ec__part" style={hips.style}>
          <line x1="146" y1="262" x2="142" y2="300" stroke={hips.color} strokeWidth="76" strokeLinecap="round" />
        </g>
        <g className="ec__part" style={chest.style}>
          <line x1="152" y1="146" x2="148" y2="214" stroke={chest.color} strokeWidth="66" strokeLinecap="round" />
        </g>
        <g className="ec__part" style={head.style}>
          <circle cx="160" cy="70" r="38" fill={head.color} />
        </g>
      </svg>

      {zones.map((z) => {
        const color = `hsl(${z.hue}, 92%, 66%)`
        const on = awake[z.id]
        return (
          <button
            type="button"
            className="ec__zone"
            key={z.id}
            aria-pressed={on}
            onClick={() => onToggle(z.id)}
            style={{ left: `${z.x}%`, top: `${z.y}%`, borderColor: on ? color : '#3A3A3D' }}
          >
            <span className="ec__zoneDot" style={{ background: on ? color : '#5A5A5E' }} />
            {z.label}
          </button>
        )
      })}
    </div>
  )
}
