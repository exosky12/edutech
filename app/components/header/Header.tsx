import { LoginButton, UserButton } from "@/app/authButtons";
import { auth } from "@/lib/auth";
import Image from "next/image";
import Link from "next/link";

export const Header = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const session = await auth();

  return (
    <nav className="bg-[#121212] fixed w-full z-20 top-0 start-0">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          href="/"
          className="flex cursor-pointer items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo.png"
            width={40}
            height={35}
            alt="Picture of the author"
          />
          <span className="cursor-pointer self-center font-bold text-[18px] block">
            Edu<span className="text-[#1D4ED8]">Tech</span>
          </span>
        </Link>
        <div className="flex md:order-2">
          <div className={"flex items-center gap-x-1 cursor-pointer"}>
            {!session?.user ? (
              <LoginButton />
            ) : (
              <UserButton name={session?.user?.name!} />
            )}
          </div>
        </div>
        <div
          className={`items-center justify-between hidden md:flex w-full md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className=" hidden md:flex w-full p-6 justify-center gap-[8px] font-medium md:p-0 md:flex-row md:space-x-8 md:mt-00">
            {[
              ["C'est quoi ?", "#apropos"],
              ["Prix", "#prix"],
              ["Mes cours", "/mescours"],
              ["Bibliothèque", "/bibliotheque"],
            ].map(([title, url]) => (
              <Link
                key={title}
                className="font-normal text-[16px] hover:text-[#1D4ED8]"
                href={url}
              >
                {title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
