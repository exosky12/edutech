
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { signIn, signOut } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

async function AuthButton(){
    const session = await getServerSession(authOptions);
    if (session && session.user && session.user.image) {
        return (
          <>
            {session.user.image}
            <Avatar className="cursor-pointer">
                <AvatarImage src={"https://cdn.sstatic.net/Img/teams/teams-illo-free-sidebar-promo.svg?v=47faa659a05e"} />
                <AvatarFallback>https://avatars.githubusercontent.com/u/102408092?v=4</AvatarFallback>
            </Avatar>
          </>
        );
      }
      return (
        <>
           <div className={"borderBtn cursor-pointer flex items-center bg-white rounded-full px-4 py-1 gap-2"}>
            <Link className="font-medium text-[18px] text-black" href={"/api/auth/signin"}>
             Se connecter
            </Link>
           </div>
        </>
      );
}

export default function Navbar() { 
    return (
        <>
            <div className="w-full h-[45px] mt-[16px] px-[100px] flex items-center justify-between">
                <Link href="/"className="flex items-center gap-[8px]">
                    <Image
                        src="/logo.png"
                        width={40}
                        height={35}
                        alt="Picture of the author"
                    />
                    <h1 className="text-[18px] font-bold">Edu<span className="text-[#1D4ED8]">Tech</span></h1>
                </Link>
                <ul className="flex gap-[32px]">
                        <Link className="font-normal text-[16px] hover:text-[#1D4ED8]" href="#presentation">
                            C&apos;est quoi ?
                        </Link>
                        <Link className="font-normal text-[16px] hover:text-[#1D4ED8]" href="#prix">
                            Prix
                        </Link>
                        <Link className="font-normal text-[16px] hover:text-[#1D4ED8]" href="/">
                            Mes cours
                        </Link>
                        <Link className="font-normal text-[16px] hover:text-[#1D4ED8]" href="/">
                            Bibliothèque
                        </Link>
                </ul>
                <div className="flex items-center gap-[8px]">
                    <Image className="cursor-pointer"
                        src="/switch.png"
                        width={40}
                        height={35}
                        alt="Picture of the author"
                    />
                    {/* <Avatar className="cursor-pointer">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar> */}
                    <AuthButton/>

                </div>
            </div>
        </>
    )
}
