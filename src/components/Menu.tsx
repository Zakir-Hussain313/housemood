'use client';
import { useEffect, useRef, useState } from 'react'
import './Menu.css' 
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const menuLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/team', label: 'Team' },
  { path: '/recent-projects', label: 'Recent Projects' },
  { path: '/contact', label: 'Contact' },
];
const Menu = () => {
  const container = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tl = useRef(null);
  useGSAP(() => {
    gsap.set('.menu-link-item-holder', { y: 75 });
    tl.current = gsap.timeline({ paused: true })
      .to('.menu-overlay', {
        duration: 1.25,
        clipPath: 'polygon(0% 0% , 100% 0% , 100% 100% , 0% 100%)',
        ease: 'power4.inOut'
      })
      .to('.menu-link-item-holder', {
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power4.inOut',
        delay: -0.75,
      })
  }, { scope: container });

  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className='menu-container' ref={container}>
      <div className="menu-bar">
        <div className="menu-logo">
          <Link href={''}>CozyInc</Link>
        </div>
        <div className="menu-open" onClick={toggleMenu}>
          <p>Menu</p>
        </div>
      </div>
      <div className="menu-overlay">
        <div className="menu-overlay-bar">
          <div className="menu-logo">
            <Link href={''}>CozyInc</Link>
          </div>
          <div className="menu-close" onClick={toggleMenu}>
            <p>Close</p>
          </div>
        </div>
        <div className='flex items-center'>
          <div className="menu-copy">
            <div className="menu-links">
              {menuLinks.map((link, index) => (
                <div className="menu-link-item" key={index}>
                  <div className="menu-link-item-holder">
                    <Link href={link.path} className='menu-link' onClick={toggleMenu}>
                      {link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="menu-info flex flex-col justify-center gap-10 pr-20">
            <div className="menu-info-col">
              <a href="">X </a>
              <a href="">Instagram </a>
              <a href="">Behance </a>
              <a href="">Facebook </a>
              <a href="">LinkedIn </a>
            </div>
            <div className="menu-info-col">
              <p>kiroo@gmail.com</p>
              <p>93476975</p>
            </div>
          </div>
        </div>
      </div>
    </div>)
}
export default Menu