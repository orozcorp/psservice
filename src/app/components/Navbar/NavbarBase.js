"use client";
import { useState } from "react";
import useWindowSize from "../hooks/useWindowSize";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarDisplayed from "./NavbarDisplayed";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { rgbDataURL } from "../helpers/blur";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useSession, signOut } from "next-auth/react";
export const NavbarBase = ({ t, lng, i18n }) => {
  const size = useWindowSize();
  const width = size?.width ?? 0;
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const [showEspecialidadesDropdown, setShowEspecialidadesDropdown] =
    useState(false);
  const [showServiciosDropdown, setShowServiciosDropdown] = useState(false);
  const { theme } = useTheme();
  const { data: session, status } = useSession();
  const path = pathname.split("/")[2];
  const setAllFalse = () => {
    setShowEspecialidadesDropdown(false);
    setShowServiciosDropdown(false);
  };
  const router = useRouter();
  const langToChange = lng === "es" ? "en" : "es";
  const changeLanguage = async () => {
    const newPathname = pathname.replace(`/${lng}`, `/${langToChange}`);
    router.push(newPathname);
  };

  return (
    <>
      <nav className="flex flex-row items-center justify-center bg-[#23283C] dark:bg-[#0A2473] ">
        <div className="w-11/12 flex flex-row items-center h-20 justify-between bg-opacity-0">
          <div className="flex justify-between items-center content-center bg-opacity-0">
            <div className="flex bg-opacity-0">
              <div className="ml-6 flex space-x-8 bg-opacity-0">
                <div className="flex flex-row flex-wrap items-center justify-center gap-4">
                  <Link href="/" passHref>
                    <Image
                      src="https://psservicesavvy.s3.us-east-2.amazonaws.com/logosYLanding/LOGOPS.png"
                      width={170}
                      height={60}
                      blurDataURL={rgbDataURL(0, 0, 0)}
                      loading="lazy"
                      alt="PS service"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {width > 1000 && (
            <div className="flex flex-row flex-wrap justify-end gap-8 items-start content-center text-white mr-4 w-full">
              <Link
                href={`/${lng}/`}
                className={`${
                  path == undefined && "border-0 border-b-2 border-white pb-2"
                }`}
              >
                {t("Inicio")}
              </Link>

              <div className="relative inline-block text-left">
                <button
                  onClick={() => {
                    setShowEspecialidadesDropdown(!showEspecialidadesDropdown);
                    setShowServiciosDropdown(false);
                  }}
                >
                  {t("Especialidades")}
                </button>
                {showEspecialidadesDropdown && (
                  <div className="absolute left-0 mt-2 p-4 w-56 rounded-md shadow-lg bg-white text-[#0A2473] z-40 flex flex-col gap-2">
                    <Link
                      onClick={setAllFalse}
                      href={`/${lng}/ImplementacionDeDataCenter`}
                    >
                      {t("Sistemas")}
                    </Link>
                    <Link
                      onClick={setAllFalse}
                      href={`/${lng}/IngenieriaEnSistemasElectricos`}
                    >
                      {t("Energia")}
                    </Link>
                    <Link
                      onClick={setAllFalse}
                      href={`/${lng}/AireAcondicionadosDePrecision`}
                    >
                      {t("Aire")}
                    </Link>
                    <Link
                      onClick={setAllFalse}
                      href={`/${lng}/MonitoreoYControlDeSeguridad`}
                    >
                      {t("Monitoreo")}
                    </Link>
                    <Link
                      onClick={setAllFalse}
                      href={`/${lng}/FabricacionDeGabinetesYComponentes`}
                    >
                      {t("Fabricacion")}
                    </Link>
                    <Link
                      onClick={setAllFalse}
                      href={`/${lng}/ImplementacionDeTecnologiaMedica`}
                    >
                      {t("Data")}
                    </Link>
                  </div>
                )}
              </div>
              <div className="relative inline-block text-left">
                <button
                  onClick={() => {
                    setShowEspecialidadesDropdown(false);
                    setShowServiciosDropdown(!showServiciosDropdown);
                  }}
                >
                  {t("Servicios")}
                </button>
                {showServiciosDropdown && (
                  <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white text-[#0A2473] p-4 z-40 flex flex-col gap-2">
                    <Link
                      onClick={setAllFalse}
                      href={`/${lng}/SoporteDeSistemasDeMisionCritica`}
                    >
                      {t("Soporte")}
                    </Link>
                  </div>
                )}
              </div>
              <Link href={`/${lng}/ClientesSatisfechosPsService`}>
                {t("Clientes")}
              </Link>
              <Link href={`/${lng}/#Aliados`}>{t("Aliados")}</Link>
              <Link href={`/${lng}/EmpresaSocialmenteResponsable`}>
                {t("RSE")}
              </Link>
              <Link
                href={`/${lng}/BolsaDeTrabajo`}
                className={`${
                  path == "Bolsa" && "border-0 border-b-2 border-white pb-2"
                }`}
              >
                {t("Bolsa")}
              </Link>
              <button onClick={changeLanguage} className="uppercase">
                {langToChange}
              </button>
              {session && (
                <Link
                  href={`/${lng}/Dashboard`}
                  className={`${
                    path == "Dashboard" &&
                    "border-0 border-b-2 border-white pb-2"
                  }`}
                >
                  {t("Dashboard")}
                </Link>
              )}
              <ThemeSwitcher />
              {!session && (
                <Link
                  href="/api/auth/signin"
                  className={`${
                    theme === "dark" ? "text-[#F5C756]" : "text-[#ffffff]"
                  }`}
                >
                  Log In
                </Link>
              )}
              {session && (
                <button
                  className={`${
                    theme === "dark" ? "text-[#F5C756]" : "text-[#ffffff]"
                  }`}
                  onClick={() => signOut()}
                >
                  Log out
                </button>
              )}
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
          lng={lng}
          session={session}
          changeLanguage={changeLanguage}
          langToChange={langToChange}
        />
      )}
    </>
  );
};
