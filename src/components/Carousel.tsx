"use client";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { useState, useRef, useId } from "react";

interface SlideData {
  name: string;
  rating: number;
  review: string;
}


interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
  const { name, rating, review } = slide;

  return (
    <li
      ref={slideRef}
      onClick={() => handleSlideClick(index)}
      className={`flex flex-col justify-center items-center bg-gray-950 text-gray-200 rounded-2xl p-8 mx-4 w-[60vmin] h-[60vmin] shadow-lg transition-all duration-500 ${
        current === index ? "scale-105 opacity-100" : "scale-95 opacity-50"
      }`}
    >
      <div className="text-center space-y-4">
        <p className="sm:text-lg w-52 md:w-72 text-sm italic text-neutral-200">“{review}”</p>
        <div className="mt-4 flex justify-center">
          {[...Array(5)].map((_, i) => (
            <span key={i}>
              {i < rating ? "⭐" : "☆"}
            </span>
          ))}
        </div>
        <h3 className="sm:text-xl text-lg font-semibold mt-4">{name}</h3>
      </div>
    </li>
  );
};


interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-gray-950 border-3 border-transparent rounded-full focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-200 cursor-pointer" />
    </button>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? slides.length - 1 : previous);
  };

  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === slides.length ? 0 : next);
  };

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const id = useId();

  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex gap-8 mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>

      <div className="absolute flex justify-center w-full gap-8 top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />

        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}
