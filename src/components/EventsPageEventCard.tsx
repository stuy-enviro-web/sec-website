import React from "react"
import Image from "next/image"
import ArrowRight from "public/arrow_right.svg";

interface EventsPageEventCardProps {
    event: string[]
}
export default function EventsPageEventCard({ event }: EventsPageEventCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 hover:shadow-lg transition-shadow">
            <p className="lexend text-gray-500 text-sm">{event[1]}</p>
            <h3 className="miltonian mt-1 text-2xl font-semibold">
                {event[0]}
            </h3>
            <p className="lexend mt-3 text-gray-700">
                {event[2]}
            </p>
            <a
                href={event[3]}
                className="mt-4 inline-flex items-center text-blue-600 hover:underline"
            >
                Learn More
                <Image src={ArrowRight} alt="arrow" className="ml-2 w-5 h-5" />
            </a>
        </div>
    )
}
