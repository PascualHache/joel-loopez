import { BoldHeader } from './Bold'
import './Bold.css'

/** 1c subview — still blank: only the shared header for now. */
export function BoldEcstaticDance() {
  return (
    <div className="bo">
      <div className="bo__top">
        <div className="bo__subHead container">
          <BoldHeader />
        </div>
      </div>
      <main className="bo__sub container" />
    </div>
  )
}
