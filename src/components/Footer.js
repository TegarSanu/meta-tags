"use client";

import React from "react";
import logo from "@/images/tki-dark.svg";
import youtube from "@/images/socialmedia/youtube.svg";
import instagram from "@/images/socialmedia/instagram.svg";
import linkedin from "@/images/socialmedia/linkedin.svg";
import { motion } from "framer-motion";
import { Tooltip } from "@nextui-org/react";
import { configdata } from "@/config/global";

const Footer = () => {
  const socialMedia = [
    {
      icon: youtube,
      url: "https://www.youtube.com/@teknologikartuindonesia3553",
      title: "Youtube",
    },
    {
      icon: instagram,
      url: "https://www.instagram.com/solusinegeri",
      title: "Instagram",
    },
    {
      icon: linkedin,
      url: "https://www.linkedin.com/company/solusinegeri/",
      title: "LinkedIn",
    },
  ];
  return (
    <div className="w-full bg-gray-800 mt-32">
      <div className="container w-full max-w-6xl flex flex-col mx-auto justify-center items-center pt-20 pb-10 text-sm px-7">
        <div className="w-full  gap-4">
          <div className="w-full flex items-center  justify-center flex-col">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              alt=""
              src={configdata.logo.src}
              className="w-32"
            />
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              className="mt-3 text-gray-200"
            >
              Yuk, mulai petualangan digitalmu sekarang!
            </motion.p>
          </div>
          {/* <div className="text-gray-200 w-full flex items-center md:justify-normal justify-center flex-col text-center">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="text-xl font-semibold"
            >
              No Telepon
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              0815-4255-3779
            </motion.p>
          </div>
          <div className="text-gray-200 w-full flex items-center md:justify-normal justify-center flex-col text-center">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="text-xl font-semibold"
            >
              Lokasi
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
            >
              Jl. Nakula Sadewa Raya No.17B, Dukuh,Kec. Sidomukti, Kota
              Salatiga, Jawa Tengah 50722
            </motion.p>
          </div>
          <div className="w-full flex items-center md:justify-normal justify-center flex-col">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 1 }}
              viewport={{ once: true, amount: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.2,
              }}
              className="text-xl font-semibold"
            >
              Follow Us
            </motion.p>
            <div className="flex items-center justify-center mt-3">
              <div className="flex gap-5">
                {socialMedia.map((res, i) => {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: parseFloat(`0.${i + 1}`),
                      }}
                    >
                      <Tooltip
                        placement="bottom"
                        key={i}
                        content={
                          <div className="bg-transparent text-white text-md">
                            {res.title}
                          </div>
                        }
                        className="bg-transparent rounded-sm shadow-none"
                      >
                        <div
                          onClick={() => {
                            window.open(`${res.url}`);
                          }}
                          className="md:w-14 w-12 rounded-full bg-white bg-opacity-20 p-2 flex items-center justify-center cursor-pointer transition-all hover:scale-105 duration-300 hover:shadow-lg"
                        >
                          <img src={res.icon.src} />
                        </div>
                      </Tooltip>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div> */}
        </div>
        <div className="mt-20 w-full border-t-1 flex items-center justify-center container">
          <p className="text-gray-400 mt-4">
            {configdata.companyName} 2024. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
