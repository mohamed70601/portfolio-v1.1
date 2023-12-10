<section className="h-screen">
  <div className="grid grid-cols-1 lg:grid-cols-12 my-4 md:mb-20">
    <div className="col-span-7 place-self-center text-center sm:text-left md:py-15 lg:py-10">
      <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold ">
        <span className="text-trasnparent bg-clip-text py-3 ">
          Mohamed Tchoketch{" "}
        </span>
        <br />
        <TypeAnimation
          sequence={[
            "Web Developer",
            1000,
            "Learner",
            1000,
            "Challenger",
            1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>
      <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6 md:py-4">
        Shaping the digital realm with lines of logic and creativity.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center">
        {/* <button className="px-6 py-3 w-full sm:w-[300] bg-white text-black mr-4 hover:bg-neutral-300">
              Contact me
            </button>
            <button className="px-6 py-3 w-full sm:w-[300] bg-transparent text-white hover:bg-stone-400 border border-white">
              Download CV
            </button> */}
        <Link
          className="px-6 py-3 flex items-center sm:w-[250] w-full bg-white text-black mr-4 hover:bg-neutral-300"
          href="#contact"
        >
          Contact me
        </Link>
        <a
          className="px-6 py-3 flex items-center sm:w-[250] w-full bg-transparent text-white hover:bg-stone-400 border border-white"
          href="/files/CV.pdf"
          download
        >
          Download CV
        </a>
      </div>
    </div>
    <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
      <div className="w-[250px] h-[250px] lg:w-[500px] lg:[500px] relative">
        <Image
          src="/images/202306-NEA-DZ_Mohamed_Tchoketch.jpg"
          alt="portrait picture"
          className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-4 border-stone-400"
          width={400}
          height={400}
          priority={true}
        />
      </div>
    </div>
  </div>
</section>;
