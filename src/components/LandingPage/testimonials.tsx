'use client';
import Carousel from "@/components/Carousel";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TextReveal from "../TextReveal";
import SectionEnd from "../sectionEnd";
import { MdArrowRightAlt } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

export default function TestPage() {
  const slides = [
    {
      name: "Rachel M.",
      rating: 5,
      review: "I’ve been renting from them for over a year and the experience has been great. The home was move-in ready, clean, and exactly as advertised. Maintenance requests are handled quickly too."
    },
    {
      name: "Derrick F.",
      rating: 4,
      review: "Good quality homes and a smooth leasing process. The paperwork was straightforward and the staff was helpful. A few minor issues when I moved in, but they fixed them right away."
    },
    {
      name: "Amira K.",
      rating: 5,
      review: "I love my rental! The neighborhood is quiet, the house is well-kept, and the property managers actually respond when needed. Very reliable company if you're looking for a long-term place."
    },
    {
      name: "Lucas S.",
      rating: 4,
      review: "Solid rental company with a good variety of homes. Found a house that fit my budget and family size. No major problems so far, and the leasing office is easy to work with."
    },
    {
      name: "Naomi T.",
      rating: 5,
      review: "The process of touring, applying, and moving in was surprisingly smooth. The home feels safe, comfortable, and well maintained. Really happy with my decision to rent here long-term."
    },
    {
      name: "Gerald P.",
      rating: 4,
      review: "Been renting for almost two years and I'm satisfied overall. Rent is fair for the area and any maintenance issues I've had were taken care of within a day or two."
    },
    {
      name: "Isabella R.",
      rating: 5,
      review: "Great company if you're looking for long-term housing. The house was freshly updated, clean, and exactly what I needed. Communication has always been professional and friendly."
    },
  ];


  const testiRef = useRef(null);

  useEffect(() => {
    gsap.from(testiRef.current, {
      y: 40,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: testiRef.current,
        start: 'top 80%'
      }
    })
  }, []);

  return (
    <section className="text-gray-950 bg-gray-200">
      <div>
        <TextReveal
          classname="TestiHeading font-semibold text-5xl md:text-6xl uppercase"
          text="Our Clients Say:"
        />
        <p className="clientsPraise font-semibold text-xl text-gray-500 w-64 md:w-96">The warm words of our clients let us achieve more</p>
      </div>
      <div
        ref={testiRef}
        className="testiDiv h-screen flex items-center justify-center overflow-hidden">
        <Carousel slides={slides} />
      </div>
      <div className="ArrowButton flex justify-center items-center">
        <button className="group text-2xl flex items-center gap-2 font-semibold cursor-pointer border-b-2 border-gray-500">
          Contact Now
          <MdArrowRightAlt className="transition-transform duration-200 group-hover:translate-x-2" />
        </button>
      </div>
      <SectionEnd />
    </section>
  );
}
