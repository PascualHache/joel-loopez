/**
 * The Ecstatic Dance subview: the visitor accepts the floor's agreements, then
 * the floor opens and each body part they wake adds a layer to the music.
 */
export const agreements = [
  {
    title: 'Sin hablar en la pista',
    desc: 'Las palabras se quedan fuera del espacio de baile. Si necesitas hablar, sal un momento.',
  },
  {
    title: 'Sin coreografías',
    desc: 'No hay pasos correctos ni nada que aprender. Tu cuerpo decide cómo moverse.',
  },
  {
    title: 'Sin juicios',
    desc: 'Ni hacia los demás ni hacia ti. Aquí nadie mira para evaluar.',
  },
  {
    title: 'Descalzo y cómodo',
    desc: 'Ropa cómoda, agua a mano y una muda de recambio: se suda.',
  },
  {
    title: 'Sin móvil ni fotos',
    desc: 'Para que todo el mundo pueda soltarse sin sentirse observado.',
  },
  {
    title: 'Sin alcohol ni sustancias',
    desc: 'El viaje lo hace la música. Ven con la cabeza clara.',
  },
  {
    title: 'El contacto es opcional',
    desc: 'Respeta el espacio de cada cual. Un gesto claro, como juntar las manos en el pecho, basta para decir «ahora no».',
  },
  {
    title: 'Tu ritmo, tu viaje',
    desc: 'Puedes parar, descansar, tumbarte o salir cuando lo necesites. También es bailar.',
  },
]

export const bring = ['Ropa cómoda', 'Agua', 'Ropa de recambio']

/** Hue per body part; the button sits over its part of the figure (% of the figure box). */
export const zones = [
  { id: 'cabeza', label: 'Cabeza', hue: 215, x: 77, y: 9 },
  { id: 'brazos', label: 'Brazos', hue: 255, x: 20, y: 21 },
  { id: 'pecho', label: 'Pecho', hue: 295, x: 50, y: 30 },
  { id: 'caderas', label: 'Caderas', hue: 335, x: 48, y: 48 },
  { id: 'pies', label: 'Pies', hue: 15, x: 57, y: 78 },
]

export const tempos = [
  { label: 'Lento', bpm: 84 },
  { label: 'Medio', bpm: 104 },
  { label: 'Intenso', bpm: 122 },
]

/** Indexed by how much of the floor is dancing, from nobody to everyone. */
export const moods = ['Esperando', 'Se despierta', 'Se suelta', 'Vuela', 'Un solo pulso']

export const signup = {
  label: 'Inscripciones',
  href: 'https://linktr.ee/JoelLoopez',
  next: 'Ecstatic Dance con DJ Joel Loopez · [PRÓXIMA FECHA Y LUGAR]',
}
