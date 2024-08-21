import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import Menu from "@/app/components/Menu";

export default function DashboardLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            <div className="w-[14%] md:w[8%] lg-[16%] xl:w-[14%] p-4">
                <Link className={"flex items-center justify-center lg:justify-start gap-2"} href="/">
                    <Image src="/logo.png" alt="logo" width={32} height={32} />
                    <span className={"hidden lg:block"}>Schoolio</span>
                </Link>
                <Menu />
            </div>
            <div className="w-[86%] md:[92%] lg-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
                <Navbar />
                {children}
            </div>
        </div>
    );
}