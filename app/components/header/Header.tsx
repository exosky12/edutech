"use client";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-[#121212] fixed w-full z-20 top-0 start-0">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
					<span className="self-center hidden sm:block cursor-pointer text-[18px] font-bold">
						Edu<span className="text-[#1D4ED8]">Tech</span>
					</span>
				</Link>
				<div className="flex md:order-2">
					<div className={"flex items-center gap-x-1 cursor-pointer"}>
						<SignedIn>
							<UserButton afterSignOutUrl="/" userProfileUrl="/profile" />
						</SignedIn>
						<SignedOut>
							<SignInButton mode="modal">
								<Link
									className="font-medium borderBtn cursor-pointer flex items-center bg-white rounded-full px-4 py-1 text-[16px] text-black"
									href="/"
								>
									Se connecter
								</Link>
							</SignInButton>
						</SignedOut>
						<button
							data-collapse-toggle="navbar-sticky"
							type="button"
							className="inline-flex items-center p-2 text-sm text-white md:hidden "
							aria-controls="navbar-sticky"
							aria-expanded="false"
							onClick={() => setIsOpen(!isOpen)}
						>
							<span className="sr-only">Open main menu</span>
							<svg
								className="w-6 h-6"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
							</svg>
						</button>
					</div>
				</div>
				<div
					className={`items-center justify-between ${
						isOpen ? "flex" : "hidden"
					} md:flex w-full md:w-auto md:order-1`}
					id="navbar-sticky"
				>
					<ul className="flex flex-col w-full p-6 justify-center gap-[8px] font-medium md:p-0 bg-[#121212] md:flex-row md:space-x-8 md:mt-00">
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
