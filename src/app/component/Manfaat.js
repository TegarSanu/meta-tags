import {
  faAnglesRight,
  faCaretRight,
  faPaperclip,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const FlyerManfaat = () => {
  return (
    <div className="w-full max-w-6xl flex mx-auto flex-col items-center justify-center text-black mt-16 z-10 px-7 md:px-0 pt-10 md:pt-20 ">
      <div className="text-center mt-10">
        <p className="text-2xl md:text-5xl text-black font-bold">
          <span className="font-light">Manfaat Menggunakan</span> <br />{" "}
          Platform Sekolah Pintar
        </p>
        <p className="text-gray-500 mt-4 text-xs md:text-base">
          Bersiaplah untuk transisi yang mulus menuju masa depan <br />{" "}
          pendidikan yang lebih canggih, lebih cerdas, dan lebih terkoneksi!
        </p>
      </div>
      <div className="w-full flex gap-5 mt-10 md:flex-row flex-col">
        <div className="w-full md:w-[40%] bg-black rounded-xl text-white p-5">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPaperclip} />
            <p className="text-xs md:text-base">
              Transparansi, Kontrol, dan Kepercayaan orang tua
            </p>
          </div>
          <Image alt="" />
        </div>
        <div className="w-full md:w-[60%] bg-black rounded-xl text-white p-5">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faStar} />
            <p className="text-xs md:text-base">
              Transakasi dan data absensi otomatis
            </p>
          </div>
          <Image alt="" />
        </div>
      </div>
      <div className="w-full mt-5">
        <div className="w-full bg-black rounded-xl text-white p-5">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPaperclip} />
            <p className="text-xs md:text-base">
              Transparansi, Kontrol, dan Kepercayaan orang tua
            </p>
          </div>
          <Image alt="" />
        </div>
      </div>
    </div>
  );
};

export default FlyerManfaat;
