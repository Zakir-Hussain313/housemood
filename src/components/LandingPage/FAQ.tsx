"use client";
import { useState, useRef } from "react";
import { Plus } from "lucide-react";
import TextReveal from "../TextReveal";
import { MdArrowRightAlt } from "react-icons/md";

const faqs = [
    {
        q: "What interior design services do you offer?",
        a: `We provide complete interior design solutions, from concept development and space planning to selecting colors, furniture, and custom designs. We also handle lighting, décor styling, and project management to ensure every detail is seamless. Whether a single room or a full renovation, we create a stylish, personalized space that suits your lifestyle.`,
    },
    {
        q: "How does the design process work from start to finish?",
        a: `We start with a consultation to understand your vision, needs, and preferences. Then we assess the space and create a concept with mood boards, sketches, and layout ideas. After approval, we develop detailed designs with 3D renderings, materials, and finishes. Finally, we oversee implementation, working with contractors to bring the design to life, ensuring every step reflects your input.`,
    },
    {
        q: "How long does an interior design project typically take?",
        a: `Project timelines vary by scope. Small projects like a single room usually take 4-8 weeks, while full home renovations can take several months. The process includes consultations, concept design, revisions, sourcing materials, and implementation. We keep you updated throughout to ensure a smooth process.`,
    },
    {
        q: "Can you help design small spaces or single rooms?",
        a: `Yes! We design spaces of all sizes, including small areas and single rooms. We maximize functionality and create cohesive, stylish designs tailored to your needs, making even compact spaces practical and beautiful.`,
    },
    {
        q: "How do you determine the project budget?",
        a: `We work closely with you to set a budget based on your goals and preferences. We assess the project scope, materials, and furnishings, then provide a clear breakdown of costs to ensure your vision aligns with your budget.`,
    },
];


export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);
    const [heights, setHeights] = useState<number[]>([]);
    const contentRefs = useRef<Array<HTMLDivElement | null>>([]);

    const toggleFAQ = (index: number) => {
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
            // Measure height when opening
            const newHeights = [...heights];
            const el = contentRefs.current[index];
            if (el) {
                newHeights[index] = el.scrollHeight;
                setHeights(newHeights);
            }
        }
    };

    return (
        <section className="faq-container bg-gray-200 text-gray-950">
            <p className="processStart font-semibold text-xl uppercase">you might want to ask us</p>

            <section className="flex flex-col lg:flex-row">
                <TextReveal
                    classname="processHeading font-semibold text-6xl md:text-8xl uppercase"
                    text="FAQ:"
                />

                <div className="faq-list">
                    {faqs.map((item, i) => (
                        <div
                            key={i}
                            className="faq-card"
                            onClick={() => toggleFAQ(i)}
                        >
                            <div className="faq-question">
                                <span>{item.q}</span>
                                <Plus className={`faq-plus ${open === i ? "open" : ""} text-3xl sm:text-lg`} />
                            </div>

                            <div
                                ref={(el) => {contentRefs.current[i] = el}}
                                className={`faq-answer ${open === i ? "open" : ""}`}
                                style={{
                                    maxHeight: open === i ? `${heights[i]}px` : "0px",
                                }}
                            >
                                <p>{item.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
                <div className="projectsBtn flex justify-end-safe items-center">
                    <button className="group text-2xl flex items-center gap-2 font-semibold cursor-pointer border-b-2 border-gray-500">
                        Ask your Question
                        <MdArrowRightAlt className="transition-transform duration-200 group-hover:translate-x-2" />
                    </button>
                </div>
        </section>
    );
}
