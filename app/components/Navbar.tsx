"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-no-background.png";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="nav-container border-b-2 border-black">
      <Link href="/">
        <Image src={logo} alt="Logo" height={500} width={400}></Image>
      </Link>
      <div className="nav-menu">
        {/* sign-in */}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        {/* sign-out */}
        <SignedOut>
          <Link className="nav-link white" href="/sign-in">
            Login
          </Link>
          <Link href="/sign-up" className="nav-link black">
            SignUp
          </Link>
        </SignedOut>
      </div>
    </div>
  );
};

export default Navbar;
