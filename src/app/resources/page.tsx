"use client"
import Image from "next/image";
import food_img from "public/media/hydroponics_2024.jpeg";
export default function Resources() {
    return (<div>
        <div className="grid grid-cols-12 grid-rows-12 w-full h-[45em] overflow-clip">
            <h1 className="miltonian col-start-2 row-start-4 col-span-full text-left text-8xl">
                Resources
            </h1>
            {/* <div className="col-start-1 col-span-full row-start-1 row-span-full inset-0 bg-black opacity-40 -z-1 pointer-events-none" /> */}
            <Image src={food_img} className="row-start-1 row-span-full object-cover h-full w-auto lg:w-full lg:h-auto -z-2 col-start-1 col-span-full  opacity-90" alt="Hydroponics system at Stuyvesant High School" />
        </div>
        <div className="flex w-full flex-wrap items-center justify-center p-8 ">
            {(() => {
                const resources = [
                    {
                        title: "Getting Started Guide",
                        date: "2024-01-15",
                        description: "Learn how to set up and run the project locally.",
                        href: "/docs/getting-started",
                    },
                    {
                        title: "API Reference",
                        date: "2024-01-15",
                        description: "Browse the complete REST API documentation.",
                        href: "/docs/api",
                    },
                    {
                        title: "Component Library",
                        date: "2024-01-15",
                        description: "Reusable UI components and usage examples.",
                        href: "/docs/components",
                    },
                    {
                        title: "Contributing",
                        date: "2024-01-15",
                        description: "Guidelines for contributing to the codebase.",
                        href: "/docs/contributing",
                    },
                    {
                        title: "Contributing",
                        date: "2024-01-15",
                        description: "Guidelines for contributing to the codebase.",
                        href: "/docs/contributing",
                    }, {
                        title: "Contributing",
                        date: "2024-01-15",
                        description: "Guidelines for contributing to the codebase.",
                        href: "/docs/contributing",
                    }, {
                        title: "Contributing",
                        date: "2024-01-15",
                        description: "Guidelines for contributing to the codebase.",
                        href: "/docs/contributing",
                    },
                ];

                return resources.map((res, idx) => (
                    <a
                        key={idx}
                        href={res.href}
                        className=" p-2 max-w-90 group"
                    >

                        <div
                            className="h-full p-6 border border-gray-200 rounded-lg relative overflow-hidden transition-shadow group-hover:shadow-lg"
                            onMouseMove={(e) => {
                                const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect()
                                const x = e.clientX - rect.left
                                const y = e.clientY - rect.top
                                e.currentTarget.style.setProperty('--mx', `${x}px`)
                                e.currentTarget.style.setProperty('--my', `${y}px`)
                            }}
                        >
                            {/* directional fill overlay */}
                            <div
                                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100  duration-500 -z-3"
                                style={{
                                    backgroundImage:
                                        'radial-gradient(circle at var(--mx) var(--my), rgba(16,185,129,0.9) 0%, transparent 90%)',
                                }}
                            />

                            {/* content */}
                            <h2
                                className={`${
                                    res.title.length > 20 ? 'text-xl' : 'text-2xl'
                                } miltonian font-semibold mb-1`}
                            >
                                {res.title}
                            </h2>
                            <time
                                dateTime={res.date}
                                className="block text-sm text-gray-700 mb-1 lexend italic z-3"
                            >
                                {new Date(res.date).toLocaleDateString()}
                            </time>
                            <p className="text-gray-950 lexend">{res.description}</p>
                        </div>
                    </a>
                ));
            })()}
        </div>
    </div>);
}