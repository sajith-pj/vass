import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Style from "./layout.module.scss";
import { motion, useCycle } from "framer-motion";
import { useDimensions } from "./useDimensions";
// import logo from "@/assets/images/logo-white-yellow.png";
import Youtube from "../Icons/Youtube";
import Instagram from "../Icons/Instagram";
import Facebook from "../Icons/Facebook";
import Linkedin from "../Icons/Linkedin";
const Navbar = ({ isAbsolute = false }) => {
  const containerRef = useRef(null);
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { height } = useDimensions(containerRef);
  let navLinks = [
    {
      label: "HOME",
      link: "/",
    },
    {
      label: "SPEAKER",
      link: "#speaker",
    },
    {
      label: "SCHEDULE",
      link: "#schedule",
    },
    {
      label: "CONTACT  US",
      link: "#contactus",
    },
  ];

  const sidebar = {
    open: (height) => ({
      height: height,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      height: 0,
      opacity: 0,
      display: "none",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(`.info-nav`);
      if (navbar) {
        navbar.classList.toggle("fixed", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`  w-full z-[100] ${isAbsolute ? "absolute" : "bg-black"}`}>
      <div className="  bg-white shadow-md w-full flex justify-between  px-3 lg:px-[70px] items-center py-3 info-nav z-[100]">
        <div className="flex flex-col md:flex-row  md:gap-x-6 lg:gap-x-6 items-start md:items-center  text-[10px] lg:text-[16px]">
          <a
            href="mailto:info@vasssystems.com "
            className="flex justify-start text-secondary "
          >
            info@vasssystems.com
          </a>
          <p className="hidden lg:block text-secondary font-semibold">|</p>
          <a
            href="tel:info@vasssystems.com"
            className="lg:text-[15px] text-secondary "
          >
            +91 9048170077
          </a>
        </div>
        <div className="flex justify-center items-center gap-x-3 lg:gap-x-4">
          <Link
            href="https://www.instagram.com/scaleupconclave/"
            target="_blank"
          >
            <Instagram className="fill-gray-600 stroke-gray-600" width="30" />
          </Link>
          <Link
            href="https://www.facebook.com/profile.php?id=61554188141132"
            target="_blank"
          >
            <Facebook className="fill-gray-600 stroke-gray-600" width="30" />
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCoqK1Qib6qavzM1kAhhFptg"
            target="_blank"
          >
            <Youtube
              className="fill-gray-600 stroke-gray-600"
              inner="white"
              width="30"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/company/99166593/admin/feed/posts/"
            target="_blank"
          >
            <Linkedin className="fill-gray-600 stroke-gray-600" width="30" />
          </Link>
        </div>
      </div>
      <div className="  p-5 justify-between items-center h-[20vh] hidden md:flex custom-container">
        <Link href="/">
          {/* <Image width="100" height="100" alt="logo" src={logo.src} /> */}
          LOGO
        </Link>

        <div>
          <ul className="w-full flex p-8">
            {navLinks.map(({ label, link }, index) => (
              <li key={index}>
                <Link
                  href={link}
                  className="whitespace-nowrap p-5 text-white hover:text-primary-cyan transition-colors ease-in-out duration-700 text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className={`w-full block md:hidden bg-[#18181C]  z-20 ${
          isAbsolute && "absolute"
        }`}
      >
        <div
          className="w-full flex justify-between relative  p-5 "
          initial={"false"}
          custom={height}
          ref={containerRef}
        >
          <Link href="/">
            {/* <Image width="90" height="100" alt="logo" src={logo.src} /> */}
            logo
          </Link>
          <div className="px-3 flex justify-center items-center">
            <button type="button" onClick={toggleOpen}>
              <span className={Style["hamburger"]}></span>
            </button>
          </div>
        </div>

        <motion.div animate={isOpen ? "open" : "closed"} variants={sidebar}>
          <ul className="w-full flex flex-col p-8">
            {navLinks.map(({ label, link }, index) => (
              <li key={index}>
                <Link
                  href={link}
                  className="p-5 block text-white hover:text-[#f50136] transition-colors ease-in-out duration-700 text-sm"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Navbar;
