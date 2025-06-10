import ArrowRight from "public/arrow_right.svg";
import BOP2017 from "public/media/BOP.jpg";
import bop2 from "public/media/boptwo.jpeg";
import green_team from "public/media/green_team.webp";

import green_team_2022 from "public/media/green_team_2022.jpeg";
import green_team_2024 from "public/media/green_team_2024.png";

import Image from "next/image";



export default function requirements() {
    return (<div>
        <div className="h-[48em] w-full grid grid-cols-12 grid-rows-12">
            <h1 className="miltonian col-start-2 col-span-full row-start-3  text-7xl text-white ">Club Requirements</h1>
            <p className="lexend  col-start-2 col-end-7 row-start-5 text-2xl font-light text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <a href="#requirements" className="hover:underline group col-start-2 row-start-9 col-span-full items-center flex flex-row justify-left">
                <h3 className="lexend text-3xl group-hover:translate-x-1 text-white">
                    Requirements
                </h3>
                <Image src={ArrowRight} className="invert group-hover:translate-x-1 -translate-x-1 w-10 h-10 inline ml-2" alt="Arrow pointing right" />

            </a>

            <a href="#faq" className="hover:underline group col-start-2 row-start-10 col-span-full items-center flex flex-row justify-left">
                <h3 className="group-hover:translate-x-1 lexend text-3xl text-white">
                    FAQ
                </h3>
                <Image src={ArrowRight} className="invert group-hover:translate-x-1 -translate-x-1 w-10 h-10 inline ml-2" alt="Arrow pointing right" />
            </a>
            <Image src={BOP2017} className="-z-1 object-cover col-start-1 col-span-full row-start-1 row-span-full opacity-85 w-full h-full" alt="SEC at work from 2017-2018 at the Billion Oyster Project" />
        </div>
        <div className="w-full h-10 " />

        <div className="flex flex-col h-fit grid-cols-none grid-rows-none md:flex-none md:grid md:grid-cols-12 md:grid-rows-12 items-center justify-center w-full md:h-[70em] p-8">
            <h1 id="requirements" className="miltonian row-start-1 col-start-1 col-span-full text-5xl text-center">Requirements</h1>
            <span className="lexend text-lg col-start-1 md:col-start-3 col-end-12 md:col-end-11 row-start-2 sm:row-start-1 row-span-3 text-center font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>

            <div className="col-start-1 row-start-2 col-end-6 row-end-6 flex flex-col w-full m-4">
                <h3 className="w-full text-center text-4xl md:text-2xl miltonian">For Members</h3>
                <ul className="lexend list-disc pl-5 space-y-2 text-left w-full p-2">
                    <li> what the s_____ </li>
                    <li> what the s_____ </li>
                    <li> what the s_____ </li>
                    <li> what the s_____ </li>
                </ul>
            </div>
            <Image src={bop2} className="mt-4 mb-4 md:mt-0 md:mb-0 w-full h-full object-cover col-start-6 col-span-full row-start-3 row-end-7 p-2" alt="SEC members working at BOP 2018 (right before covid lol)" />

            <div className="col-start-6 row-start-3 col-span-full row-span-full flex flex-col w-full m-4">
                <h3 className="w-full text-center text-4xl md:text-2xl miltonian">For Leaders</h3>
                <ul className="lexend list-disc pl-5 space-y-2 p-2">
                    <li> what the s_____ </li>
                    <li> what the s_____ </li>
                    <li> what the s_____ </li>
                    <li> what the s_____ </li>
                </ul>
            </div>
            <Image src={green_team} className="mt-4 mb-4 md:mt-0 md:mb-0 w-full h-full object-cover col-start-1 col-end-6 row-start-7 row-end-12 p-2" alt="SEC members working at Green Team 2023" />
        </div>


        <div className="w-full h-10" />
        <div className="grid-none grid-cols-none grid-rows-none flex flex-col md:flex-none md:grid md:grid-cols-12 md:grid-rows-12 items-center justify-center w-full h-fit md:h-[50rem] p-8">
            <div id="faq" className="miltonian row-start-1 col-start-1 col-span-full text-5xl text-center">
                FAQ
            </div>
            <div className="lexend text-md md:text-lg col-start-1 row-start-1 col-end-8 row-span-full font-light">
                Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br /> <br />
                Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br /> <br />
                Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br /> <br />
                Q: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                A: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className="col-start-8 col-end-13 row-start-2 row-span-full flex flex-col items-center justify-center m-4 gap-4">
                <Image src={green_team_2022} className="w-full h-auto object-cover rounded-md max-h-80" alt="SEC members working at Green Team 2022 making turtles!" />
                <Image src={green_team_2024} className="w-full h-auto object-cover rounded-md max-h-80" alt="SEC members working at Green Team 2024 making a poster" />
            </div>
        </div>
    </div >);
}