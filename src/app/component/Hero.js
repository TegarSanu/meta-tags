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
  const [data, setData] = useState({});

  const getData = () => {
    axios
      .get(`api/flyer-lists?filters[name][$eq]=${param.type}`)
      .then((res) => {
        setData(res.data.data[0]);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full bg-white">
      <div className="w-full bg-gradient-to-t from-gray-50 to-white flex items-center pt-52 flex-col gap-5">
        <p className="text-5xl text-center text-black font-bold">
          Saatnya GoDigital bersama PSP, <br /> Jadikan sekolah lebih maju{" "}
          <br /> dengan teknologi
        </p>
        <p className="text-gray-500 text-center">
          Selamatkan Waktu, Hemat Energi, Tingkatkan Efisiensi,
          <br />
          Teknologi Inovatif untuk Operasional Sekolah yang lebih mudah
        </p>
        <div className="w-full pt-16 flex items-center justify-center gap-5">
          <div className="bg-black rounded-xl py-2 px-4 border-white border-1 text-white flex items-center gap-3">
            <FontAwesomeIcon icon={faCircle} />
            <div>
              <p className="text-xs">Download on the</p>
              <p className="text-xl font-bold">Apps Store</p>
            </div>
          </div>
          <div className="bg-black rounded-xl py-2 px-4 border-white border-1 text-white flex items-center gap-3">
            <FontAwesomeIcon icon={faCircle} />
            <div>
              <p className="text-xs">GET IT ON</p>
              <p className="text-xl font-bold">Google Play</p>
            </div>
          </div>
        </div>
        <div className="w-full p-0 flex items-center justify-center pt-20">
          {HeroImage()}
        </div>
        <div className="w-full flex items-center justify-center gap-[83px]">
          <div
            style={{ backgroundColor: configdata.color1 }}
            className="w-[290px] rounded-t-[30.59px] h-[320px] -mt-[360px]"
          ></div>
          <div
            style={{ backgroundColor: configdata.color1 }}
            className="w-[290px] rounded-t-[30.59px] h-[440px] -mt-[480px]"
          ></div>
          <div
            style={{ backgroundColor: configdata.color1 }}
            className="w-[290px] rounded-t-[30.59px] h-[390px] -mt-[430px]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FlyerHero;
