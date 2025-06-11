
import bottleCapMural from "public/media/BottleCapMural2016.png";
import onTheWall from "public/media/ontheWall_2024.jpg";
import poster from "public/media/poster_2024.jpg";

import turtles from "public/media/poster_turtle_2023.jpg";
import Image from "next/image";
import ArrowRight from "public/arrow_right.svg";
import Link from "next/link";

import EventsList from "@/components/UpcomingEventsList";
import PastEventsList from "@/components/PastEventsList";
import OpportunitiesList from "@/components/OpportunitiesList";

export default function events() {
    return (<div>
        <div className="relative grid grid-cols-12 grid-rows-12 w-full h-[45em] overflow-y-hidden">
            <h1 className="miltonian col-start-2 row-start-4 col-span-full text-left text-8xl text-white z-10">
                EVENTS!
            </h1>

            <Link
                href="/events#upcoming"
                className="group col-start-2 sm:col-start-5 row-start-6 col-span-full flex items-center justify-start space-x-2 z-10
                                     transform transition-transform duration-300 ease-out
                                     hover:scale-105 hover:text-emerald-300 hover:underline"
            >
                <h3 className="lexend text-4xl md:text-5xl text-white transition-colors duration-300 group-hover:text-emerald-300">
                    Upcoming Events
                </h3>
                <Image
                    src={ArrowRight}
                    alt="Arrow pointing right"
                    className="w-10 h-10 invert transition-transform duration-300 group-hover:translate-x-2"
                />
            </Link>
            <Link
                href="/events#opportunities"
                className="group col-start-2 sm:col-start-5 row-start-7 col-span-full flex items-center justify-start space-x-2 z-10
                                     transform transition-transform duration-300 ease-out
                                     hover:scale-105 hover:text-emerald-300 hover:underline"
            >
                <h3 className="lexend text-5xl text-white transition-colors duration-300 group-hover:text-emerald-300">
                    Opportunities
                </h3>
                <Image
                    src={ArrowRight}
                    alt="Arrow pointing right"
                    className="w-10 h-10 invert transition-transform duration-300 group-hover:translate-x-2"
                />
            </Link>

            <Link
                href="/events#past"
                className="group col-start-2 sm:col-start-5 row-start-8 col-span-full flex items-center justify-start space-x-2 z-10
                                     transform transition-transform duration-300 ease-out
                                     hover:scale-105 hover:text-emerald-300 hover:underline"
            >
                <h3 className="lexend text-5xl text-white transition-colors duration-300 group-hover:text-emerald-300">
                    Past Events
                </h3>
                <Image
                    src={ArrowRight}
                    alt="Arrow pointing right"
                    className="w-10 h-10 invert transition-transform duration-300 group-hover:translate-x-2"
                />
            </Link>

            <Link
                href="/resources"
                className="group col-start-2 sm:col-start-5 row-start-9 col-span-full flex items-center justify-start space-x-2 z-10
                                     transform transition-transform duration-300 ease-out
                                     hover:scale-105 hover:text-emerald-300 hover:underline"
            >
                <h3 className="lexend text-5xl text-white transition-colors duration-300 group-hover:text-emerald-300">
                    Resources
                </h3>
                <Image
                    src={ArrowRight}
                    alt="Arrow pointing right"
                    className="w-10 h-10 invert transition-transform duration-300 group-hover:translate-x-2"
                />
            </Link>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60 z-0 pointer-events-none" />
            <Image src={onTheWall} className="absolute bg-black mix-blend-darken row-start-1 row-span-full object-cover h-full w-auto lg:w-full lg:h-auto col-start-1 col-span-full -z-10 inset-0" alt="The bottle cap mural made in 2016 at stuy that tells students to reduce, reuse, and recycle" />
        </div>
        <div className="w-full h-10" />
        <div id="upcoming" className="w-full flex flex-col h-fit grid-cols-none grid-rows-none md:flex-none md:h-[55em] md:grid md:grid-cols-12 md:grid-rows-12 ">
            <h1 className="miltonian col-start-1 col-span-full row-start-1 text-7xl text-left p-3">
                Upcoming Events
            </h1>
            <Image src={bottleCapMural} className="rounded-2xl col-start-6 row-start-3 overflow-hidden p-3 col-span-full row-span-full object-cover w-full h-auto" alt="The school board that SEC uses, which displays a chinese lunar new year thing in this image along with some other stuff" />
            <div
                className="flex flex-col col-start-1 col-end-6 row-start-3 row-span-full p-3 overflow-y-auto"
            >
                <EventsList />
            </div>

        </div>

        <div className="w-full h-10" />
        <div id="past" className="w-full h-fit grid-cols-none grid-rows-none flex flex-col md:flex-none md:h-[55em] md:grid md:grid-cols-12 md:grid-rows-12 ">
            <h1 className="miltonian col-start-1 col-span-full row-start-1 text-7xl text-left p-3">
                Past Events
            </h1>
            <Image src={poster} className="rounded-2xl col-start-6 row-start-3 overflow-hidden p-3 col-span-full row-span-full object-cover w-full h-auto" alt="The school board that SEC uses, which displays a chinese lunar new year thing in this image along with some other stuff" />

            <div
                className="flex flex-col col-start-1 col-end-6 row-start-3 row-span-full p-3 overflow-y-auto"
            >
                <PastEventsList />
            </div>
        </div>

        <div id="opportunities" className="w-full h-fit flex flex-col grid-cols-none grid-rows-none md:flex-none md:h-[55em] md:grid md:grid-cols-12 md:grid-rows-12 ">
            <h1 className="miltonian col-start-1 col-span-full row-start-1 text-7xl text-left p-3">
                Opportunities
            </h1>
            <Image src={turtles} className="rounded-2xl col-start-6 row-start-3 overflow-hidden p-3 col-span-full row-span-full object-cover w-full h-auto" alt="The school board that SEC uses, which displays a chinese lunar new year thing in this image along with some other stuff" />
            <div
                className="flex flex-col col-start-1 col-end-6 row-start-3 row-span-full p-3 overflow-y-auto"
            >
                <OpportunitiesList />
            </div>
        </div>
    </div>);
}
