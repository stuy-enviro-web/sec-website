
import instagram_logo from "public/logos/Instagram_logo.svg"
import discord_logo from "public/logos/Discord_logo.svg"
import facebook_logo from "public/logos/Facebook_logo.svg"
import su_logo from "public/logos/SU_logo.svg"
import sec_footer_logo from "public/logos/Env_Footer_Logo.png"
import Image from "next/image"

import FooterLeaders from "./FooterLeaders"
import Link from "next/link"

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (<div className="w-full h-80 grid grid-cols-12 grid-rows-12">
        <div className="flex justify-between col-start-2 sm:col-start-4 md:col-start-4 lg:col-start-5 col-end-12 sm:col-end-10 md:col-end-10 lg:col-end-9 row-start-1 row-span-2 m-2">
            <a href="https://epsilon.stuysu.org/SEC"><Image className="drop-shadow-lg transform transition duration-500 ease-in-out hover:scale-110 hover:-translate-y-2 hover:rotate-3 w-10 h-auto motion-reduce:transition-none motion-reduce:hover:transform-none" src={su_logo} alt="SU Logo and Link to the SU website" /></a>
            <a href="https://discord.gg/N8GUFcAZPJ"><Image className="drop-shadow-lg transform transition duration-500 ease-in-out hover:scale-110 hover:-translate-y-2 hover:rotate-3 w-10 h-auto motion-reduce:transition-none motion-reduce:hover:transform-none" src={discord_logo} alt="Discord Logo and Link to the SEC discord page" /></a>
            <a href="https://www.instagram.com/stuyenviroclub"><Image className="drop-shadow-lg transform transition duration-500 ease-in-out hover:scale-110 hover:-translate-y-2 hover:rotate-3 w-10 h-auto motion-reduce:transition-none motion-reduce:hover:transform-none" src={instagram_logo} alt="Instagram Logo and Link to the SEC insta page" /></a>
            <a href="https://www.facebook.com/groups/281609128612255"><Image className="drop-shadow-lg transform transition duration-500 ease-in-out hover:scale-110 hover:-translate-y-2 hover:rotate-3 w-10 h-auto motion-reduce:transition-none motion-reduce:hover:transform-none" src={facebook_logo} alt="Facebook Logo and Link to the SEC facebook page" /></a>
        </div>
        <div className="row-start-3 sm:row-start-4 col-start-2 col-end-12 text-center text-xs sm:text-sm">
            This is a website of the Stuyvesant Environmental Club
        </div>
        <Link href="/about#leaders" className="z-1 row-start-4 sm:row-start-5 text-center text-sm col-start-5 col-end-9 font-bold">
            Leadership
        </Link>
        <div className="row-start-4 sm:row-start-5 text-center text-sm col-start-3 sm:col-start-5 col-end-11 sm:col-end-9 flex flex-col">
            <br />
            <FooterLeaders />
        </div>
        <div className="row-start-7 sm:row-start-8 text-center text-xs sm:text-sm col-start-1 col-span-full ">
            This Website was created by Elias Xu `25 and is maintained by the Stuyvesant Environmental Club. <br />
            Copyrighted © {currentYear} by the Stuyvesant Environmental Club. All Rights Reserved.
        </div>
        <div className="row-start-9 sm:row-start-10 row-span-full flex justify-center col-start-4 sm:col-start-6  col-end-10 sm:col-end-8">
            <Image className="h-10 w-auto" src={sec_footer_logo} alt="The footer logo for the the sec website" />
        </div>
    </div>)
}
