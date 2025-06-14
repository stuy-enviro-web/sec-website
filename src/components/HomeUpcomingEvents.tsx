import { getSheetsData } from "@/actions/sheetsActions";
import ArrowRight from "public/arrow_right.svg";
import Image from "next/image";

export default async function UpcomingEvents() {

    const data = await getSheetsData(
        process.env.UPCOMING_EVENTS_HOME_PAGE_SHEET_ID as string, "A2:D1000");

    return (
        <div className="w-full h-80 grid grid-cols-12 grid-rows-12 bg-[#D9D9D9] relative overflow-hidden">
            <h1 className="whitespace-normal text-3xl font-bold ml-0 sm:ml-5 text-center sm:text-left col-start-1 row-start-2 col-span-full miltonian ">
                Upcoming Events
            </h1>

            <div
                className="overflow-y-hidden no-scrollbar col-start-1 col-span-full row-start-3 row-span-full flex m-4 flex-row flex-nowrap w-full overflow-x-auto scroll-smooth"
            >
                {/* Using fixed width/height for consistent sizing */}
                <div className="flex gap-4 flex-nowrap">
                    {data.map((event, index) => (
                        <EventCard
                            key={index}
                            eventName={event[0] || "Event Name"}
                            eventDate={event[1] || "Date"}
                            eventDescription={event[2] || "Description not available."}
                            eventLink={event[3] || "#"}
                            eventLinkText="Check out more!"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

interface EventCardProps {
    eventName: string;
    eventDate: string;
    eventDescription: string;
    eventLink: string;
    eventLinkText?: string;
}
function EventCard({
    eventName,
    eventDate,
    eventDescription,
    eventLink,
    eventLinkText = "Check out more!"
}: EventCardProps) {
    return (
        <div className="flex flex-col w-80 h-60 p-4 bg-white rounded-lg shadow-md group-hover:shadow-2xl transition-shadow duration-200">
            <h3 className="group text-2xl font-semibold text-gray-800 miltonian">{eventName}</h3>
            <p className="group text-xs text-gray-500 mb-1 lexend italic ">{eventDate}</p>
            <p className="text-sm text-gray-700 flex-grow line-clamp-3 lexend">
                {eventDescription}
            </p>
            <a
                href={eventLink}
                className="group mt-4 text-sm font-medium text-gray-800 hover:underline hover:font-bold lexend space-x-2 z-10
                                     transform transition-transform duration-300 ease-out
                                     hover:scale-105 hover:text-emerald-300 flex flex-row"
            >
                <p>{eventLinkText}</p>
                <Image src={ArrowRight} alt="arrow" className="group w-5 h-5 -translate-x-2 transition-transform duration-300 group-hover:translate-x-0" />

            </a>
        </div>
    );
}
