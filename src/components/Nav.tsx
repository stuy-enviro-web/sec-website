"use client"
import logo from "public/sec_logo.svg";
import moon from "public/Moon.svg";
import sun from "public/Sun.svg";
import menu from "public/darkMenu.webp"
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";


import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    const [mounted, setMounted] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    const toggleDarkMode = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    useEffect(() => setMounted(true), [])

    return (<nav className="bg-browndark h-16 w-full grid grid-cols-12 grid-rows-1">

        <Link href={"/"}>
            <Image src={logo} alt="The logo of the Stuyvesant Environmental Club" width={100} height={100} className="ml-5 row-span-full h-full w-auto object-contain col-start-1 row-start-1" />
        </Link>

        <div className="invisible md:visible col-start-3 lg:col-start-5 text-[1em] sm:text-[1.1em] lg:text-[1.25em] font-bold text-center col-end-11 flex flex-row justify-between">
            <Link href={"/about"} className="text-white flex justify-center flex-col">About</Link>
            <Link href={"/materials"} className="text-white flex justify-center flex-col">Materials</Link>
            <Link href={"/requirements"} className="text-white flex justify-center flex-col">Requirements</Link>
            <Link href={"/events"} className="text-white flex justify-center flex-col">Events</Link>
            <Link href={"/resources"} className="text-white flex justify-center flex-col">Resources</Link>
        </div>

        <button onClick={toggleDarkMode} className="col-start-11 sm:col-start-12 col-span-full row-start-1 m-3 sm:m-4">
            {
                // ! keep the invert
                mounted &&
                <Image src={resolvedTheme === "dark" ? sun : moon} className="h-full w-auto dark:invert invert  flex justify-center flex-col" alt={resolvedTheme === "dark" ? "Sun emoji, clicking will give light mode" : "Moon emoji, clicking will give dark mode"} />
            }
            {
                !mounted
            }
        </button>


    </nav>)
}