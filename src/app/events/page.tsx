
import bottleCapMural from "public/media/BottleCapMural2016.png";
import onTheWall from "public/media/ontheWall_2024.jpg";
import poster from "public/media/poster_2024.jpg";

import turtles from "public/media/poster_turtle_2023.jpg";
import Image from "next/image";
import ArrowRight from "public/arrow_right.svg";



export default function events() {
    return (<div>
        <div className="relative grid grid-cols-12 grid-rows-12 w-full h-[45em] overflow-y-hidden">
            <h1 className="miltonian col-start-2 row-start-4 col-span-full text-left text-8xl text-white z-10">
                EVENTS!
            </h1>

            <a href="#upcoming" className="hover:underline group col-start-5 row-start-6 col-span-full items-center flex flex-row justify-left z-10">
                <h3 className="lexend text-4xl md:text-5xl group-hover:translate-x-1 text-white">
                    Upcoming Events
                </h3>
                <Image src={ArrowRight} className=" invert group-hover:translate-x-1 -translate-x-1 w-10 h-10 inline ml-2" alt="Arrow pointing right" />
            </a>

            <a href="#opportunities" className="hover:underline group col-start-5 row-start-7 col-span-full items-center flex flex-row justify-left z-10">
                <h3 className="lexend text-5xl group-hover:translate-x-1 text-white">
                    Opportunities
                </h3>
                <Image src={ArrowRight} className=" invert group-hover:translate-x-1 -translate-x-1 w-10 h-10 inline ml-2" alt="Arrow pointing right" />
            </a>

            <a href="#past" className="hover:underline group col-start-5 row-start-8 col-span-full items-center flex flex-row justify-left z-10">
                <h3 className="lexend text-5xl group-hover:translate-x-1 text-white">
                    Past Events
                </h3>
                <Image src={ArrowRight} className=" invert group-hover:translate-x-1 -translate-x-1 w-10 h-10 inline ml-2" alt="Arrow pointing right" />
            </a>

            <a href="#resources" className="hover:underline group col-start-5 row-start-9 col-span-full items-center flex flex-row justify-left z-10">
                <h3 className="lexend text-5xl group-hover:translate-x-1 text-white">
                    Resources
                </h3>
                <Image src={ArrowRight} className=" invert group-hover:translate-x-1 -translate-x-1 w-10 h-10 inline ml-2" alt="Arrow pointing right" />
            </a>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-60 z-0 pointer-events-none" />
            <Image src={onTheWall} className="absolute bg-black mix-blend-darken row-start-1 row-span-full object-cover h-full w-auto lg:w-full lg:h-auto col-start-1 col-span-full -z-10 inset-0" alt="The bottle cap mural made in 2016 at stuy that tells students to reduce, reuse, and recycle" />
        </div>
        <div className="w-full h-10" />
        <div className="w-full h-[55em] grid grid-cols-12 grid-rows-12 ">
            <h1 className="miltonian col-start-1 col-span-full row-start-1 text-7xl text-left p-3">
                Upcoming Events
            </h1>

            <Image src={bottleCapMural} className="col-start-6 row-start-3 overflow-hidden p-3 col-span-full row-end-11 object-cover w-full h-auto" alt="The school board that SEC uses, which displays a chinese lunar new year thing in this image along with some other stuff" />
        </div>

        <div className="w-full h-10" />
        <div className="w-full h-[55em] grid grid-cols-12 grid-rows-12 ">
            <h1 className="miltonian col-start-1 col-span-full row-start-1 text-7xl text-left p-3">
                Past Events
            </h1>

            <Image src={poster} className="col-start-6 row-start-3 overflow-hidden p-3 col-span-full row-end-11 object-cover w-full h-auto" alt="The school board that SEC uses, which displays a chinese lunar new year thing in this image along with some other stuff" />
        </div>

        <div className="w-full h-[55em] grid grid-cols-12 grid-rows-12 ">
            <h1 className="miltonian col-start-1 col-span-full row-start-1 text-7xl text-left p-3">
                Opportunities
            </h1>

            <Image src={turtles} className="col-start-6 row-start-3 overflow-hidden p-3 col-span-full row-end-11 object-cover w-full h-auto" alt="The school board that SEC uses, which displays a chinese lunar new year thing in this image along with some other stuff" />
        </div>
    </div>);
}