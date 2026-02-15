"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CircleUserRound, Menu, X } from "lucide-react";
import mainLogo from "../../../public/main-logo/Logo.png";
import mainLogo2 from "../../../public/main-logo/Logo2.png";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLink = (path: string) => `
    relative
    mx-5
    lg:text-white
    text-black
    text-[1rem]
    font-[500]
    transition
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
    ${pathname === path ? "lg:text-white text-[#BDBDBD] after:w-[50%]" : "lg:text-[#BDBDBD] text-black"}
  `;

  return (
    <nav className="relative flex items-center justify-between md:bg-white lg:bg-[#171D5B] h-[7rem] px-6 z-99">
      <Link href="/" className="lg:mr-[5rem]">
        <Image alt="logo" src={mainLogo} className="hidden lg:block" />
        <Image alt="logo" src={mainLogo2} className="block lg:hidden" />
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
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Links */}
      <div
        className={`md:hidden absolute top-[7rem] right-0 w-full bg-white transition-all duration-300 z-99 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col items-start gap-6 py-8 text-[1.1rem]">
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
          <hr className="border border-gray-200 w-[80%]" />
          <li>
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <button className="flex items-center gap-2 text-black border border-white px-6 rounded-full">
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
