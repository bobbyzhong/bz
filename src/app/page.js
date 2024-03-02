import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex items-center justify-center">
            <div className="flex flex-col items-center md:w-[65rem] w-full  ">
                <h1>Home</h1>
                <p>Short about section</p>

                <div className="grid grid-cols-3 justify-between w-full text-center">
                    {/* SECTION 1 */}
                    <div>
                        <h1>Section1</h1>
                        <div className="bg-red-300 flex flex-col items-start">
                            <Link href="/about">page 1</Link>
                            <Link href="/about">page 2</Link>
                        </div>
                    </div>

                    {/* SECTION 2 */}
                    <div>
                        <h1>Section1</h1>
                        <div className="bg-red-300 flex flex-col items-start">
                            <Link href="/about">page 1</Link>
                            <Link href="/about">page 2</Link>
                        </div>
                    </div>

                    {/* SECTION 3 */}
                    <div>
                        <h1>Section1</h1>
                        <div className="bg-red-300 flex flex-col items-start">
                            <Link href="/about">page 1</Link>
                            <Link href="/about">page 2</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
