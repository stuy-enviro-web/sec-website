import AboutUsSplash from "public/media/about_us_splash.png";
import Image from "next/image";
import ArrowRight from "public/arrow_right.svg";
import AboutPageGallery from "@/components/AboutPageGallery";

export default function about() {
    return (<div>
        <div className="h-[45em] w-full grid grid-cols-12 grid-rows-12">
            <h1 className="col-start-2  col-span-full row-start-10 z-1 text-white miltonian text-5xl">About Us</h1>
            <div className="h-full w-full flex items-center justify-center col-start-1 col-span-full row-start-1 row-span-full">
                <Image src={AboutUsSplash} className="w-auto h-full md:w-full xl:w-full md:h-full xl:h-auto object-cover object-center" alt="2015-2016 Arbor Day Event" style={{ maxHeight: '100%', maxWidth: '100%' }} />
            </div>
        </div>
        <div className="grid grid-cols-12 grid-rows-12 items-center justify-center w-full h-[45em] p-8">
            <h1 className="text-7xl font-bold mb-4 miltonian col-start-1 col-span-full row-start-1 text-center">
                What we do
            </h1>
            <h3 className="text-3xl col-start-4 col-end-10 row-start-4 row-span-3 text-center font-light lexend">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h3>
            <div className="grid grid-cols-2 grid-rows-2 items-center justify-center col-start-3 col-end-11 row-start-9">
                <div className="lexend text-4xl flex flex-row items-center justify-center font-light hover:underline">
                    <span>Leaders</span>
                    <Image src={ArrowRight} className="w-10 h-10 inline ml-2" alt="Arrow pointing right" />
                </div>

                <div className="lexend text-4xl flex flex-row items-center justify-center font-light hover:underline">
                    <span>Join Us</span>
                    <Image src={ArrowRight} className="w-10 h-10 inline ml-2" alt="Arrow pointing right" />
                </div>

                <div className="lexend text-4xl flex flex-row items-center justify-center font-light hover:underline">
                    <span>Comittees</span>
                    <Image src={ArrowRight} className="w-10 h-10 inline ml-2" alt="Arrow pointing right" />
                </div>

                <div className="lexend text-4xl flex flex-row items-center justify-center font-light hover:underline">
                    <span>FAQs</span>
                    <Image src={ArrowRight} className="w-10 h-10 inline ml-2" alt="Arrow pointing right" />
                </div>
            </div>
        </div>
        <div className="w-full min-h-96 flex flex-col items-center justify-center ">
            <h1 className="miltonian text-7xl">
                Leaders
            </h1>
            <AboutPageGallery />
        </div>
    </div>);
}
