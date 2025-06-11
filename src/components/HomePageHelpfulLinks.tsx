
import { getSheetsData } from "@/actions/sheetsActions";

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
                            <li key={i}>
                                <a href={url} className="hover:underline">
                                    {labels[i] ?? url}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <br />
                </div>
            )
        })}

        <p className="font-light text-md">If you have any problems / concerns, please contact <a href={emailAddr}>{emailAddr}</a></p></>
    );
}