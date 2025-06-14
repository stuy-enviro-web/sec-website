'use client'
import { useState } from 'react';
import Image from 'next/image';
import fullsizerender from "public/media/cut_arbor_full.png"
import Link from 'next/link';
import ArrowRight from "public/arrow_right.svg";

import gardening_2022 from "public/media/gardening_2022.webp";
import gardening_2023 from "public/media/garden_2023.jpg";



export default function Carousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const totalSlides = 3;

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };
    return (<div className="h-[45em] w-full">
        {/* Full Page Carousel */}
        <div className="relative h-full w-full overflow-hidden">
            {/* Carousel slides */}
            <div
                className="flex h-full transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {/* Slide 1 */}
                <div className="min-w-full h-full bg-gray-50">
                    <div className="text-center h-full w-full grid grid-cols-12 grid-rows-12">
                        <h2 className="miltonian mt-4 sm:mt-0 z-1 bg-opacity-50 col-start-2 row-start-1 sm:row-start-2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 text-left whitespace-break-spaces md:whitespace-nowrap" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.1)" }}>
                            The Stuyvesant <br />
                            <span style={{ color: "#0070FF" }}>Environmental</span><br />
                            <span style={{ color: "#00C87B" }}>Club</span>
                        </h2>
                        <Link
                            href="/about"
                            className="group col-start-2 row-start-9 col-span-full flex items-center justify-start space-x-2 z-10
                                     transform transition-transform duration-300 ease-out text-black
                                    hover:underline hover:text-emerald-300"
                        >
                            <h3 className="lexend text-2xl group-hover:scale-105 transition-colors duration-300">
                                Check out more about us
                            </h3>
                            <Image
                                src={ArrowRight}
                                alt="Arrow pointing right"
                                className="w-10 h-10 transition-transform -translate-x-2 duration-300 group-hover:translate-x-0"
                            />
                        </Link>
                        <div className="h-full w-full flex items-center justify-center col-start-1 col-span-full row-start-1 row-span-full">
                            <Image src={fullsizerender} className="w-auto h-full lg:w-full lg:h-auto b-2 opacity-90 object-cover object-center" alt="2015-2016 Arbor Day Event" style={{ maxHeight: '100%', maxWidth: '100%' }} />
                        </div>
                    </div>
                </div>
                {/* Slide 2 */}

                <div className="min-w-full h-full grid grid-cols-12 grid-rows-12 relative">
                    <h1 className="text-8xl col-start-3 col-span-full row-start-3  font-bold text-white z-1 miltonian mb-4">
                        Events!
                    </h1>
                    <Link
                        href="/events"
                        className="group col-start-2 row-start-9 col-span-5 flex items-center justify-start space-x-2 z-10
                                     transform transition-transform duration-300 ease-out text-white
                                      group-hover:underline group-hover:text-emerald-500"
                    >
                        <h3 className="lexend text-2xl group group-hover:underline group-hover:scale-105 text-white duration-300 group-hover:text-emerald-300">
                            See what we do
                        </h3>
                        <Image
                            src={ArrowRight}
                            alt="Arrow pointing right"
                            className="w-10 h-10 invert group transition-transform duration-300 -translate-x-2 group-hover:translate-x-0"
                        />
                    </Link>
                    <Image
                        src={gardening_2022}
                        alt="SEC Gardening 2022"
                        fill
                        className="object-cover col-start-1 col-span-full row-start-1 row-span-full z-0"
                    />

                    <div className="col-start-1 col-span-full row-start-1 row-span-full inset-0 bg-black opacity-40" />
                </div>

                {/* Slide 3 */}
                <div className="min-w-full h-full grid grid-cols-12 grid-rows-12 relative">
                    <h1 className="text-8xl col-start-3 col-span-full row-start-3  font-bold text-white z-1 miltonian mb-4">
                        Resources!
                    </h1>
                    <Link
                        href="/resources"
                        className="group col-start-2 row-start-9 col-span-5 flex items-center justify-start space-x-2 z-10
                                     transform transition-transform duration-300 ease-out text-white
                                      hover:text-cyan-300 hover:underline"
                    >
                        <h3 className="hover:scale-105 lexend text-2xl transition-colors duration-300 ">
                            Look at what we have
                        </h3>
                        <Image
                            src={ArrowRight}
                            alt="Arrow pointing right"
                            className="w-10 h-10 invert transition-transform duration-300 -translate-x-2 group-hover:translate-x-0"
                        />
                    </Link>
                    <Image
                        src={gardening_2023}
                        alt="SEC Gardening 2022"
                        fill
                        className="object-cover col-start-1 col-span-full row-start-1 row-span-full z-0"
                    />

                    <div className="col-start-1 col-span-full row-start-1 row-span-full inset-0 bg-black opacity-40" />
                </div>

            </div>

            {/* Navigation arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none"
                aria-label="Previous slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none"
                aria-label="Next slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Navigation controls */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                <button
                    onClick={() => goToSlide(0)}
                    className={`w-3 h-3 rounded-full ${currentSlide === 0 ? 'bg-white' : 'bg-white opacity-50'}`}
                    aria-label="Go to slide 1"
                ></button>
                <button
                    onClick={() => goToSlide(1)}
                    className={`w-3 h-3 rounded-full ${currentSlide === 1 ? 'bg-white' : 'bg-white opacity-50'}`}
                    aria-label="Go to slide 2"
                ></button>
                <button
                    onClick={() => goToSlide(2)}
                    className={`w-3 h-3 rounded-full ${currentSlide === 2 ? 'bg-white' : 'bg-white opacity-50'}`}
                    aria-label="Go to slide 3"
                ></button>
            </div>
        </div>
    </div>)
}


