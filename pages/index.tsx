import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@moai/core";
import styles from "../styles/Home.module.css";
import SlideBar from "../src/components/slidebar";
import Header from "../src/components/header";
import Footer from "../src/components/footer";

const Home: NextPage = () => {
  const [isShow, setShow] = useState<boolean>(false);
  return (
    <div className={styles.container}>
      <Head>
        <title>Noob store</title>
      </Head>
      <Header />
      <SlideBar postion="right" isShow={isShow} child="this is sample text" />
      <div className="w-screen h-full"></div>
      <Footer />
    </div>
  );
};

export default Home;
