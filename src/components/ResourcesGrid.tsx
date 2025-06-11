"use client";


interface Props {
    resources: string[][];
}

export default function ResourcesGrid({ resources }: Props) {
    return (
        <div className="flex w-full flex-wrap items-center justify-center p-8 ">
            {resources.map((res, idx) => (
                <a key={idx} href={res[3]} className="p-2 max-w-90 group">
                    <div
                        className="h-full p-6 border border-gray-200 rounded-lg relative overflow-hidden transition-shadow group-hover:shadow-lg"
                        onMouseMove={(e) => {
                            const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                            const x = e.clientX - rect.left;
                            const y = e.clientY - rect.top;
                            e.currentTarget.style.setProperty("--mx", `${x}px`);
                            e.currentTarget.style.setProperty("--my", `${y}px`);
                        }}
                    >
                        <div
                            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 duration-500 -z-3"
                            style={{
                                backgroundImage:
                                    "radial-gradient(circle at var(--mx) var(--my), rgba(16,185,129,0.9) 0%, transparent 90%)",
                            }}
                        />

                        <h2
                            className={`${res[0].length > 20 ? "text-xl" : "text-2xl"
                                } miltonian font-semibold mb-1`}
                        >
                            {res[0]}
                        </h2>
                        <time
                            dateTime={res[1]}
                            className="block text-sm text-gray-700 mb-1 lexend italic z-3"
                        >
                            {res[1]}
                        </time>
                        <p className="text-gray-950 lexend">{res[2]}</p>
                    </div>
                </a>
            ))}
        </div>
    );
}