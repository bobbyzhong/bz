import Image from "next/image";
import Link from "next/link";
import CustomLink from "./components/CustomLink";

export default function Home() {
    return (
        <div className="flex items-center justify-center mx-5">
            <div className="flex flex-col items-center md:w-[65rem] w-full  ">
                <h1 className="font-semibold text-3xl">Home</h1>
                <p className="mt-3 text-center w-[70%]">
                    This is a place for me to organize my thoughts and a
                    culmination of my learnings
                </p>

                {/* Not sure exactly what
                    I want to do, but I know that I want to make a real impact
                    on the world. Currently working as a software engineer and
                    of course, working on some side projects. */}

                {/* About and Preface with this */}
                <div className="flex flex-col items-center text-center md:text-start md:flex-row gap-10 my-8">
                    <div className="ABOUT w-[50%] ">
                        <h1 className="font-semibold text-xl mb-3">About</h1>
                        <p>
                            My goal is to make a genuine impact on the world.
                            I'm trying to learn as much as possible from my
                            experiences and the people I meet. I'm currently
                            working as a software engineer at YC startup and of
                            course, working on some side projects too.
                        </p>
                    </div>
                    <div className="PREFACE w-[50%]">
                        <h1 className="font-semibold text-xl mb-3">Preface</h1>
                        <p>
                            To preface things, the only thing I know is that I
                            have no idea what I'm doing. I have several goals
                            with doing this writing (organizing & exploring
                            thoughts, speaking better, note-taking, etc.) but
                            really I'm just writing whatever is interesting to
                            me at the moment.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 justify-between w-full text-center">
                    {/* SECTION 1 */}
                    <div className="mb-5 p-3 mx-3 ">
                        <h1 className="font-semibold mb-3">Core</h1>
                        <CustomLink
                            title={"Questions I Have"}
                            date={"03.02.2024"}
                            link={"/questions"}
                        />
                    </div>
                    {/* SECTION 1 */}
                    <div className="mb-5 p-3 mx-3 ">
                        <h1 className="font-semibold mb-3">Books</h1>
                        <CustomLink
                            title={"Questions I Have"}
                            date={"03.02.2024"}
                            link={"/questions"}
                        />
                    </div>
                    {/* SECTION 1 */}
                    <div className="mb-5 p-3 mx-3 ">
                        <h1 className="font-semibold mb-3">Startups</h1>
                        <CustomLink
                            title={"Questions I Have"}
                            date={"03.02.2024"}
                            link={"/questions"}
                        />
                    </div>
                    {/* SECTION 1 */}
                    <div className="mb-5 p-3 mx-3 ">
                        <h1 className="font-semibold mb-3">People</h1>
                        <CustomLink
                            title={"Questions I Have"}
                            date={"03.02.2024"}
                            link={"/questions"}
                        />
                    </div>
                    {/* SECTION 1 */}
                    <div className="mb-5 p-3 mx-3 ">
                        <h1 className="font-semibold mb-3">Quotes</h1>
                        <CustomLink
                            title={"Questions I Have"}
                            date={"03.02.2024"}
                            link={"/questions"}
                        />
                    </div>

                    {/* SECTION 1 */}
                    <div className="mb-5 p-3 mx-3 ">
                        <h1 className="font-semibold mb-3">History</h1>
                        <CustomLink
                            title={"Questions I Have"}
                            date={"03.02.2024"}
                            link={"/questions"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
