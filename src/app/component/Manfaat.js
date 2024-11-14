import { configdata } from "@/config/global";
import {
  faAnglesRight,
  faCaretRight,
  faMobilePhone,
  faPaperclip,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const FlyerManfaat = () => {
  return (
    <section
      id="features"
      className="w-full max-w-6xl flex mx-auto flex-col items-center justify-center text-black mt-16 z-10 px-7 md:px-0 pt-10 md:pt-20 "
    >
      <div className="text-center mt-10">
        <p className="text-2xl md:text-5xl text-black font-bold">
          <span className="font-light">Manfaat Menggunakan</span> <br />{" "}
          {configdata.companyName}
        </p>
        <p className="text-gray-500 mt-4 text-xs md:text-base">
          Bersiaplah Untuk Transisi Yang Mulus Menuju Masa Depan <br />{" "}
          Pendidikan Yang Lebih Canggih, Lebih Cerdas, Dan Lebih Terkoneksi!
        </p>
      </div>
      <div className="w-full flex gap-5 mt-10 md:flex-row flex-col">
        <div className="w-full md:w-[45%] bg-black rounded-xl text-white p-5">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faPaperclip} />
            <p className="text-xs md:text-base">
              Meningkatkan Transparansi, Kontrol, dan Kepercayaan orang tua
            </p>
          </div>
          <div
            style={{ backgroundImage: `url(${configdata.manfaatImage1.src})` }}
            className="w-full rounded-2xl h-40 md:h-64 mt-5 bg-cover"
          ></div>
        </div>
        <div className="w-full md:w-[55%] bg-black rounded-xl text-white p-5">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faStar} />
            <p className="text-xs md:text-base">
              Rekonsiliasi Transakasi dan Data Absensi Otomatis
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <div
              style={{
                backgroundImage: `url(${configdata.manfaatImage2.src})`,
              }}
              className="w-full rounded-2xl h-40 md:h-64 bg-cover"
            ></div>
          </div>
        </div>
      </div>
      <div className="w-full mt-5">
        <div className="w-full bg-black rounded-xl text-white p-5">
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faMobilePhone} />
            <p className="text-xs md:text-base">
              Menciptakan Ekosistem Cashless di Lingkungan Sekolah
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <div
              style={{
                backgroundImage: `url(${configdata.manfaatImage3.src})`,
              }}
              className="w-full rounded-2xl h-32 md:h-96 bg-cover"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlyerManfaat;
