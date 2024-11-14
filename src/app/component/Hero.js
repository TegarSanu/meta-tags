"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "@/config/api";
import bgGlowing from "@/images/background/bg-glowing-flyer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle, faVideo } from "@fortawesome/free-solid-svg-icons";
import { HeroImage } from "./CustomColorImage";
import { configdata } from "@/config/global";

const FlyerHero = () => {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState("");

  const handleClick = (open, link) => {
    setOpen(open);
    setLink(link);
  };

  return (
    <section id="home" className="w-full bg-white flex flex-col items-center">
      <div className="w-full bg-gradient-to-t from-gray-50 to-white flex items-center pt-52 flex-col gap-5 px-7 md:px-0">
        <p className="text-2xl md:text-5xl text-center text-black font-bold max-w-4xl">
          Saatnya GoDigital Bersama {configdata.companyName}, Jadikan Sekolah
          Lebih Maju Dengan Teknologi
        </p>
        <p className="text-gray-500 text-center md:text-medium text-xs">
          Selamatkan Waktu, Hemat Energi, Tingkatkan Efisiensi,
          <br />
          Teknologi Inovatif Untuk Operasional Sekolah Yang Lebih Mudah
        </p>
        <div className="w-full pt-5 md:pt-16 flex items-center justify-center gap-5">
          <div
            onClick={() => handleClick(true, "")}
            className="cursor-pointer hover:scale-105 transition-all duration-300 bg-black rounded-xl py-2 px-4 border-white border-1 text-white flex items-center gap-3"
          >
            <FontAwesomeIcon icon={faVideo} />
            <div>
              <p className="text-sm md:text-lg ">{configdata.companyName}</p>
            </div>
          </div>
          <div
            onClick={() => handleClick(true, "haF8dzews1k")}
            className="cursor-pointer hover:scale-105 transition-all duration-300 bg-black rounded-xl py-2 px-4 border-white border-1 text-white flex items-center gap-3"
          >
            <FontAwesomeIcon icon={faVideo} />
            <div>
              <p className="text-sm md:text-lg ">Apa Kata Mereka?</p>
            </div>
          </div>
        </div>
        <div className="w-full p-0 flex items-center justify-center pt-0 md:pt-20 -mt-52 -mb-52 md:-mt-0 md:-mb-0 relative">
          {HeroImage()}
          <div className="w-full md:flex justify-center items-baseline gap-[83px] max-w-6xl absolute bottom-0 hidden">
            <div className="bg-black w-[35vw] rounded-t-[30.59px] h-[300px] px-4 pt-4">
              <div
                style={{ backgroundImage: `url(${configdata.image2.src})` }}
                className="w-full h-full rounded-t-3xl bg-cover"
              ></div>
            </div>
            <div className="bg-black w-[35vw] rounded-t-[30.59px] h-[400px] px-4 pt-4">
              <div
                style={{ backgroundImage: `url(${configdata.image1.src})` }}
                className="w-full h-full rounded-t-3xl bg-cover"
              ></div>
            </div>
            <div className="bg-black w-[35vw] rounded-t-[30.59px] h-[350px] px-4 pt-4">
              <div
                style={{ backgroundImage: `url(${configdata.image3.src})` }}
                className="w-full h-full rounded-t-3xl bg-cover"
              ></div>
            </div>
          </div>
          <div className="w-full flex justify-center items-baseline gap-[20px] max-w-6xl absolute bottom-52 md:hidden">
            <div className="bg-black w-[35vw] rounded-t-2xl h-[100px] px-1.5 pt-1.5">
              <div
                style={{ backgroundImage: `url(${configdata.image2.src})` }}
                className="w-full h-full rounded-t-xl bg-cover"
              ></div>
            </div>
            <div className="bg-black w-[35vw] rounded-t-2xl h-[150px] px-1.5 pt-1.5">
              <div
                style={{ backgroundImage: `url(${configdata.image1.src})` }}
                className="w-full h-full rounded-t-xl bg-cover"
              ></div>
            </div>
            <div className="bg-black w-[35vw] rounded-t-2xl h-[130px] px-1.5 pt-1.5">
              <div
                style={{ backgroundImage: `url(${configdata.image3.src})` }}
                className="w-full h-full rounded-t-xl bg-cover"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ visibility: open ? "" : "hidden" }}
        className="h-screen w-full bg-black fixed top-0 bottom-0 z-[500] bg-opacity-40 transition-all flex items-center justify-center px-5"
      >
        <div
          className={`relative md:w-[50rem] h-auto w-full bg-red rounded-xl md:rounded-lg bg-white transition-all duration-300 z-[1000] p-4 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${link}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="w-full flex justify-end mt-5">
            <button
              onClick={() => setOpen(false)}
              className="py-2 px-8 rounded-lg bg-rose-500 text-white text-md"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlyerHero;
