"use server";
import { getSheetsData } from "@/actions/sheetsActions";
import ResourcesGrid from "@/components/ResourcesGrid";

export default async function ResourcesList() {

    const data = await getSheetsData(
        process.env.RESOURCES_SHEET_ID as string, "A2:D1000"
    );

    console.log(data);

    return (
        <ResourcesGrid resources={data as string[][]} />
    );
}
