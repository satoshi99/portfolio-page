import { useState, useEffect } from 'react'

export const useHandleScroll = () => {
  const [scrollY, setScrollY] = useState(0)
  const handleScroll = () => {
    setScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return {
    scrollY,
    setScrollY,
  }
}
