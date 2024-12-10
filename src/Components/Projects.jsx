import React from "react";
import projectImage from './project1.png';
import projectImage2 from './Project2.png';
import projectImage3 from './project3.png';
import projectImage4 from './project4.png';
import projectImage5 from './project5.png';
import projectImage6 from './project6.png';
import projectImage7 from './project7.png';
import projectImage8 from './project8.png';
import projectImage9 from './project9.png';


const Projects = () => {
  return(
    <section id="projects" className="py-10 ">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-8">Projects</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">

      <div className="shadow p-4 max-h-80 flex flex-col bg-gray-200 rounded-lg">
        <img
          src={projectImage}
          alt="Project Image"
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="mt-4 flex flex-col items-center gap-3">
          <h3 className="text-2xl font-bold">Project 1</h3>
          <p className="text-lg font-light">Missile Man of India</p>
        </div>
      </div>

      <div className="shadow p-4 max-h-80 flex flex-col bg-gray-200 rounded-lg">
        <img
          src={projectImage2}
          alt="Project Image"
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="mt-4 flex flex-col items-center gap-3">
          <h3 className="text-2xl font-bold">Project 2</h3>
          <p className="text-lg font-light">Job Application Form</p>
        </div>
      </div>

      <div className="shadow p-4 max-h-80 flex flex-col bg-gray-200 rounded-lg">
        <img
          src={projectImage3}
          alt="Project Image"
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="mt-4 flex flex-col items-center gap-3">
          <h3 className="text-2xl font-bold">Project 3</h3>
          <p className="text-lg font-light">Parallax Website</p>
        </div>
      </div>

      <div className="shadow p-4 max-h-80 flex flex-col bg-gray-200 rounded-lg">
        <img
          src={projectImage4}
          alt="Project Image"
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="mt-4 flex flex-col items-center gap-3">
          <h3 className="text-2xl font-bold">Project 4</h3>
          <p className="text-lg font-light">Landing Page</p>
        </div>
      </div>

      <div className="shadow p-4 max-h-80 flex flex-col bg-gray-200 rounded-lg">
        <img
          src={projectImage5}
          alt="Project Image"
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="mt-4 flex flex-col items-center gap-3">
          <h3 className="text-2xl font-bold">Project 5</h3>
          <p className="text-lg font-light">Restaurant Website</p>
        </div>
      </div>

      <div className="shadow p-4 max-h-80 flex flex-col bg-gray-200 rounded-lg">
        <img
          src={projectImage6}
          alt="Project Image"
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="mt-4 flex flex-col items-center gap-3">
          <h3 className="text-2xl font-bold">Project 6</h3>
          <p className="text-lg font-light">Music Website</p>
        </div>
      </div>

      <div className="shadow p-4 max-h-80 flex flex-col bg-gray-200 rounded-lg">
        <img
          src={projectImage7}
          alt="Project Image"
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="mt-4 flex flex-col items-center gap-3">
          <h3 className="text-2xl font-bold">Project 7</h3>
          <p className="text-lg font-light">YouTube Clone</p>
        </div>
      </div>

      <div className="shadow p-4 max-h-80 flex flex-col bg-gray-200 rounded-lg">
        <img
          src={projectImage8}
          alt="Project Image"
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="mt-4 flex flex-col items-center gap-3">
          <h3 className="text-2xl font-bold">Project 8</h3>
          <p className="text-lg font-light">JavaScript Documentation</p>
        </div>
      </div>

      <div className="shadow p-4 max-h-80 flex flex-col bg-gray-200 rounded-lg">
        <img
          src={projectImage9}
          alt="Project Image"
          className="w-full h-40 object-cover rounded-t-lg"
        />
        <div className="mt-4 flex flex-col items-center gap-3">
          <h3 className="text-2xl font-bold">Project 9</h3>
          <p className="text-lg font-light">Blog Website</p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default Projects;
