'use client'
import Image from 'next/image'
import { Lora } from "next/font/google";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MdArrowRightAlt } from 'react-icons/md';

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
    <main className="min-h-dvh overflow-hidden flex items-center justify-center">
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

        <div className="flex justify-center items-center text-white">
          <button className="group text-2xl flex items-center gap-2 font-semibold cursor-pointer border-b-2 border-gray-500">
            Start Your Project
            <MdArrowRightAlt className="transition-transform duration-200 group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </main>
  )
}


