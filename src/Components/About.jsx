import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-blue-500 min-h-96 bg-cover bg-left bg-no-repeat "
    style={{
      backgroundImage: `url('https://www.schoolnews.co.nz/wp-content/uploads/2017/12/AdobeStock_137056916.jpeg')`,
    }}>
        <div className="flex justify-start px-10">
        <h2 className="text-4xl font-bold text-black ">Hi!</h2>
        <p className="text-gray-700 font-bold text-2xl px-2 py-1">
          I am Krish Dambir
        </p>
        </div>
    </section>
  );
};

export default About;
