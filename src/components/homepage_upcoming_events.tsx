export default function UpcomingEvents() {

    return (
        <div className="w-full h-80 grid grid-cols-12 grid-rows-12 bg-[#D9D9D9] relative overflow-hidden">
            <h1 className="whitespace-normal text-3xl font-bold ml-5 col-start-1 row-start-2 col-span-3 font-lexend">
                Upcoming Events
            </h1>

            <div
                className="no-scrollbar col-start-1 col-span-full row-start-3 row-span-full flex m-4 flex-row flex-nowrap w-full overflow-x-auto scroll-smooth"
            >
                {/* Using fixed width/height for consistent sizing */}
                <div className="flex gap-4 flex-nowrap">
                    <EventCard
                        eventName="Event Name"
                        eventDate="Date"
                        eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        eventLink="https://google.com"
                        eventLinkText="Check out more!"
                    />
                    <EventCard
                        eventName="Event Name"
                        eventDate="Date"
                        eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        eventLink="https://google.com"
                        eventLinkText="Check out more!"
                    />
                    <EventCard
                        eventName="Event Name"
                        eventDate="Date"
                        eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        eventLink="https://google.com"
                        eventLinkText="Check out more!"
                    />
                    <EventCard
                        eventName="Event Name"
                        eventDate="Date"
                        eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        eventLink="https://google.com"
                        eventLinkText="Check out more!"
                    />
                    <EventCard
                        eventName="Event Name"
                        eventDate="Date"
                        eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        eventLink="https://google.com"
                        eventLinkText="Check out more!"
                    />
                    <EventCard
                        eventName="Event Name"
                        eventDate="Date"
                        eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        eventLink="https://google.com"
                        eventLinkText="Check out more!"
                    />
                    <EventCard
                        eventName="Event Name"
                        eventDate="Date"
                        eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        eventLink="https://google.com"
                        eventLinkText="Check out more!"
                    />
                    <EventCard
                        eventName="Event Name"
                        eventDate="Date"
                        eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        eventLink="https://google.com"
                        eventLinkText="Check out more!"
                    />
                    <EventCard
                        eventName="Event Name"
                        eventDate="Date"
                        eventDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        eventLink="https://google.com"
                        eventLinkText="Check out more!"
                    />
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