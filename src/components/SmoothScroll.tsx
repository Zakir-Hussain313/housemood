"use client"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,        // scroll animation duration
      lerp: 0.1,             // smoothing factor (0 = no smoothing, 1 = max)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // optional
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return null
}
