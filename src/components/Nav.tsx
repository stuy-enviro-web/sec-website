"use client"
import logo from "public/sec_logo.svg";
import moon from "public/Moon.svg";
import sun from "public/Sun.svg";
import blank from "public/Blank.webp"
import menu from "public/menu.svg"
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";


import Image from "next/image";
import Link from "next/link";

export default function Nav() {
    const [mounted, setMounted] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    // TODO FIX ME set the theme to light for now
    useEffect(() => {
        if (mounted) {
            setTheme("light");
        }
    }, [setTheme]);

    const toggleDarkMode = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    useEffect(() => setMounted(true), [])

    return (<nav className="bg-browndark h-16 w-full grid grid-cols-12 grid-rows-1 items-center">
        <Link
            href="/"
            className="col-start-1 col-span-2 sm:col-span-1 row-span-1 ml-3 transform transition-transform duration-300 hover:scale-110 hover:rotate-2"
        >
            <Image
                src={logo}
                alt="The logo of the Stuyvesant Environmental Club"
                className="h-12 w-12"
            />
        </Link>
        <div
            className="invisible md:visible col-start-3 lg:col-start-5 text-[1em] sm:text-[1.1em] lg:text-[1.25em] font-bold col-end-11 flex flex-row justify-between"
        >
            <Link
                href="/about"
                className="lexend text-white flex justify-center items-center transform transition-transform duration-200 hover:scale-105 hover:text-green-300"
            >
                About
            </Link>
            <Link
                href="/requirements"
                className="lexend text-white flex justify-center items-center transform transition-transform duration-200 hover:scale-105 hover:text-green-300"
            >
                Requirements
            </Link>
            <Link
                href="/events"
                className="lexend text-white flex justify-center items-center transform transition-transform duration-200 hover:scale-105 hover:text-green-300"
            >
                Events
            </Link>
            <Link
                href="/resources"
                className="lexend text-white flex justify-center items-center transform transition-transform duration-200 hover:scale-105 hover:text-green-300"
            >
                Resources
            </Link>
        </div>
        <button onClick={toggleDarkMode} className=" group col-start-11 md:col-start-12 row-start-1">
            {mounted && (
                <Image
                    src={resolvedTheme === "dark" ? sun : moon}
                    alt={
                        resolvedTheme === "dark"
                            ? "Sun emoji, clicking will give light mode"
                            : "Moon emoji, clicking will give dark mode"
                    }
                    className="
                        invert
                        h-9 w-9
                        transform
                        transition-all duration-500 ease-in-out
                        group-hover:scale-125
                        group-hover:-rotate-12
                        group-hover:-translate-y-1
                    "
                />
            )}
            {!mounted && <Image src={blank} className=" h-9 w-9 dark:invert invert " alt={resolvedTheme === "dark" ? "Sun emoji, clicking will give light mode" : "Moon emoji, clicking will give dark mode"} />}
        </button>
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="group visible md:invisible row-start-1 col-start-12 transition-colors hover:rotate-2 group-hover:rotate-2 rounded-md">
            <Image src={menu} alt="menu button" className="" />
        </button>

        {dropdownOpen && <div className="absolute right-1 p-3 top-[4.1em] bg-browndark z-50">
            <Link
                onClick={() => setDropdownOpen(false)}
                href="/about"
                className="block px-4 py-2 rounded-md hover:bg-gray-700 text-white transition-colors lexend text-lg  hover:text-emerald-200 hover:scale-105 duration-300 "
            >
                About
            </Link>
            <Link
                onClick={() => setDropdownOpen(false)}
                href={'/requirements'}
                className="block px-4 py-2 rounded-md hover:bg-gray-700 text-white transition-colors lexend text-lg  hover:text-emerald-200 hover:scale-105 duration-300  ">
                Requirements
            </Link>
            <Link
                onClick={() => setDropdownOpen(false)}
                href={'/events'}
                className="block px-4 py-2 rounded-md hover:bg-gray-700 text-white transition-colors lexend text-lg  hover:text-emerald-200 hover:scale-105 duration-300 ">
                Events
            </Link>
            <Link
                onClick={() => setDropdownOpen(false)}
                href={'/resources'}
                className="block px-4 py-2 rounded-md hover:bg-gray-700 text-white transition-colors lexend text-lg  hover:text-emerald-200 hover:scale-105 duration-300 ">
                Resources
            </Link>
        </div>}
    </nav>)
}