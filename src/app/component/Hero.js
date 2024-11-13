"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "@/config/api";
import bgGlowing from "@/images/background/bg-glowing-flyer.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { HeroImage } from "./CustomColorImage";
import { configdata } from "@/config/global";

const FlyerHero = () => {
  const param = useParams();

  return (
    <section id="home" className="w-full bg-white">
      <div className="w-full bg-gradient-to-t from-gray-50 to-white flex items-center pt-52 flex-col gap-5 px-7 md:px-0">
        <p className="text-2xl md:text-5xl text-center text-black font-bold max-w-4xl">
          Saatnya GoDigital bersama {configdata.companyName}, Jadikan sekolah
          lebih maju dengan teknologi
        </p>
        <p className="text-gray-500 text-center md:text-medium text-xs">
          Selamatkan Waktu, Hemat Energi, Tingkatkan Efisiensi,
          <br />
          Teknologi Inovatif untuk Operasional Sekolah yang lebih mudah
        </p>
        <div className="w-full pt-5 md:pt-16 flex items-center justify-center gap-5">
          <div className="bg-black rounded-xl py-2 px-4 border-white border-1 text-white flex items-center gap-3">
            <FontAwesomeIcon icon={faCircle} />
            <div>
              <p className="text-[10px] md:text-xs">Download on the</p>
              <p className="text-sm md:text-xl font-bold">Apps Store</p>
            </div>
          </div>
          <div className="bg-black rounded-xl py-2 px-4 border-white border-1 text-white flex items-center gap-3">
            <FontAwesomeIcon icon={faCircle} />
            <div>
              <p className="text-[10px] md:text-xs">GET IT ON</p>
              <p className="text-sm md:text-xl font-bold">Google Play</p>
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
    </section>
  );
};

export default FlyerHero;
