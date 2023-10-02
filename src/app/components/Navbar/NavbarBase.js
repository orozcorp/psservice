"use client";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarDisplayed from "./NavbarDisplayed";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { rgbDataURL } from "../helpers/blur";
import Image from "next/image";
export const NavbarBase = ({ t, lng }) => {
  const size = useWindowSize();
  const width = size?.width ?? 0;
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  return (
    <>
      <nav className="flex flex-row items-center justify-center bg-[#23283C] dark:bg-[#0A2473] ">
        <div className="w-11/12 flex flex-row items-center h-20 justify-between bg-opacity-0">
          <div className="flex justify-between items-center content-center bg-opacity-0">
            <div className="flex bg-opacity-0">
              <div className="ml-6 flex space-x-8 bg-opacity-0">
                <div className="flex flex-row flex-wrap items-center justify-center gap-4">
                  <Image
                    src="https://psservicesavvy.s3.us-east-2.amazonaws.com/logosYLanding/LOGOPS.png"
                    width={170}
                    height={60}
                    blurDataURL={rgbDataURL(0, 0, 0)}
                    loading="lazy"
                    alt="PS service"
                  />
                </div>
              </div>
            </div>
          </div>
          {width > 1000 && (
            <div className="flex flex-row flex-wrap justify-end gap-8 items-center content-center text-white mr-4 w-full">
              <Link href={`${lng}/`}>{t("Inicio")}</Link>
              <Link href={`${lng}/#Especializacion`}>
                {t("Especialidades")}
              </Link>
              <Link href={`${lng}/#Servicios`}>{t("Servicios")}</Link>
              <Link href={`${lng}/#Clientes`}>{t("Clientes")}</Link>
              <Link href={`${lng}/#Aliados`}>{t("Aliados")}</Link>
              <Link href={`${lng}/Bolsa`}>{t("Bolsa")}</Link>

              <ThemeSwitcher />
            </div>
          )}
          {width < 1000 && (
            <div className="flex justify-between items-center content-center mr-4">
              <div className="flex">
                <div className="ml-6 flex space-x-8">
                  <AiOutlineMenu
                    style={{
                      width: "20px",
                      height: "20px",
                      color: "#fff",
                    }}
                    onClick={() => setShowMenu(!showMenu)}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
      {showMenu && (
        <NavbarDisplayed
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          t={t}
          // session={session}
        />
      )}
    </>
  );
};
