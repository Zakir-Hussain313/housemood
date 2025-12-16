'use client'
import { useEffect, useState } from 'react';
import TextReveal from '../TextReveal';
import { Playfair_Display } from 'next/font/google';
import SectionEnd from '../sectionEnd';
import { MdArrowRightAlt } from 'react-icons/md';

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '500', '600']
})

const statsData = [
    { label: "Happy Clients", value: 500 },
    { label: "Revenue Generated", value: 2300000, display: "2.3M", format: "currency" },
    { label: "Properties Sold", value: 120 },
    { label: "Cities Covered", value: 15 },
];


export default function Stats() {
    const [counts, setCounts] = useState(statsData.map(() => 0));

    useEffect(() => {
        const interval = setInterval(() => {
            setCounts((prevCounts) =>
                prevCounts.map((count, i) => {
                    const target = statsData[i].value;
                    const increment = target / 150; // adjust speed
                    if (count < target) {
                        return Math.min(count + increment, target);
                    }
                    return count;
                })
            );
        }, 20);

        return () => clearInterval(interval);
    }, []);

    const formatValue = (value: number, format: "currency" | "number") => {
        if (format === "currency") {
            return `$${Math.floor(value).toLocaleString()}`;
        }
        return Math.floor(value);
    };

    return (
        <section className="statSection bg-gray-200 relative z-10">
            <div className='flex flex-col gap-3 px-4 statsText'>
                <TextReveal
                    text='Whether it is your home, office or a commercial project, we are always dedicated to bring your vision to life.'
                    classname={`${playfair.className} font-semibold text-2xl sm:text-3xl`}
                />
                <TextReveal
                    text='Our numbers speak louder than our words: '
                    classname={`${playfair.className} font-semibold text-2xl sm:text-3xl`}
                />
            </div>
            <div className='flex justify-center items-center'>
                <div className="container numbersContainer grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
                    {statsData.map((stat, index) => (
                        <div key={index} className="statsDiv border-b-2 border-gray-300 flex flex-col items-center">
                            <span className="text-6xl md:text-7xl font-bold text-gray-900">
                                {stat.display ?? formatValue(counts[index], stat.format ?? 'number')}
                            </span>

                            <span className="mt-2 text-lg md:text-xl font-medium text-gray-700">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center">
                <button className="group text-2xl flex items-center gap-2 font-semibold cursor-pointer border-b-2 border-gray-500">
                    Get Free Consultation
                    <MdArrowRightAlt className="transition-transform duration-200 group-hover:translate-x-2" />
                </button>
            </div>
            <SectionEnd />
        </section>
    );
}
