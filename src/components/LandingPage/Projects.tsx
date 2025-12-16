import Image from "next/image";
import TextReveal from "../TextReveal";
import { MdArrowRightAlt } from "react-icons/md";
import SectionEnd from "../sectionEnd";

const projectsImages = [
    { src: '/project-1.avif', name: 'Paris Melody', location: 'Paris, France', year: '2022' },
    { src: '/project-2.avif', name: 'Swiss mix', location: 'Amesterdam, Netherlands', year: '2023' },
    { src: '/project-3.avif', name: 'White Bae', location: 'Madrid, Spain', year: '2024' },
]

export default function Projects() {
    return (
        <section className="bg-gray-200">
            <div className="flex flex-col gap-10">
                <p className="weProud font-bold text-lg uppercase">What Are We Proud Of</p>
                <TextReveal
                    text="Our Projects:"
                    classname="projectsHeading font-semibold text-6xl md:text-8xl uppercase"
                />
            </div>
            <div className="flex gap-10 justify-center items-center flex-col flex-wrap lg:flex-row">
                {projectsImages.map((image, index) => (
                    <div key={index} className="">
                        <div 
                        className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[550px] lg:w-[400px] lg:h-[550px] overflow-hidden rounded-3xl"
                        >
                            <Image
                                src={image.src}
                                alt="Project Image"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <TextReveal 
                            text={image.name}
                            classname="imageName text-4xl font-semibold"
                            />
                            <h1 className="imageLocation text-gray-500 text-xl font-semibold">{image.location}</h1>
                            <h3 className="imageYear text-gray-500 text-xl font-semibold">{image.year}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <div className="projectsBtn flex justify-end-safe items-center">
                <button className="group text-2xl flex items-center gap-2 font-semibold cursor-pointer border-b-2 border-gray-500">
                    All The Projects
                    <MdArrowRightAlt className="transition-transform duration-200 group-hover:translate-x-2" />
                </button>
            </div>
            <SectionEnd/>
        </section>
    )
}