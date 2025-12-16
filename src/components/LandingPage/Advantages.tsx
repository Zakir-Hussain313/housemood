import Image from "next/image";
import TextReveal from "../TextReveal";

export default function Advantages() {
    return (
        <>
            <main className="bg-gray-200 text-gray-950">
                <section className="flex flex-col advanTexts">
                    <p className="processStart font-semibold text-xl uppercase">why people choose us</p>
                    <TextReveal
                        classname="processHeading font-semibold text-5xl md:text-7xl uppercase"
                        text="Advantages:"
                    />
                </section>
                <div className="flex items-center justify-center">
                <section className="flex justify-center flex-wrap md:w-[90vw] gap-5">
                    <div className="relative w-[300px] md:w-[600px] h-[250px]">
                        <Image
                            src={'/advantages-1.avif'}
                            alt="Demo Images"
                            fill
                            className="object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-9 font-semibold left-4 text-2xl text-white">
                            Unique Design Aesthetic
                        </div>
                    </div>
                    <div className="relative w-[300px] h-[250px]">
                        <Image
                            src={'/advantages-2.avif'}
                            alt="Demo Images"
                            fill
                            className="object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-9 font-semibold left-4 text-2xl text-white">
                            Innovative Solutions
                        </div>
                    </div>
                    <div className="relative w-[300px] h-[250px]">
                        <Image
                            src={'/advantages-3.avif'}
                            alt="Demo Images"
                            fill
                            className="object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-9 font-semibold left-4 text-2xl text-white">
                            Strong Reputation & Portfolio
                        </div>
                    </div>
                    <div className="relative w-[300px] md:w-[600px] h-[250px]">
                        <Image
                            src={'/advantages-4.avif'}
                            alt="Demo Images"
                            fill
                            className="object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-9 font-semibold left-4 text-2xl text-white">
                            Client-oriented Approach
                        </div>
                    </div>
                    <div className="relative w-[300px] lg:w-[600px] h-[250px]">
                        <Image
                            src={'/advantages-5.avif'}
                            alt="Demo Images"
                            fill
                            className="object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-9 font-semibold left-4 text-2xl text-white">
                            Serious Attention to Details
                        </div>
                    </div>
                    <div className="relative advanLastDiv w-[300px] h-[250px]">
                        <Image
                            src={'/advantages-6.avif'}
                            alt="Demo Images"
                            fill
                            className="object-cover rounded-2xl"
                        />
                        <div className="absolute bottom-9 font-semibold left-4 text-2xl text-white">
                            Increased Property Value
                        </div>
                    </div>
                </section>
                </div>
            </main>
        </>
    )
}