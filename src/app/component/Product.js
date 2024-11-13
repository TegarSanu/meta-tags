import { faAngleRight, faCircle } from "@fortawesome/free-solid-svg-icons";
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
    title: `${configdata.companyName} School`,
    type: "Materi",
    name: `${configdata.companyName} School`,
    url: "",
    materi: "/1-Sekolah Negeri-BNI-2024.pdf",
    materi2: "/1-Sekolah-BNI-2024.pdf",
  },
  {
    title: `${configdata.companyName} University`,
    type: "Materi",
    name: `${configdata.companyName} University`,
    url: "https://app.stg.solusinegeri.com/UNTIRTA/autologin/001/1234",
    materi: "/2-Universitas-BNI-2024.pdf",
  },
  {
    title: `${configdata.companyName} Company`,
    type: "Materi",
    name: `${configdata.companyName} Company`,
    url: "https://app.stg.solusinegeri.com/HKR/autologin/hkrdummy/1234",
    materi: "/3-Perusahaan-BNI-2024.pdf",
  },
  {
    title: `${configdata.companyName} General Membership`,
    type: "Materi",
    name: `${configdata.companyName} General Membership`,
    url: "https://app.stg.solusinegeri.com/HSI/autologin/dummyhsi/1234",
    materi: "/5-Membership-BNI-2024.pdf",
  },
];

const FlyerProduct = () => {
  return (
    <section
      id="blog"
      className="w-full max-w-6xl flex mx-auto flex-col text-black mt-16 z-10 px-7 md:px-0 md:pt-20 pt-10"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <div>
          <p className="text-2xl md:text-5xl text-black font-bold">
            Materi BNI Smart
          </p>
          <button
            onClick={() => {
              window.open(
                "https://api.katalis.info/main_a/general/psp_mobile?username=bni@smartschool.com&password=bni123"
              );
            }}
            style={{ backgroundColor: configdata.color1 }}
            className="px-5 py-2 rounded-full text-white flex items-center gap-3 text-sm mt-5 cursor-pointer"
          >
            Demo Apps <FontAwesomeIcon icon={faAngleRight} />
          </button>
          <div className="w-full relative flex items-center justify-center">
            <div className="w-56 mt-24">{ProductCard()}</div>
            <div
              style={{ backgroundImage: `url(${configdata.image1.src})` }}
              className="w-72 h-80 bg-white rounded-2xl -ml-32 p-5 bg-cover"
            ></div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="w-full p-5">
            {materi.map((res, i) => {
              return (
                <div
                  key={i}
                  className="mb-10 flex items-center justify-between"
                >
                  <div className="w-[70%]">
                    <p className="text-xs text-gray-400 ">{res.name}</p>
                    <p className=" text-xl">{res.title}</p>
                    <p
                      style={{ color: configdata.color1 }}
                      className="mt-5 cursor-pointer text-xs transition-all duration-300 hover:opacity-60 flex gap-2 items-center"
                      onClick={() => window.open(res.materi, "_blank")}
                    >
                      {res.materi2 && (
                        <FontAwesomeIcon icon={faCircle} width={5} />
                      )}{" "}
                      Continue reading <FontAwesomeIcon icon={faAngleRight} />
                    </p>
                    {res.materi2 && (
                      <p
                        style={{ color: configdata.color1 }}
                        className="mt-1 cursor-pointer text-xs transition-all duration-300 hover:opacity-60 flex gap-2 items-center"
                        onClick={() => window.open(res.materi2, "_blank")}
                      >
                        <FontAwesomeIcon icon={faCircle} width={5} /> Continue
                        reading <FontAwesomeIcon icon={faAngleRight} />
                      </p>
                    )}
                  </div>
                  <button
                    onClick={() => window.open(res.url)}
                    className="py-2 px-4 md:px-8 rounded-md text-xs md:text-sm text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
                    style={{ backgroundColor: configdata.color1 }}
                  >
                    Try Me
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <section
        id="support"
        style={{ backgroundColor: configdata.color1 }}
        className="w-full rounded-2xl mt-20 nd:mt-40 grid grid-cols-1 md:grid-cols-2 "
      >
        <div className="text-white p-5 md:p-10">
          <p className="text-2xl md:text-4xl font-bold">
            Get Started with Your Smart Apps Journey!
          </p>
          <p className="text-xs md:text-base mt-4">
            Discover the Latest Smart Home Innovations
          </p>
          <div className="flex gap-5 mt-16">
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
        </div>
        <div className="relative">
          <div className="w-full flex items-baseline justify-center gap-[-10px] h-[300px] md:h-[450px]">
            <div className="bg-black md:w-[256px] w-[156px] rounded-t-[20px] md:rounded-t-[30px] md:h-[300px] h-[150px] top-[185px] rotate-[-9.4deg] mt-20 md:px-4 px-2 md:pt-4 pt-2 z-10">
              <div
                style={{ backgroundImage: `url(${configdata.image2.src})` }}
                className="w-full h-full rounded-t-2xl bg-cover"
              ></div>
            </div>
            <div className="bg-black md:w-[270px] w-[156px] rounded-t-[20px] md:rounded-t-[30px] md:h-[420px] h-[250px] top-[44px] rotate-[6.8deg] mt-20 md:px-4 px-2 md:pt-4 pt-2 z-30">
              <div
                style={{ backgroundImage: `url(${configdata.image1.src})` }}
                className="w-full h-full rounded-t-2xl bg-cover"
              ></div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{ backgroundColor: "white" }}
        className="w-full h-20 flex z-50"
      ></div>
    </section>
  );
};

export default FlyerProduct;
