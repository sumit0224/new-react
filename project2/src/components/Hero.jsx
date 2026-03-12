import React from "react";

const Hero = () => {
  return (
    <section className="w-full px-6 py-8">

      <div
        className="relative w-full h-[520px] rounded-[40px] overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/download.png')" }}
      >

        {/* overlay */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* content */}
        <div className="relative z-10 flex h-full items-center justify-between px-16">

          {/* LEFT TEXT */}
          <div className="text-white max-w-xl">

            <p className="mb-4 text-sm opacity-80">
              #1 Energy provider in the world
            </p>

            <h1 className="text-[80px] leading-[85px] font-light">
              New Energy
              <br />
              for the Future
            </h1>

            <div className="flex gap-12 mt-8 text-sm">

              <button className="border-b border-white pb-1 hover:opacity-70">
                Get in touch ↗
              </button>

              <button className="border-b border-white pb-1 hover:opacity-70">
                Our services ↗
              </button>

            </div>
          </div>

          {/* GLASS CARD */}
          <div className="relative">

            <div className="w-[220px] p-4 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 text-white">

              <img
                src="/card.avif"
                alt="wind"
                className="w-full h-[120px] object-cover rounded-xl"
              />

             <div className="flex justify-between items-center">
              <div className=" w-8 h-8 mt-4 rounded-full bg-white/30 flex items-center justify-center">
                ↗
              </div>
                 <p className="text-sm mt-4">
                Discover Our
                <br />
                Recent Project
              </p>

             </div>

            </div>

          </div>

        </div>

        {/* BOTTOM STATS */}
        <div className=" absolute bottom-0 right-0 w-[00px]">

          <div className="flex gap-16 bg-white px-16 py-8 rounded-[28px] shadow-lg">

            <div className="text-center">
              <h3 className="text-3xl font-semibold">6 mil</h3>
              <p className="text-sm text-gray-500">
                The company's annual net income
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-semibold">315</h3>
              <p className="text-sm text-gray-500">
                Projects completed worldwide
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-3xl font-semibold">120K</h3>
              <p className="text-sm text-gray-500">
                Employees work in all parts of the world
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;