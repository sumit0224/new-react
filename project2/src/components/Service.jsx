import React from "react";

const services = [
  {
    id: "01",
    title: "Solar panels for home"
  },
  {
    id: "02",
    title: "Solar panels for industry"
  },
  {
    id: "03",
    title: "Solar panels for chargers"
  },
  {
    id: "04",
    title: "Wind power generator"
  }
];

const Services = () => {
  return (
    <section className="w-full py-20 bg-amber-50">

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-4xl font-semibold mb-6">
            Trusted service,{" "}
            <span className="text-gray-400">
              for your various needs
            </span>
          </h2>

          <button className="bg-green-500 text-white px-6 py-3 rounded-full mb-12 hover:bg-green-600 transition">
            Get in touch →
          </button>

          {/* SERVICE CARDS */}
          <div className="grid grid-cols-2 gap-6">

            {services.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl p-6 hover:shadow-lg transition"
              >
                <p className="text-gray-400 text-sm mb-2">
                  {item.id}
                </p>

                <h3 className="font-semibold mb-4">
                  {item.title}
                </h3>

                <p className="text-sm underline cursor-pointer">
                  View Details
                </p>
              </div>
            ))}

          </div>

        </div>

       
        <div>
          <img
            src="/social-worker.avif"
            alt="solar panel"
             className="w-full h-[500px] object-cover  rounded-2xl"
          />
        </div>

      </div>

    </section>
  );
};

export default Services;