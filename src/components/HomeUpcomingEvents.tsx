import { getSheetsData } from "@/actions/sheetsActions";

export default async function UpcomingEvents() {

    const data = await getSheetsData(
        process.env.UPCOMING_EVENTS_HOME_PAGE_SHEET_ID as string, "A2:D1000");

    console.log(data);
    return (
        <div className="w-full h-80 grid grid-cols-12 grid-rows-12 bg-[#D9D9D9] relative overflow-hidden">
            <h1 className="whitespace-normal text-3xl font-bold ml-0 sm:ml-5 text-center sm:text-left col-start-1 row-start-2 col-span-full font-lexend">
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
        <div className="flex flex-col w-80 h-60 p-2">
            <h3 className="text-3xl font-semibold">{eventName}</h3>
            <p className="text-xs">Date: {eventDate}</p>
            <p className="text-sm">{eventDescription}</p>
            <a href={eventLink} className="mt-auto font-medium hover:underline mb-3">
                {eventLinkText}
            </a>
        </div>
    );
}
