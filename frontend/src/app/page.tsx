"use client";
import Image from "next/image";
import React from "react";
import Title from "./components/Title";
import Button from "./components/Button";

const Home: React.FC = () => {

    const handleClick = (): void => {
        alert("Welcome!");
    };
    

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <Image src={"/logo.svg"} alt="Logo" width={500} height={500} />
            <Title title="List your space or find unique stays!" />
            <Button label="Get Started" onClick={handleClick} />
        </main>
    );
};

export default Home;
