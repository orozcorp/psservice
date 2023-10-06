"use client";
import { useState } from "react";
import EspDataCenter from "./EspDataCenter";
import React from "react";

export default function EspReactive({ objTrans }) {
  const { dataCenter, aireAcondicionado, sistemas, monitoreo, hero } = objTrans;
  const [active, setActive] = useState("");
  return (
    <>
      <div
        className={`flex items-center w-full p-10 lg:p-0 ${
          active === "" && "lg:w-3/4 xl:w-1/2"
        }`}
      >
        <div className="flex flex-row flex-wrap w-full justify-center md:justify-start ">
          <EspDataCenter
            title={dataCenter.title}
            text={dataCenter.text}
            active={{ active, setActive }}
          />
          {active !== "dataCenter" && (
            <div className="text-[#324BA6] dark:text-[#fff] flex flex-col md:flex-row flex-nowrap md:flex-wrap justify-center items-center md:justify-start px-0 md:px-16 text-left mt-16 md:mt-0 md:text-left mw-full max-w-2xl">
              <div>
                <h2 className="text-3xl md:text-5xl  font-bold py-2">
                  {hero.title}
                </h2>
                <p className="text-2xl font-bold mb-8">{hero.subtitle}</p>
                <p className="text-lg font-bold">{hero.text}</p>
              </div>
              <div
                className="flex flex-row flex-wrap mt-16 w-full gap-16 justify-center md:justify-start"
                style={{ alignSelf: "end" }}
              >
                <div className="h-44 w-60 border rounded" />
                <div className="flex flex-col flex-nowrap gap-2">
                  <div className="h-20 w-60 border rounded" />
                  <div className="h-20 w-60 border rounded" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
