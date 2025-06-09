
import Carousel from "@/components/carousel";
import UpcomingEvents from "@/components/homepage_upcoming_events";

import instagram_logo from "public/logos/Instagram_logo.svg"
import discord_logo from "public/logos/Discord_logo.svg"
import facebook_logo from "public/logos/Facebook_logo.svg"
import su_logo from "public/logos/SU_logo.svg"
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
    </div>
    );
}
