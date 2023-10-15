import { TerminalIcon, OfficeBuildingIcon } from "@heroicons/react/solid";
import React from "react";
import { experiences } from "../data";

export default function Experiences() {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <OfficeBuildingIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
           Experiences
          </h1>
        </div>
        <div className="flex flex-col m-4">
          {experiences.map((experience) => (
           <div className="p-4 md:w-1/2 w-full">
           <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
            <div className="flex flex-row">
             {/* <TerminalIcon className="block w-8 text-gray-500 mb-4" /> */}
             <img
                 alt="testimonial"
                 src={experience.logo}
                 className="w-16"
               />
               <span className="flex-grow flex flex-col pl-4">
                 <span className="title-font font-medium text-white">
                   {experience.role}
                 </span>
                 <span className="text-gray-500 text-sm uppercase">
                   {experience.company}
                 </span>
                 <p className="leading-relaxed mb-6">{experience.responsibilities}</p>
               </span>
               </div>
           
           </div>
         </div>
          ))}
        </div>
      </div>
    </section>
  );
}