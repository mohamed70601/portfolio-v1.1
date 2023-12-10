"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center md:h-screen">
      <div className="flex flex-col md:flex-row p-8 md:justify-start md:space-x-8 items-center">
        {/* Left div */}
        <div className="flex flex-col md:mr-4 p-4 text-center md:text-left">
          <h1 className="text-white max-w-2xl lg:text-6xl text-4xl font-extrabold py-11">
            <span className="inline-block mb-1">Mohamed Tchoketch</span>
            <br />
            <TypeAnimation
              sequence={[
                "Web Developer",
                1000,
                "Learner",
                1000,
                "Thinker",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-10 md:py-2">
            Shaping the digital realm with lines of logic and creativity.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              className="px-6 py-3 flex items-center sm:w-fit w-full bg-white text-black hover:bg-neutral-300 justify-center"
              href="#contact"
            >
              Contact me
            </Link>
            <a
              className="px-6 py-3 flex items-center sm:w-fit w-full bg-transparent text-white hover:bg-stone-400 border border-white justify-center"
              href="/files/CV.pdf"
              download
            >
              Download CV
            </a>
          </div>
        </div>
        {/* Right div */}
        <div className="shrink-0">
          <Image
            src="/images/202306-NEA-DZ_Mohamed_Tchoketch.jpg"
            alt="portrait picture"
            className="border-4 object-cover w-90 border-stone-400"
            width={400}
            height={400}
            priority={true}
          />
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-36" id="about"></div>
    </section>
  );
};

export default HeroSection;
