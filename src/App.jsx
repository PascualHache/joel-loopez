import { useEffect, useState } from 'react'
import { DesignSwitcher } from './components/DesignSwitcher'
import { designs } from './data/designs'
import { Current } from './designs/Current'
import { Editorial } from './designs/Editorial'
import { Paths } from './designs/Paths'
import { Bold } from './designs/Bold'
import { PaperMoss } from './designs/turn3/PaperMoss'
import { NightForest } from './designs/turn3/NightForest'
import { ClayBreath } from './designs/turn3/ClayBreath'

const PAGES = {
  current: Current,
  editorial: Editorial,
  paths: Paths,
  bold: Bold,
  paper: PaperMoss,
  night: NightForest,
  clay: ClayBreath,
}

const STORAGE_KEY = 'joel-loopez:design'

function readStored() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return designs.some((d) => d.id === stored) ? stored : 'current'
  } catch {
    // Private windows and blocked site data both throw here.
    return 'current'
  }
}

export default function App() {
  const [design, setDesign] = useState(readStored)

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, design)
    } catch {
      /* Remembering the choice is a convenience, never a requirement. */
    }
  }, [design])

  function choose(next) {
    setDesign(next)
    window.scrollTo({ top: 0, behavior: 'auto' })
  }

  const Page = PAGES[design] ?? Current

  return (
    <>
      <Page />
      <DesignSwitcher value={design} onChange={choose} />
    </>
  )
}
