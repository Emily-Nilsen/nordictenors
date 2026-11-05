import { useEffect, useRef, useState } from 'react'

// Wraps a homepage section (a heading and its concert list). The lists already
// drop concerts whose date has passed; once a list inside has no concerts left,
// this hides the whole section, heading included, and tells the layout to drop
// it from "På denne siden".
export function Upcoming({ children }) {
  const ref = useRef(null)
  const [isEmpty, setIsEmpty] = useState(false)

  useEffect(() => {
    if (ref.current && !ref.current.querySelector('li')) setIsEmpty(true)
  }, [])

  useEffect(() => {
    if (isEmpty) window.dispatchEvent(new Event('sections-changed'))
  }, [isEmpty])

  if (isEmpty) return null
  return <div ref={ref}>{children}</div>
}
