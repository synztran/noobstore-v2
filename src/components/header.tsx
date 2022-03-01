import React from "react";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { User } from "@banhmi/icon/outline";
import { Button } from "@moai/core";

export default function Header(): JSX.Element {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <a className="mr-5 ">First Link</a>
          <a className="mr-5 ">Second Link</a>
          <a className="mr-5 ">Third Link</a>
          <a className="">Fourth Link</a>
        </nav>
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <Image
            className={styles.imgLogo}
            src="/logo.png"
            alt="Noobstore Logo"
            width={150}
            height={150}
          />
        </a>
        <div className="transition-all hover:text-blue-200 lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Button size={Button.sizes.largeIcon} icon={User} iconLabel="User">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
}
