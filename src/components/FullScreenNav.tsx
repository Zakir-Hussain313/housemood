"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";


const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/work", label: "Work" },
    { path: "/contact", label: "Contact" },
];

const socialLinks = [
    { path: "", label: "X" },
    { path: "", label: "LinkedIn" },
    { path: "", label: "Facebook" },
    { path: "", label: "Instagram" },
];

export default function FullScreenNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const containerRef = useRef(null);
    const timeline = useRef<gsap.core.Timeline | null>(null);
    const logoRefs = useRef<(HTMLHeadingElement | null)[]>([])
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([])
    const socialRefs = useRef<(HTMLAnchorElement | null)[]>([])
    const headerTitleRef = useRef<HTMLHeadingElement | null>(null)
    const headerMenuBtnRef = useRef<HTMLButtonElement | null>(null)




    const handleMenu = () => setIsMenuOpen((prev) => !prev);

    useGSAP(() => {
        const tl = gsap.timeline({ paused: true });

        gsap.set(containerRef.current, {
            clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
            opacity: 1,
        });

        gsap.set([headerTitleRef.current, headerMenuBtnRef.current, ...logoRefs.current, ...linkRefs.current, ...socialRefs.current], {
            y: 100,
            opacity: 0,
        });

        gsap.to([headerTitleRef.current, headerMenuBtnRef.current], {
            y: 0,
            opacity: 1,
            duration: 1.25,
            ease: 'power3.out',
            delay: 0.2,
        })

        tl.to(containerRef.current, {
            duration: 1.5,
            ease: "power4.inOut",
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        })
            .to(
                logoRefs.current,
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power3.out",
                    stagger: 0.1,
                },
                "-=0.6"
            )
            .to(
                linkRefs.current,
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.15,
                },
                "-=0.9"
            )
            .to(
                socialRefs.current,
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.1,
                },
                "-=1"
            )

        timeline.current = tl;
    }, []);

    useEffect(() => {
        if (timeline.current) {
            isMenuOpen ? timeline.current.play() : timeline.current.reverse();
        }
    }, [isMenuOpen]);

    return (
        <>
            <div className={`logoMenu text-white bg-transparent`}>
                <div className="overflow-hidden absolute top-10 left-5">
                    <h1
                        ref={headerTitleRef}
                        className="text-xl font-semibold text-white"
                    >
                        CozyInc
                    </h1>
                </div>

                <div className="overflow-hidden absolute top-10 right-7">
                    <button
                        ref={headerMenuBtnRef}
                        className="text-xl font-semibold cursor-pointer"
                        onClick={handleMenu}
                    >
                        Menu
                    </button>
                </div>
            </div>

            <div
                ref={containerRef}
                className="fullScreenNav fixed top-0 left-0 text-white h-screen w-screen z-50 opacity-0 flex flex-col bg-black"
            >
                {/* TOP BAR */}
                <div className="logoClose flex justify-between items-center overflow-hidden">
                    <h1
                        ref={headerTitleRef}
                        className="text-xl font-semibold text-white"
                    >
                        CozyInc
                    </h1>
                    <button
                        ref={headerMenuBtnRef}
                        className="text-xl font-semibold text-white cursor-pointer overflow-hidden"
                        onClick={handleMenu}
                    >
                        Close
                    </button>
                </div>

                {/* NAV LINKS */}
                <div className="navlinks flex flex-col gap-5 p-10">
                    {navLinks.map((link, i) => (
                        <div key={i} className="overflow-hidden">
                            <Link
                                href={link.path}
                                ref={(el) => { linkRefs.current[i] = el }}
                                onClick={handleMenu}
                                className="inline-block text-4xl md:text-6xl font-semibold"
                            >
                                {link.label}
                            </Link>
                        </div>
                    ))}
                </div>

                {/* SOCIAL LINKS */}
                <div className="flex items-center justify-center">
                    <div className="socialLinks flex flex-wrap gap-5 sm:gap-10">
                        {socialLinks.map((link, i) => (
                            <div key={i} className="overflow-hidden">
                                <Link
                                    href={link.path}
                                    ref={(el) => { linkRefs.current[i] = el }}
                                    className="sm:inline-block hidden sm:text-xl font-semibold"
                                >
                                    {link.label}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
