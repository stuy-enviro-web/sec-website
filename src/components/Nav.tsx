import logo from "public/sec_logo.svg";
import moon from "public/Moon.svg";
import sun from "public/Sun.svg";

import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    return (<div className="bg-browndark h-16 w-full">
        <div className="grid grid-cols-12 grid-rows-1 w-full h-full ">
            <Link href={"/"}>
                <Image src={logo} alt="The logo of the Stuyvesant Environmental Club" width={100} height={100} className="ml-5 align-middle h-full w-auto object-contain col-start-1 row-start-1" />
            </Link>

            <div className="col-start-5 mt-3 text-[1.25em] font-bold text-center col-end-11 flex flex-row justify-between align-middle">
                <Link href={"/about"} className="text-white">About</Link>
                <Link href={"/materials"} className="text-white">Materials</Link>
                <Link href={"/requirements"} className="text-white">Requirements</Link>
                <Link href={"/events"} className="text-white">Events</Link>
                <Link href={"/resources"} className="text-white">Resources</Link>

            </div>
        </div>
    </div>)
}