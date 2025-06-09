
import Carousel from "@/components/carousel";
import UpcomingEvents from "@/components/homepage_upcoming_events";

import instagram_logo from "public/logos/Instagram_logo.svg"
import discord_logo from "public/logos/Discord_logo.svg"
import facebook_logo from "public/logos/Facebook_logo.svg"
import su_logo from "public/logos/SU_logo.svg"

import club_board from "public/media/club_board.png"
import hard_at_work from "public/media/hard_at_work.png"
import funny_faces from "public/media/sec_funny_faces.png"

import Link from "next/link";
import Image from "next/image"


export default function Home() {

    return (<div>
        <Carousel />
        <div className="w-full flex flex-col items-center justify-center h-28">
            <h3>
                Find us on
            </h3>
            <div className="flex justify-between w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 mt-2 ">
                <a href="https://epsilon.stuysu.org/SEC"><Image className="w-10 h-auto transition-transform hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" src={su_logo} alt="SU Logo and Link to the SU website" /></a>
                <a href="https://discord.gg/N8GUFcAZPJ"><Image className="w-10 h-auto transition-transform hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" src={discord_logo} alt="Discord Logo and Link to the SEC discord page" /></a>
                <a href="https://www.instagram.com/stuyenviroclub"><Image className="w-10 h-auto transition-transform hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" src={instagram_logo} alt="Instagram Logo and Link to the SEC insta page" /></a>
                <a href="https://www.facebook.com/groups/281609128612255"><Image className="w-10 h-auto transition-transform hover:scale-105 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" src={facebook_logo} alt="Facebook Logo and Link to the SEC facebook page" /></a>
            </div>
        </div>
        <UpcomingEvents />
        <div className="w-full h-10"/>
        <div className="w-full h-[45em] grid grid-cols-12 grid-rows-12 ">
            <h1 className="row-start-1 col-start-1 col-span-full text-7xl text-center miltonian mt-3">About Us</h1>
            <p className="row-start-3 col-start-4 col-end-10 row-span-full text-md font-light lexend text-1xl p-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                <br />
                <br />
                <br />
                <Link href="\about" className="lexend text-1xl underline">Check out More</Link>
            </p>
            <Image src={hard_at_work} className="col-start-1 col-end-4 row-start-2 row-end-6 w-full h-auto p-2" alt="A picture of the SEC members hard at work" />
            <Image src={club_board} className="w-full h-auto col-start-1 col-end-4 row-start-8 row-span-full p-2" alt="A picture of the SEC club board" />
            <Image src={funny_faces} className="w-full h-auto row-start-2 row-end-6 col-start-10 col-span-full p-2" alt="A picture of the SEC members making funny faces" />
        </div>
    </div>
    );
}
