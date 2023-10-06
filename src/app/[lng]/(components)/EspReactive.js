"use client";
import { useState } from "react";
import EspDataCenter from "./EspDataCenter";
import EspSistemasElectricos from "./EspSistemasElectricos";
import EspAire from "./EspAire";
import EspMonitoreo from "./EspMonitoreo";
export default function EspReactive({ objTrans }) {
  const { dataCenter, aireAcondicionado, sistemas, monitoreo, hero } = objTrans;
  const [active, setActive] = useState("");
  return (
    <>
      <div
        className={`flex items-center w-full p-10 lg:p-0 ${
          active === "dataCenter" ? "" : "lg:w-3/4 xl:w-1/2"
        }`}
      >
        <div className="flex flex-row flex-wrap w-full justify-start lg:justify-start ">
          <EspDataCenter
            title={dataCenter.title}
            text={dataCenter.text}
            active={{ active, setActive }}
          />
          {active !== "dataCenter" && (
            <div
              className={`text-[#324BA6] text-left dark:text-[#fff] flex flex-col-reverse lg:flex-row flex-nowrap lg:flex-wrap justify-center items-center lg:justify-start px-0 lg:px-16  mt-4 lg:mt-0  w-full max-w-3xl`}
            >
              {active === "" && (
                <div className="mb-20 lg:mb-0">
                  <h2 className="text-3xl lg:text-5xl  font-bold py-2">
                    {hero.title}
                  </h2>
                  <p className="text-2xl font-bold mb-8">{hero.subtitle}</p>
                  <p className="text-lg font-bold">{hero.text}</p>
                </div>
              )}
              <div
                className={`flex flex-row flex-wrap w-full  gap-4 lg:gap-8 mb-10 lg:mb-0 ${
                  active !== "dataCenter" || active !== ""
                    ? "duration-1000 items-end"
                    : "mt-16 gap-16 duration-1000 justify-center  lg:justify-start"
                } `}
                style={{ alignSelf: "end" }}
              >
                <EspSistemasElectricos
                  title={sistemas.title}
                  text={sistemas.text}
                  active={{ active, setActive }}
                />
                <div
                  className={`flex flex-col flex-nowrap gap-2  ${
                    active === "SistemasElectricos" &&
                    "ml-0 lg:ml-4 self-end duration-1000"
                  }`}
                >
                  {active !== "Monitoreo" && (
                    <EspAire
                      title={aireAcondicionado.title}
                      text={aireAcondicionado.text}
                      active={{ active, setActive }}
                    />
                  )}
                  {active !== "AireAcondicionado" && (
                    <EspMonitoreo
                      title={monitoreo.title}
                      text={monitoreo.text}
                      active={{ active, setActive }}
                    />
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
