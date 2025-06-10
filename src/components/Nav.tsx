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

    const toggleDarkMode = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    useEffect(() => setMounted(true), [])

    return (<nav className="bg-browndark h-16 w-full grid grid-cols-12 grid-rows-1 items-center">
        <Link href={'/'} className="col-start-1 col-span-2 sm:col-span-1 row-span-1 ml-3">
            <Image src={logo} alt="The logo of the Stuyvesant Environmental Club" className="h-12 w-12" />
        </Link>
        <div className="invisible md:visible col-start-3 lg:col-start-5 text-[1em] sm:text-[1.1em] lg:text-[1.25em] font-bold col-end-11 flex flex-row justify-between">
            <Link href={'/about'} className="text-white flex justify-center flex-col">About</Link>
            <Link href={'/requirements'} className="text-white flex justify-center flex-col">Requirements</Link>
            <Link href={'/events'} className="text-white flex justify-center flex-col">Events</Link>
            <Link href={'/resources'} className="text-white flex justify-center flex-col">Resources</Link>
        </div>
        <button onClick={toggleDarkMode} className="col-start-11 md:col-start-12 row-start-1">
            {mounted && <Image src={resolvedTheme === "dark" ? sun : moon} className="h-9 w-9 dark:invert invert " alt={resolvedTheme === "dark" ? "Sun emoji, clicking will give light mode" : "Moon emoji, clicking will give dark mode"} />}
            {!mounted && <Image src={blank} className="h-9 w-9 dark:invert invert " alt={resolvedTheme === "dark" ? "Sun emoji, clicking will give light mode" : "Moon emoji, clicking will give dark mode"} />}
        </button>
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="visible md:invisible row-start-1 col-start-12">
            <Image src={menu} alt="menu button" className="" />
        </button>

        {dropdownOpen && <div className="absolute right-1 p-3 top-[4.1em] bg-browndark z-50">
            <Link onClick={() => setDropdownOpen(false)} href={'/about'} className="block text-xl text-white">About</Link>
            <Link onClick={() => setDropdownOpen(false)} href={'/requirements'} className="block text-xl text-white">Requirements</Link>
            <Link onClick={() => setDropdownOpen(false)} href={'/events'} className="block text-xl text-white">Events</Link>
            <Link onClick={() => setDropdownOpen(false)} href={'/resources'} className="block text-xl text-white">Resources</Link>
        </div>}
    </nav>)
}