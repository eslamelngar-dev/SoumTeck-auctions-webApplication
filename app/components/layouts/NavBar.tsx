"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CircleUserRound, Menu, X } from "lucide-react";
import mainLogo from "../../../public/main-logo/Logo.png";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLink = (path:string) => `
    relative
    mx-5
    text-[1rem]
    font-[500]
    transition-colors
    duration-300
    after:content-['']
    after:absolute
    after:right-0
    after:bottom-[-5px]
    after:h-[2px]
    after:bg-[#EEA820]
    after:transition-all
    hover:text-white
    hover:after:w-[50%]
    ${pathname === path ? "text-white after:w-[50%]" : "text-[#BDBDBD]"}
  `;

  return (
    <nav className="relative flex items-center justify-between bg-[#171D5B] h-[7rem] px-6">
      {/* Logo */}
      <Link href="/">
        <Image alt="logo" src={mainLogo} className="lg:mr-[5rem]" />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:block">
        <ul className="flex items-center">
          <li>
            <Link href="/" className={navLink("/")}>
              الرئيسية
            </Link>
          </li>
          <li>
            <Link href="/auctions" className={navLink("/auctions")}>
              المزادات
            </Link>
          </li>
          <li>
            <Link href="/contact" className={navLink("/contact")}>
              تواصل معنا
            </Link>
          </li>
        </ul>
      </div>

      {/* Desktop Login */}
      <div className="hidden md:block">
        <Link href="/login">
          <button className="flex items-center gap-2 text-white ml-[5rem]">
            <CircleUserRound size={22} />
            تسجيل الدخول
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Links */}
      <div
        className={`md:hidden absolute top-[7rem] right-0 w-full bg-[#171D5B] transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          <li>
            <Link
              href="/"
              className={navLink("/")}
              onClick={() => setIsOpen(false)}
            >
              الرئيسية
            </Link>
          </li>
          <li>
            <Link
              href="/auctions"
              className={navLink("/auctions")}
              onClick={() => setIsOpen(false)}
            >
              المزادات
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={navLink("/contact")}
              onClick={() => setIsOpen(false)}
            >
              تواصل معنا
            </Link>
          </li>

          <li>
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <button className="flex items-center gap-2 text-white border border-white px-6 py-2 rounded-full">
                <CircleUserRound size={20} />
                تسجيل الدخول
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
