'use client'

import Image from "next/image"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Cormorant } from "next/font/google"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const playfair = Cormorant({
  weight: "700",
  subsets: ["latin"]
})

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/recent', label: 'Recent Projects' },
  { path: '/contact', label: 'Contact' }
];

const socialLinks = [
  { path: '#', label: 'X' },
  { path: '#', label: 'Instagram' },
  { path: '#', label: 'LinkedIn' },
  { path: '#', label: 'Whatsapp' },
]

export default function Home() {

  const container = useRef(null);
  const tl = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }


  useGSAP(() => {
    const textsRef = document.querySelectorAll('.texts');
    tl.current = gsap.timeline({ paused: true })
      .to(container.current, {
        duration: 1.25,
        ease: 'power4.inOut',
        y: (window.innerWidth <= 900) ? 532 : 620,
        stagger: 0.1,
      })
      .from(textsRef, {
        y: 75,
        stagger: 0.1,
        duration: 1,
        ease: 'power4.inOut',
        delay: -0.75,
        opacity: 0
      })


  }, { scope: container });

  useEffect(() => {
    if (isMenuOpen) tl.current.play();
    else tl.current.reverse();
  }, [isMenuOpen]);

  return (
    <div>
      <div ref={container} className="w-screen h-screen bg-gray-950 absolute -top-133 md:-top-155 z-50 text-white">
        <div className="text-white absolute left-3 sm:left-6 w-[94%] h-[15%] flex justify-between items-center">
          <div className="text-2xl texts">
            <h1 className={playfair.className}>CozyInc</h1>
          </div>
          <div className="texts">
            <p className="font-semibold text-lg cursor-pointer" onClick={handleMenuToggle}>Close</p>
          </div>
        </div>
        <div className="absolute top-30 md:top-35 left-8 flex flex-col gap-5">
          {navLinks.map((link, index) => (
            <div className="text-5xl texts" key={index}>
              <Link className={playfair.className} href={link.path} onClick={handleMenuToggle}>{link.label}</Link>
            </div>
          ))}
        </div>

        <div className="absolute w-screen bottom-10 md:bottom-15 flex md:gap-20 gap-4 justify-center">
          {socialLinks.map((link, index) => (
            <div className="text-lg sm:text-xl texts" key={index}>
              <Link className="" href={link.path}>{link.label}</Link>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Image
          src={'/clay-banks-KL_xnnjbRgs-unsplash.jpg'}
          alt="Home Picture"
          fill
          className="w-screen h-screen object-cover"
        />
        <div className="absolute top-35 md:top-35 lg:top-30 left-5 lg:left-10 text-white text-lg sm:text-4xl md:text-4xl lg:text-5xl font-semibold">
          <p>We Craft Interiors
            <br />
            Since <span className="text-amber-200">2014</span></p>
        </div>
        <div className="absolute bottom-26 left-5">
          <p className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white">Your House <br /><span className="text-6xl md:text-7xl lg:text-8xl text-yellow-100">Is The Place</span> <span className="text-7xl md:text-7xl lg:text-8xl text-yellow-200">Of Mood</span></p>
        </div>
        <div className="absolute bottom-6 right-6 rounded-lg w-32 h-12 bg-yellow-50 flex justify-center items-center">
          <Link className="text-lg font-semibold" href={''}>Contact Us</Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="absolute top-5 z-10 text-white flex w-[94%] justify-between">
          <div className="text-2xl">
            <h1 className={playfair.className}>CozyInc</h1>
          </div>
          <div>
            <p className="font-semibold text-lg cursor-pointer" onClick={handleMenuToggle}>Menu</p>
          </div>
        </div>
      </div>
    </div>
  )
}


//-top-133 md:-top-154