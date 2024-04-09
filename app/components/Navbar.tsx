"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo-no-background.png";

const Navbar = () => {
  return (
    <div className="nav-container border-b-2 border-black">
      <Link href="/">
        <Image src={logo} alt="Logo" height={500} width={400}></Image>
      </Link>
      <div className="nav-menu">
        <Link className="nav-link white" href="/login">
          Login
        </Link>
        <Link href="/signup" className="nav-link black">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
