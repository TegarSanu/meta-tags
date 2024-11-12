"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "@/config/api";
import Footer from "@/components/Footer";
import Image from "next/image";
import bgGlowing from "@/images/background/bg-glowing-flyer.svg";
import FlyerNavbar from "@/app/component/Navbar";
import image from "@/images/flyer-psp.svg";
import FlyerProduct from "@/app/component/Product";
import FlyerHero from "@/app/component/Hero";
import FlyerManfaat from "@/app/component/Manfaat";

const FlyerType = () => {
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
    <div className="w-full min-h-screen bg-white">
      <FlyerNavbar />
      <FlyerHero />
      <FlyerManfaat />
      <FlyerProduct />
      <Footer />
    </div>
  );
};

export default FlyerType;
