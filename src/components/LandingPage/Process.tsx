'use client'
import Image from "next/image";
import TextReveal from "../TextReveal";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionEnd from "../sectionEnd";
import { MdArrowRightAlt } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
    { index: '01.', image: '/tecgspecs.avif', title: 'Tech Specifications', description: 'Technical assignment, measuring the site, and assessing remodeling needs.' },
    { index: '02.', image: '/concept.avif', title: 'Concept , Sketches', description: 'A hand-drawn sketch typically outlines the style and layout of the future interior' },
    { index: '03.', image: '/design.avif', title: 'Design Project', description: 'Details on color schemes, furniture, lighting placement, and technical layouts.' },
    { index: '04.', image: '/3d.avif', title: '3D Visualization', description: 'So that the client can see with his own eyes what he will ultimately receive.' },
    { index: '05.', image: '/estimation.avif', title: 'Estimation', description: "The pricing details and the total cost of the customer's interior design project." },
    { index: '06.', image: '/materials.avif', title: 'Materials,etc.', description: 'Building materials, components and furniture:  everything you need for the interior.' },
    { index: '07.', image: '/suprvision.avif', title: 'Supervision', description: 'Supervises the work, making sure that the interior exactly as he intended.' },
]

export default function Process() {

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
        <main className="text-gray-950 bg-gray-200">
            <p className="processStart font-semibold text-xl uppercase">How we do it</p>
            <div className="flex flex-wrap sm:justify-center">
                <TextReveal
                    classname="processHeading font-semibold text-6xl md:text-8xl uppercase"
                    text="Process: *"
                />
                {processSteps.map((step, index) => (
                    <div key={index} className="stepsDiv w-[80vw] sm:w-[40vw] md:w-[30vw] lg:w-[22vw]"
                        ref={(element) => {stepsRef.current[index] = element}}>
                        <div>
                            <p className="font-semibold text-gray-700 text-2xl">{step.index}</p>
                        </div>
                        <div className="relative w-[70vw] h-[20vw] sm:w-[35vw] sm:h-[12vw] md:w-[30vw] md:h-[10vw] lg:w-[20vw] lg:h-[6vw]">
                            <Image
                                src={step.image}
                                alt="Process Images"
                                fill
                                className="object-cover rounded-xl"
                            />
                        </div>
                        <div className="processTexts">
                            <h1 className="processTitle font-semibold text-3xl md:text-2xl">{step.title}</h1>
                            <p className="processDes font-semibold text-gray-700 text-base">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="ArrowButton flex justify-center items-center">
                <button className="group text-2xl flex items-center gap-2 font-semibold cursor-pointer border-b-2 border-gray-500">
                    Get Free Consultation
                    <MdArrowRightAlt className="transition-transform duration-200 group-hover:translate-x-2" />
                </button>
            </div>
            <SectionEnd />
        </main>
    )
}