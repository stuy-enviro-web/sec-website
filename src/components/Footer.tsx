
import instagram_logo from "public/logos/Instagram_logo.svg"
import discord_logo from "public/logos/Discord_logo.svg"
import facebook_logo from "public/logos/Facebook_logo.svg"
import su_logo from "public/logos/SU_logo.svg"
import sec_footer_logo from "public/logos/Env_Footer_Logo.png"
import Image from "next/image"



export default function Footer() {
    return (<div className="w-full h-80 grid grid-cols-12 grid-rows-12">
        <div className="flex justify-between col-start-6 col-end-8 row-start-1 row-span-2 m-2">
            <Image src={su_logo} alt="SU Logo and Link to the SU website" />
            <Image src={discord_logo} alt="Discord Logo and Link to the SEC discord page" />
            <Image src={instagram_logo} alt="Instagram Logo and Link to the SEC insta page" />
            <Image src={facebook_logo} alt="Facebook Logo and Link to the SEC facebook page" />
        </div>
        <div className="row-start-4 col-start-5 col-end-9 text-center text-sm">
            This is a website of the Stuyvesant Environmental Club
        </div>
        <div className="row-start-5 text-center text-sm col-start-5 col-end-9 font-bold">
            Leadership

        </div>
        <div className="row-start-5 text-center text-sm col-start-5 col-end-9 flex flex-col">
            <br />
            <div className="flex justify-between">
                <span className="italic text-xs">President</span>
                <span className="font-bold text-xs">Tralero Tralala</span>
            </div>
            <div className="flex justify-between">
                <span className="italic text-xs">Vice President</span>
                <span className="font-bold text-xs">Bombadilo Cracadilo</span>
            </div>            <div className="flex justify-between">
                <span className="italic text-xs">President</span>
                <span className="font-bold text-xs">Cappuchino Assassaino</span>
            </div>
        </div>
        <div className = "row-start-8 text-center text-sm col-start-4 col-end-10">
            This Website was created by Elias Xu `25 and is maintained by the Stuyvesant Environmental Club. <br />
            Copyrighted © 2024 by the Stuyvesant Environmental Club. All Rights Reserved.
        </div>
        <div className="row-start-10 row-end-12 flex justify-center col-start-6 col-end-8">
        <Image className="" src={sec_footer_logo} alt="The footer logo for the the sec website" />
        </div>
    </div>)
}