'use client'
import { useState } from 'react';
import Image from 'next/image';
import fullsizerender from "public/media/cut_arbor_full.png"
import Link from 'next/link';



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
                        <Link href="\about " className="z-1 col-start-2 row-start-12 text-2xl font-semibold mb-4 text-left whitespace-nowrap" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}>
                            Check out more about us!
                        </Link>
                        <div className="h-full w-full flex items-center justify-center col-start-1 col-span-full row-start-1 row-span-full">
                            <Image src={fullsizerender} className="w-auto h-full lg:w-full lg:h-auto b-2 opacity-75 object-cover object-center" alt="2015-2016 Arbor Day Event" style={{maxHeight: '100%', maxWidth: '100%'}} />
                        </div>
                    </div>
                </div>
                {/* Slide 2 */}
                <div className="min-w-full h-full flex items-center justify-center bg-green-100">
                    <div className="text-center p-8">
                        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                        <p className="text-xl">Second carousel element</p>
                    </div>
                </div>

                {/* Slide 3 */}
                <div className="min-w-full h-full flex items-center justify-center bg-purple-100">
                    <div className="text-center p-8">
                        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
                        <p className="text-xl">Third carousel element</p>
                    </div>
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


