"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import NavbarDisplayed from "./NavbarDisplayed";
import { ThemeSwitcher } from "../../../components/ThemeSwitcher";
import { rgbDataURL } from "../../../components/helpers/blur";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useSession, signOut } from "next-auth/react";
import { useTranslation } from "../../../components/hooks/useTranslation";
import { useParams } from "next/navigation";

export default function NavbarBase() {
  const { lng } = useParams();
  const { t } = useTranslation("Footer");
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const [showEspecialidadesDropdown, setShowEspecialidadesDropdown] =
    useState(false);
  const { theme } = useTheme();
  const { data: session } = useSession();
  const path = pathname.split("/")[2];
  const router = useRouter();
  const langToChange = lng === "es" ? "en" : "es";

  const setAllFalse = () => {
    setShowEspecialidadesDropdown(false);
  };

  const changeLanguage = () => {
    const newPathname = pathname.replace(`/${lng}`, `/${langToChange}`);
    router.push(newPathname);
  };

  return (
    <>
      <nav className="flex flex-row items-center justify-center bg-[#23283C] dark:bg-[#0A2473]">
        <div className="w-11/12 flex flex-row items-center h-20 justify-between">
          <div className="flex items-center">
            <div className="ml-6">
              <Link href="/" passHref>
                <Image
                  src="https://psserviceimages.s3.us-east-2.amazonaws.com/logo_menu.svg"
                  width={170}
                  height={60}
                  blurDataURL={rgbDataURL(0, 0, 0)}
                  loading="lazy"
                  alt="PS service"
                />
              </Link>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex flex-row flex-wrap justify-end gap-8 items-start content-center text-white mr-4 w-full">
            <Link
              href={`/${lng}/`}
              className={`${
                path == undefined && "border-b-2 border-white pb-2"
              }`}
            >
              {t("Inicio")}
            </Link>

            <div className="relative">
              <button
                onClick={() =>
                  setShowEspecialidadesDropdown(!showEspecialidadesDropdown)
                }
              >
                {t("Especialidades")}
              </button>
              {showEspecialidadesDropdown && (
                <div
                  className="absolute left-0 mt-2 p-4 w-56 rounded-md shadow-lg bg-white text-[#0A2473] z-40 flex flex-col gap-2"
                  onMouseLeave={() => setShowEspecialidadesDropdown(false)}
                >
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

            <Link href={`/${lng}/SoporteDeSistemasDeMisionCritica`}>
              {t("Soporte")}
            </Link>
            <Link href={`/${lng}/ClientesSatisfechosPsService`}>
              {t("Clientes")}
            </Link>
            <Link href={`/${lng}/#Aliados`}>{t("Aliados")}</Link>
            <Link href={`/${lng}/EmpresaSocialmenteResponsable`}>
              {t("RSE")}
            </Link>
            <Link
              href={`/${lng}/BolsaDeTrabajo`}
              className={`${path == "Bolsa" && "border-b-2 border-white pb-2"}`}
            >
              {t("Bolsa")}
            </Link>

            <button onClick={changeLanguage} className="uppercase">
              {lng.toUpperCase()}
            </button>

            {session && (
              <Link
                href={`/${lng}/Dashboard`}
                className={`${
                  path == "Dashboard" && "border-b-2 border-white pb-2"
                }`}
              >
                {t("Dashboard")}
              </Link>
            )}

            <ThemeSwitcher />

            {!session ? (
              <Link
                href="/api/auth/signin"
                className={
                  theme === "dark" ? "text-[#F5C756]" : "text-[#ffffff]"
                }
              >
                Log In
              </Link>
            ) : (
              <button
                className={
                  theme === "dark" ? "text-[#F5C756]" : "text-[#ffffff]"
                }
                onClick={() => signOut()}
              >
                Log out
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden mr-4">
            <button onClick={() => setShowMenu(!showMenu)}>
              <AiOutlineMenu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
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
}
