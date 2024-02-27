"use client";
import Image from "next/image";
import React from "react";
import Title from "./components/Title";
import HiComponent from "./components/HiComponent";

const Home: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <HiComponent greeting="Here comes the Sun *Doo Doo Doo*" />
            <Image src={"/logo.svg"} alt="Logo" width={500} height={500} />
            <Title title="List your space or find unique stays!" />
        </main>
    );
};

export default Home;
