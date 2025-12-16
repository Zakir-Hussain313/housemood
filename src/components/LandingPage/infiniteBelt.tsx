'use client';
import gsap from "gsap";
import { Plus } from "lucide-react";
import { useEffect } from "react";

export default function InfiniteBelt() {

    useEffect(() => {
        const arrow = gsap.utils.toArray('.arrowIcon');
        const belts = gsap.utils.toArray<HTMLDivElement>(".scrollBelt .marque");

        // Set width properly (inline-block behavior)
        belts.forEach((belt) => {
            belt.style.flex = "0 0 auto"; // don’t shrink
        });

        const tween = gsap.to(belts, {
            xPercent: -100,
            repeat: -1,
            duration: 8,
            ease: "linear", // no easing for smoothness
        });
        let direction = 1;

        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY > 0 && direction !== 1) {
                tween.timeScale(1);
                gsap.to(arrow, {
                    rotate: 180,
                    ease: 'none'
                });

                direction = 1;
            }
            else if (e.deltaY < 0 && direction !== -1) {
                tween.timeScale(-1);
                gsap.to(arrow, {
                    rotate: 0,
                    ease: 'none'
                })

                direction = -1;
            }
        }

        window.addEventListener('wheel', handleWheel);

        return () => window.removeEventListener('wheel', handleWheel);

    }, [])

    return (
        <>
            <section className="scrollBelt flex justify-center items-center overflow-hidden">
                <div className="scroll flex items-center gap-6 p-6 text-black bg-pink-200">
                    {Array(8).fill(0).map((_, i) => (
                        <div className="marque uppercase font-semibold flex items-center shrink-0 gap-5 text-3xl" key={i}>
                            <span>25% off on your first project</span>
                            <span className="flex"><Plus /><Plus /></span>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}