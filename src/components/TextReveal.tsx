'use client'

import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

type Props = {
  text: string
  delay?: number
  classname : string
}

gsap.registerPlugin(ScrollTrigger);


export default function TextReveal({ text, delay = 0 , classname }: Props) {
  const textRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    gsap.fromTo(
      textRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.25,
        ease: 'power3.out',
        scrollTrigger : {
          trigger : textRef.current.parentElement,
          start : 'top 70%',
        }
      }
    )
  }, [delay])

  return (
    <div className="overflow-hidden">
      <h1
        ref={textRef}
        className={classname}
      >
        {text}
      </h1>
    </div>
  )
}

