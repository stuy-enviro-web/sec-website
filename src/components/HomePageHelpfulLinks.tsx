
import { getSheetsData } from "@/actions/sheetsActions";
import ArrowRight from "public/arrow_right.svg";
import Image from "next/image";

export default async function HelpfulLinks() {

    const linkInfo = await getSheetsData(
        process.env.HELPFUL_LINKS_SHEET_ID as string, "A2:C1000"
    )

    const emailAddr = (await getSheetsData(
        process.env.HELPFUL_LINKS_SHEET_ID as string, "D1"))[0][0].split(":")[1].trim();

    return (<>
        {linkInfo.map(([category, urlsString, labelsString], key) => {
            const urls = urlsString
                .split(';')
                .map((u: string) => u.trim())
                .filter(Boolean)
            const labels = labelsString
                .split(';')
                .map((l: string) => l.trim())
                .filter(Boolean)

            return (
                <div key={key}>
                    <h3 className="text-2xl font-bold miltonian">{category}</h3>
                    <ul className="text-md font-light lexend pl-5">
                        {urls.map((url: string, i: number) => (
                            <li key={i} className="group">
                                <a href={url} className="group hover:font-bold lexend space-x-2 z-10
                                     transform transition-transform duration-300 ease-out
                                     hover:scale-105 hover:text-emerald-300 flex flex-row">
                                    <p>{labels[i] ?? url}</p>
                                    <Image src={ArrowRight} alt="arrow" className="group invisible group-hover:visible w-5 h-5 -translate-x-3 transition-transform duration-300 group-hover:-translate-x-2" />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>
            )
        })}

        <p className="font-light text-md">If you have any problems / concerns, please contact <a href={`mailto:${emailAddr}`}>{emailAddr}</a></p></>
    );
}
