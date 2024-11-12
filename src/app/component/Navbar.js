"use client";

import { Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSignIn, faX } from "@fortawesome/free-solid-svg-icons";
import logo from "@/images/tki-white.svg";
import logo2 from "@/images/tki-dark.svg";
import { configdata } from "@/config/global";
import Image from "next/image";

const menu = [
  {
    title: "Home",
    path: "hero",
  },
  {
    title: "Feature",
    path: "benefit",
  },
  {
    title: "Blog",
    path: "product",
  },
  {
    title: "Support",
    path: "documentation",
  },
];

const FlyerNavbar = ({ newTab }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState(newTab ? "" : "hero");
  const [open, setOpen] = useState(false);

  const handleMenu = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
    };
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const offsetTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + sectionHeight
        ) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`hidden w-full py-5 md:flex justify-center items-center top-0 left-0 z-[100] fixed transition-all duration-300 ${
          scrollPosition > 100 ? "bg-opacity-100 bg-white border-b-2" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: scrollPosition > 10 ? 0 : 20 }}
          transition={{ duration: 0.2, delay: 0 }}
          className={`container w-full max-w-6xl text-gray-600 flex justify-between text-sm transition-all duration-500 px-7 sm:px-7 md:px-7 lg:px-0`}
        >
          <div className="flex items-center">
            <Image alt="" src={configdata.logo} className="w-28" />
          </div>
          <div className="flex gap-7 items-center cursor-pointer text-[0.8rem]">
            {menu.map((res, i) => {
              return (
                <p
                  style={{
                    color:
                      activeSection === res.path
                        ? configdata.color1
                        : "#d1d5db",
                  }}
                  key={i}
                  // onClick={() =>
                  //   newTab ? (window.location.href = "/") : handleMenu(res.path)
                  // }
                  className={`py-0 hover:text-[${configdata.color1.replace(
                    /^["']|["']$/g,
                    ""
                  )}] ${res.title === "Support" ? "" : "border-r-1 pr-8"}`}
                >
                  {res.title}
                </p>
              );
            })}
          </div>
          <div className="flex items-center">
            <button
              style={{ backgroundColor: configdata.color1 }}
              className="text-xs rounded-full px-5 py-2 text-white"
            >
              Sign Up <FontAwesomeIcon icon={faSignIn} />
            </button>
          </div>
        </motion.div>
      </div>
      <div
        className={`flex w-full py-4 md:hidden justify-center items-center top-0 left-0 z-50 fixed ${
          scrollPosition > 70 ? "shadow-lg bg-white" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: scrollPosition > 10 ? 0 : 20 }}
          transition={{ duration: 0.2, delay: 0 }}
          className={`container max-w-6xl text-gray-600 flex justify-between text-sm transition-all duration-500 px-7 sm:px-7 md:px-0`}
        >
          <div className="flex items-center">
            <Image alt="" src={configdata.logo} className="w-28" />
          </div>
          <div className="flex items-center gap-4">
            <Button
              style={{ color: configdata.color1 }}
              isIconOnly
              className="border bg-transparent"
              onClick={() => setOpen(!open)}
            >
              <FontAwesomeIcon icon={faBars} />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Side bar component  */}

      <div
        className={`h-full fixed right-0 bottom-0 bg-white z-[100] transition-all duration-500 shadow-xl ${
          open ? "md:w-[50%] sm:w-[65%] w-full" : "w-0"
        }`}
      >
        <div className="w-full px-7 py-4 flex justify-between relative z-50 shadow items-center">
          <Image alt="" src={configdata.logo} className="w-28" />
          <Button
            style={{ color: configdata.color1 }}
            isIconOnly
            className="border bg-transparent text-white"
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon icon={faX} className="text-black" />
          </Button>
        </div>
        <div className="flex flex-col gap-5 items-start cursor-pointer p-10">
          {menu.map((res, i) => {
            return (
              <p
                key={i}
                onClick={() => {
                  handleMenu(res.path);
                  setOpen(false);
                }}
                style={{
                  color:
                    activeSection === res.path ? configdata.color1 : "#d1d5db",
                }}
                className={`py-1 hover:text-blue-500 `}
              >
                {res.title}
              </p>
            );
          })}
          <button
            style={{ backgroundColor: configdata.color1 }}
            className="text-xs rounded-full px-5 py-2 text-white"
          >
            Sign Up <FontAwesomeIcon icon={faSignIn} />
          </button>
        </div>
      </div>
    </>
  );
};

export default FlyerNavbar;
