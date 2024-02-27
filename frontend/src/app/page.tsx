"use client";
import Image from "next/image";
import React from "react";
import HiComponent from "./components/HiComponent";

const Home: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <HiComponent greeting="Hey everyone"/>
            <Image src={"/logo.svg"} alt="Logo" width={500} height={500} />
        </main>
    );
};

export default Home;
