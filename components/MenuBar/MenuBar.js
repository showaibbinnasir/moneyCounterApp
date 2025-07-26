'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function MenuBar() {
    const pathname = usePathname()
    return (
        <div className="">
            {/* <div>
                <Link prefetch={false} href='/' className={`text-white text-center text-lg font-semibold px-5 py-4  rounded-lg transition ${pathname === "/"
                    ? "bg-slate-400 rounded-lg "
                    : "hover:bg-slate-600"
                    }`} >Home</Link>
            </div> */}
            <div  className={`px-5 py-4 rounded-lg ${pathname === "/" ? "bg-slate-400" : "hover:bg-slate-600" }`}>
                <Link href='/' prefetch={false}>
                    <h1 className="text-white text-center text-lg font-semibold">Home</h1>
                </Link>
            </div>
            <div  className={`px-5 py-4 rounded-lg ${pathname === "/updatemoney" ? "bg-slate-400" : "hover:bg-slate-600" }`}>
                <Link href='/updatemoney' prefetch={false}>
                    <h1 className="text-white text-center text-lg font-semibold">Update Wallet</h1>
                </Link>
            </div>
            <div  className={`px-5 py-4 rounded-lg ${pathname === "/totalmoney" ? "bg-slate-400" : "hover:bg-slate-600" }`}>
                <Link href='/totalmoney' prefetch={false}>
                    <h1 className="text-white text-center text-lg font-semibold">Total Money</h1>
                </Link>
            </div>
            <div  className={`px-5 py-4 rounded-lg ${pathname === "/statistic" ? "bg-slate-400" : "hover:bg-slate-600" }`}>
                <Link href='/statistic' prefetch={false}>
                    <h1 className="text-white text-center text-lg font-semibold">Stats</h1>
                </Link>
            </div>
            

        </div>
    )
}
