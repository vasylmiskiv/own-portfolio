"use client";

import React, { useState } from "react";
import { EXPERIENCE } from "../constants/constants";

export default function Tabs() {
  const [openTab, setOpenTab] = useState("Inquire / EarthLink.com");

  return (
    <div className="flex flex-col items-start text-left xl:justify-center md:p-6 md:space-x-10 md:flex-row">
      <div className="container w-full md:w-2/5 xl:w-1/4">
        <ul className="overflow-x-auto flex flex-row text-left wrap space-x-4 md:flex-col md:space-x-0 md:space-y-4">
          {EXPERIENCE.map((tab) => (
            <li key={tab.organization}>
              <button
                onClick={() => setOpenTab(tab.organization)}
                className={`w-full text-left transition-all duration-200 ${
                  openTab === tab.organization
                    ? "bg-teal-500 font-semibold rounded-lg text-neutral-100 md:text-base"
                    : "hover:bg-slate-100  rounded-sm md:text-base"
                } inline-block px-2 py-2  rounded-sm text-gray-600 md:text-base`}
              >
                {tab.organization}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="container mt-8 w-full md:w-3/5 xl:w-1/2 md:mt-0">
        {EXPERIENCE.map((tab) => (
          <div
            key={tab.organization}
            className={tab.organization === openTab ? "block" : "hidden"}
          >
            <p>
              <span className="text-xl md:text-xl font-bold">{tab.role}</span>

              <span className="text-xl md:text-xl font-bold text-teal-500">
                {" @ "}
                {tab.organization}
              </span>
            </p>

            <p className="text-sm md:text-md mb-4">
              {`${tab.period},   ${tab.location}`}
            </p>
            <ul className="ml-4">
              {tab.description.map((point, idx) => (
                <li
                  className={`mb-[10px] text-base md:text-lg text-justify md:text-start list-disc dark:text-neutral-300`}
                  key={idx}
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
