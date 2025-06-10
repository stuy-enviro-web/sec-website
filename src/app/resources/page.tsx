import Image from "next/image";
import food_img from "public/media/hydroponics_2024.jpeg";

export default function Resources() {
    return (<div>
        <div className="grid grid-cols-12 grid-rows-12 w-full h-[45em] overflow-y-hidden">
            <h1 className="miltonian col-start-2 row-start-4 col-span-full text-left text-8xl">
                Resources
            </h1>
            <Image src={food_img} className="row-start-1 row-span-full object-cover h-full w-auto lg:w-full lg:h-auto col-start-1 col-span-full -z-1 opacity-90" alt="Hydroponics system at Stuyvesant High School" />
        </div>
    </div>);
}