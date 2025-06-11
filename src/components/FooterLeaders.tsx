"use server";
import { getSheetsData } from "@/actions/sheetsActions"

export default async function FooterLeaders() {

    const data = await getSheetsData(
        process.env.FOOTER_LEADERS_SHEET_ID as string, "A1:B3")

    return (
        <div>
            <div className="flex justify-between">
                <span className="italic text-xs">{data[0][0]}</span>
                <span className="font-bold text-xs">{data[0][1]}</span>
            </div>
            <div className="flex justify-between">
                <span className="italic text-xs">{data[1][0]}</span>
                <span className="font-bold text-xs">{data[1][1]}</span>
            </div>            <div className="flex justify-between">
                <span className="italic text-xs">{data[2][0]}</span>
                <span className="font-bold text-xs">{data[2][1]}</span>
            </div>
        </div>
    )
}