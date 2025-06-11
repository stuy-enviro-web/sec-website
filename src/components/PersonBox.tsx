"use server"

import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface PersonBoxProps {
    className: string,
    name: string,
    position: string,
    description: string,
    link: string | null,
    image: string | StaticImport,
}

export default async function PersonBox(props: PersonBoxProps) {
    return (
        <div className={`${props.className}`}>
            <div className="grid grid-cols-12 grid-rows-12">
                <Image
                    className="rounded-md col-start-2 col-span-4 row-start-1 row-span-full w-fill h-fill transition-transform duration-300 ease-in-out hover:scale-105"
                    src={props.image}
                    width={400}
                    height={400}
                    alt={`Image for ${props.name}, who is ${props.position}`}
                />
                <div className="ml-2 col-start-6 col-span-6 row-start-1 row-span-full">
                    {props.link ? (
                        <a
                            href={props.link}
                            className="hover:text-gray-900 miltonian text-2xl font-bold relative inline-block group"
                        >
                            {props.name}
                            <span className=" absolute bottom-0 left-0 h-[2px] w-full bg-current transform scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100" />
                        </a>
                    ) : (
                        <div className="miltonian text-2xl font-bold">
                            {props.name}
                        </div>
                    )}
                    <div className="italic lexend font-light">
                        {props.position}
                    </div>
                    <div className="col-start-7 lexend font-light text-xs sm:text-base">
                        {props.description}
                    </div>
                </div>
            </div>
        </div>
    );
}