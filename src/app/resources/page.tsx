
import Image from "next/image";
import food_img from "public/media/hydroponics_2024.jpeg";
import ResourcesList from "@/components/ResourcesList";

export default async function Resources() {
    return (<div>
        <div className="grid grid-cols-12 grid-rows-12 w-full h-[45em] overflow-clip">
            <h1 className="miltonian col-start-2 row-start-4 col-span-full text-left text-8xl">
                Resources
            </h1>
            {/* <div className="col-start-1 col-span-full row-start-1 row-span-full inset-0 bg-black opacity-40 -z-1 pointer-events-none" /> */}
            <Image src={food_img} className="row-start-1 row-span-full object-cover h-full w-auto lg:w-full lg:h-auto -z-2 col-start-1 col-span-full  opacity-90" alt="Hydroponics system at Stuyvesant High School" />
        </div>
        <ResourcesList />

    </div>);
}