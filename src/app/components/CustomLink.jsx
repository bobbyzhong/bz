import Link from "next/link";

const CustomLink = ({ title, date, link }) => {
    return (
        <div className=" flex flex-row items-start gap-2">
            •{" "}
            <Link
                className="flex flex-row items-end gap-2 w-full"
                href="/about"
            >
                <div className="text-blue-500 underline text-start">
                    {title}
                </div>
                <span className="text-sm no-underline text-zinc-400 ">
                    {date}
                </span>
            </Link>
        </div>
    );
};
export default CustomLink;
