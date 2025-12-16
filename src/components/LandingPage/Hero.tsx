'use client'
import Image from 'next/image'
import { Lora } from "next/font/google";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const playfair = Lora({
  subsets: ["latin"],
  weight: ["400", '600', '700'],
});

export default function Hero() {

  const headingRef = useRef<HTMLHeadingElement>(null)
  const subHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current || !subHeadingRef.current) return

    gsap.fromTo(
      [headingRef.current, subHeadingRef.current],
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.25,
        ease: 'power3.out',
        delay: 0.2
      }
    )
  }, [])

  return (
    <main className="min-h-screen overflow-hidden flex items-center justify-center">
      <Image
        src="/interior-1.avif"
        fill
        alt="background"
        className="object-cover -z-10"
        priority
      />
      <div className="absolute inset-0 bg-black/40 -z-5"></div>
      <div className="heroTexts space-y-4 text-center flex-wrap">
        <h1
          ref={headingRef}
          className={`${playfair.className} text-4xl sm:text-5xl lg:text-7xl text-white font-semibold`}
        >
          Your Vision, Our Design
        </h1>

        <h1
          ref={subHeadingRef}
          className={`${playfair.className} texts text-lg md:text-2xl text-white font-semibold`}
        >
          Bringing your ideas to life with spaces that are beautiful, functional, and uniquely yours        </h1>

        <div className='btnDiv flex justify-center items-center'>
          <button className="uppercase rounded-4xl w-[50vw] md:w-[25vw] lg:w-[20vw] h-12 bg-gray-900 text-base md:text-lg text-white font-semibold cursor-pointer transition transform duration-300 hover:scale-105 hover:bg-gray-950 hover:shadow-lg">
            Start your project
          </button>
        </div>
      </div>
    </main>
  )
}


