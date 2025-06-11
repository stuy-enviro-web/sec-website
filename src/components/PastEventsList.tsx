import { getSheetsData } from "@/actions/sheetsActions"
import EventsPageEventCard from "./EventsPageEventCard"

export default async function PastEventsList() {
    const upcomingEvents = await getSheetsData(process.env.PAST_EVENTS_SHEET_ID as string, "A2:D1000")

    return (
        upcomingEvents.length > 0 ? (
            upcomingEvents.map((event, index) => (
                <EventsPageEventCard key={index} event={event} />
            ))
        ) : null
    );
}