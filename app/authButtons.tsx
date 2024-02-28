"use client";

import Image from "next/image";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const LoginButton = () => {
  return (
    <Link
      href="/api/auth/signin"
      className="borderBtn flex cursor-pointer items-center rounded-full bg-white px-4 py-1 font-medium text-black text-[16px]"
    >
      Se connecter
    </Link>
  );
};

type UserButtonProps = {
  name: string;
};

export const UserButton = ({ name }: UserButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="w-10 h-10 bg-slate-200 rounded-full">
          <Image
            className="rounded-full"
            src={`https://github.com/${name}.png`}
            width={40}
            height={40}
            alt=""
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Subscription</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
