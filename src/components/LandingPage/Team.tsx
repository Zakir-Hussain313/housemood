'use client'
import Image from "next/image";
import TextReveal from "../TextReveal";
import { Playfair_Display } from "next/font/google";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionEnd from "../sectionEnd";

gsap.registerPlugin(ScrollTrigger);

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600']
})

export default function Team() {

    const stepsRef = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        gsap.from(stepsRef.current, {
            y: 50,
            duration: .6,
            stagger: .2,
            opacity: 0,
            scrollTrigger: {
                trigger: stepsRef.current,
                start: 'top 50%'
            }
        })
    }, []);

    return (
        <>
            <main className="bg-gray-200 text-gray-950">
                <p className="processStart font-semibold text-xl uppercase">Who work for you</p>
                <TextReveal
                    classname="processHeading font-semibold text-7xl md:text-8xl uppercase"
                    text="The Team:"
                />
                <section className="flex flex-col lg:flex-row gap-20">
                    <aside className="teamStatement text-3xl font-semibold w-[90vw] h-[20vh] md:w-[70vw] lg:w-[60vw]">
                        <TextReveal
                            text='We are a passionate team of designers dedicated to'
                            classname={`${playfair.className} font-semibold text-2xl sm:text-3xl`}
                        />
                        <TextReveal
                            text='transforming your vision into beautifully crafted spaces.'
                            classname={`${playfair.className} font-semibold text-2xl sm:text-3xl`}
                        />
                    </aside>
                    <aside className="teamImages flex flex-wrap justify-center gap-8">
                        <div className="relative w-52 h-48" ref={(element) => {stepsRef.current[0] = element}}>
                            <Image
                                src={'/team-6.avif'}
                                alt="Team Pictures"
                                fill
                                className="object-cover rounded-xl"
                            />
                            <div className="absolute left-6 bottom-3 z-20 text-white">
                                <h1 className="font-semibold text-xl">Tania Mehra</h1>
                                <h2 className="text-lg font-semibold opacity-80">Designer</h2>
                            </div>
                        </div>
                        <div className="relative w-52 h-48" ref={(element) => {stepsRef.current[1] = element}}>
                            <Image
                                src={'/team-2.avif'}
                                alt="Team Pictures"
                                fill
                                className="object-cover rounded-xl"
                            />
                            <div className="absolute right-2 bottom-1 z-20 text-black">
                                <h1 className="font-semibold text-xl">Adam D&apos;melo</h1>
                                <h2 className="text-lg font-semibold opacity-80">Designer</h2>
                            </div>
                        </div>
                        <div className="relative w-52 h-48" ref={(element) => {stepsRef.current[2] = element}}>
                            <Image
                                src={'/team-3.avif'}
                                alt="Team Pictures"
                                fill
                                className="object-cover rounded-xl"
                            />
                            <div className="absolute left-6 bottom-3 z-20 text-white">
                                <h1 className="font-semibold text-xl">Joseph Gonzalez</h1>
                                <h2 className="text-lg font-semibold opacity-80">Designer</h2>
                            </div>
                        </div>
                        <div className="teamOwner relative w-72 h-60 sm:w-120 sm:h-80" ref={(element) => {stepsRef.current[3] = element}}>
                            <Image
                                src={'/team-4.avif'}
                                alt="Team Pictures"
                                fill
                                className="object-cover rounded-xl"
                            />
                            <div className="absolute left-6 bottom-3 z-20 text-white">
                                <h1 className="font-semibold text-3xl">Austin Distel</h1>
                                <h2 className="text-lg font-semibold">Owner</h2>
                            </div>
                        </div>
                        <div className=" flex flex-col justify-center items-center gap-4 relative w-52 h-48 bg-gray-300 rounded-xl" ref={(element) => {stepsRef.current[4] = element}}>
                            <h1 className="font-bold text-6xl">50+</h1>
                            <h2 className="font-semibold opacity-80 uppercase">People in Business</h2>
                        </div>
                    </aside>
                </section>
            <SectionEnd />
            </main>
        </>
    )
}

