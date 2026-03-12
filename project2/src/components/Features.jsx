import React from "react";

const features = [
  {
    title: "Layered security",
    desc: "We ensure the safety of every unit we provide."
  },
  {
    title: "Quality control",
    desc: "Every unit is checked carefully for every detail."
  },
  {
    title: "Customer service",
    desc: "Our support team is available 24/7."
  },
  {
    title: "Maintenance book",
    desc: "Guidebook to ensure maximum care."
  },
  {
    title: "Delivered safely",
    desc: "Every unit arrives safely and quickly."
  },
  {
    title: "Artificial intelligence",
    desc: "Control and monitor units from your phone."
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          We offer quality,
          <span className="text-gray-400">
            {" "}with the best materials and service
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-zinc-400 bg-white rounded-xl overflow-hidden">

          {features.map((item, index) => (
            <div
              key={index}
              className="p-8 border border-zinc-400 hover:shadow-lg transition"
            >
              <h2 className="text-xl">❇️</h2>
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Features;
