import {
  faAngleRight,
  faAnglesRight,
  faCaretRight,
  faCircle,
  faCircleDot,
  faDotCircle,
  faListDots,
  faRadio,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import card from "@/images/card-spiral.svg";
import phone2 from "@/images/phone2.svg";
import phone3 from "@/images/phone3.svg";
import { configdata } from "@/config/global";
import { ProductCard, productCard } from "./CustomColorImage";

const materi = [
  {
    title: "Materi BNI Smart School",
    type: "Materi",
    name: "BNI Smart School",
  },
  {
    title: "Materi BNI Smart University",
    type: "Materi",
    name: "BNI Smart University",
  },
  {
    title: "Materi BNI Smart Company",
    type: "Materi",
    name: "BNI Smart Company",
  },
  {
    title: "Materi BNI General",
    type: "Materi",
    name: "BNI General",
  },
];

const FlyerProduct = () => {
  return (
    <div className="w-full max-w-6xl flex mx-auto flex-col text-black mt-16 z-10 px-7 md:px-0 pt-20 ">
      <div className="w-full grid grid-cols-2 gap-5 mt-10">
        <div>
          <p className="text-5xl text-black font-bold">Materi BNI Smart</p>
          <button
            style={{ backgroundColor: configdata.color1 }}
            className="px-5 py-2 rounded-full text-white flex items-center gap-3 text-sm mt-5"
          >
            Demo Apps <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div className="w-full relative flex items-center justify-center">
            <div className="w-52 mt-20">{ProductCard()}</div>
            <div className="w-72 h-60 bg-white rounded-2xl border -ml-32 p-5"></div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full p-5">
            {materi.map((res, i) => {
              return (
                <div className="mb-10 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-400 ">
                      {res.type} <FontAwesomeIcon icon={faCircle} width={5} />{" "}
                      {res.name}
                    </p>
                    <p className=" text-xl">{res.title}</p>
                    <p
                      style={{ color: configdata.color1 }}
                      className="mt-5 cursor-pointer text-xs"
                    >
                      Continue reading <FontAwesomeIcon icon={faAngleRight} />
                    </p>
                  </div>
                  <div className="w-20 h-20 bg-gray-300 rounded-xl"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: configdata.color1 }}
        className="w-full rounded-2xl mt-40 grid grid-cols-2"
      >
        <div className="text-white p-10">
          <p className="text-4xl font-bold">
            Get Started with Your Smart Apps Journey!
          </p>
          <p className="mt-4">Discover the Latest Smart Home Innovations</p>
          <div className="flex gap-5 mt-16">
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
        </div>
        <div className="relative">
          <div className="flex">
            <Image alt="" src={phone2} className="flex z-20" />
            <Image alt="" src={phone3} className="absolute z-0 bottom-0" />
          </div>
          <div className="w-full flex items-center justify-center gap-[83px]">
            <div
              style={{ backgroundColor: configdata.color1 }}
              className="w-[270px] rounded-t-[30.59px] h-[420px] top-[44px] rotate-[6.8deg] absolute right-[60px] z-30"
            ></div>
            <div
              style={{ backgroundColor: configdata.color1 }}
              className="w-[256px] rounded-t-[30.59px] h-[300px] top-[185px] rotate-[-9.4deg] absolute right-[280px] z-10"
            ></div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "white" }}
        className="w-full h-20 flex z-50"
      ></div>
    </div>
  );
};

export default FlyerProduct;
