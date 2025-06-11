import PersonBox from "@/components/PersonBox";
import { getSheetsData } from "@/actions/sheetsActions";

interface Leader {
    name: string;
    category: string;
    position: string;
    image: string;
    description: string;
    link: string;
}

export default async function AboutPageGallery() {
    // 1) fetch the raw rows
    const rows = await getSheetsData(
        process.env.LEADERS_SHEET_ID as string,
        "A2:F1000"
    );
    // 2) reformat into objects
    const leaders: Leader[] = rows.map((r) => ({
        name: r[0],
        category: r[1],
        position: r[2],
        image: r[3],
        description: r[4],
        link: r[5],
    }));

    // 3) split into two groups
    const cabinet = leaders.filter((l) => l.category === "Cabinet");
    const deptHeads = leaders.filter(
        (l) => l.category === "Department Head"
    );

    // 4) render
    return (
        <>
            <h1 className="miltonian text-5xl">Cabinet</h1>
            <div className="flex flex-wrap justify-center gap-4">
                {cabinet.map((l, i) => (
                    <PersonBox
                        key={i}
                        className="w-[35rem] p-4  h-[15rem]"
                        image={l.image}
                        name={l.name}
                        position={l.position}
                        description={l.description}
                        link={l.link}
                    />
                ))}
            </div>

            <h1 className="miltonian text-5xl mt-8">
                Department Heads
            </h1>
            <div className="flex flex-wrap justify-center gap-4">
                {deptHeads.map((l, i) => (
                    <PersonBox
                        key={i}
                        className="w-[35rem] p-4  h-[15rem]"
                        image={l.image}
                        name={l.name}
                        position={l.position}
                        description={l.description}
                        link={l.link}
                    />
                ))}
            </div>
        </>
    );
}
