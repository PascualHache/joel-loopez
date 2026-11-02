import { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { DesignSwitcher } from './components/DesignSwitcher'
import { designs } from './data/designs'
import { Current } from './designs/Current'
import { Paths } from './designs/Paths'
import { Bold } from './designs/Bold'
import { BoldEcstaticDance } from './designs/BoldEcstaticDance'
import { BoldMusicService } from './designs/BoldMusicService'
import { BoldStudio } from './designs/BoldStudio'
import { BoldLicensing } from './designs/BoldLicensing'
import { BoldLegal } from './designs/BoldLegal'
import { legalNotice, privacyPolicy } from './data/legal'
import { NightForest } from './designs/turn3/NightForest'

const PAGES = {
  current: Current,
  paths: Paths,
  bold: Bold,
  night: NightForest,
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

/**
 * Subview links can carry a hash (`/#contact`), which the router does not
 * scroll to on its own; a plain page change starts at the top.
 */
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView()
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
}

export default function App() {
  const [design, setDesign] = useState(readStored)
  const navigate = useNavigate()
  useScrollOnNavigate()

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, design)
    } catch {
      /* Remembering the choice is a convenience, never a requirement. */
    }
  }, [design])

  function choose(next) {
    setDesign(next)
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'instant' })
  }

  const Page = PAGES[design] ?? Current

  return (
    <>
      <Routes>
        <Route path="/" element={<Page />} />
        {/* B subviews: the top nav lists only these; the home scrolls by anchors. */}
        <Route path="/music-service" element={<BoldMusicService />} />
        <Route path="/the-studio" element={<BoldStudio />} />
        <Route path="/licensing" element={<BoldLicensing />} />
        <Route path="/ecstatic-dance" element={<BoldEcstaticDance />} />
        <Route path="/privacy" element={<BoldLegal doc={privacyPolicy} />} />
        <Route path="/legal" element={<BoldLegal doc={legalNotice} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <DesignSwitcher value={design} onChange={choose} />
    </>
  )
}
