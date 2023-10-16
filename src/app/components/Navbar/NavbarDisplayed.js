"use client";
import Link from "next/link";
import { ThemeSwitcher } from "../ThemeSwitcher";
import { signOut } from "next-auth/react";
export default function NavbarDisplayed({
  t,
  lng,
  showMenu,
  setShowMenu,
  session,
}) {
  return (
    <div className="h-screen bg-[#23283C] dark:bg-[#0A2473]">
      <div
        className="m-3 mt-7 flex flex-col flex-nowrap justify-start content-center items-center gap-6"
        onClick={() => setShowMenu(false)}
      >
        <ThemeSwitcher />
        <div className=" text-white text-3xl">
          <Link href={`${lng}/Inicio`}>{t("Inicio")}</Link>
        </div>
        <div className=" text-white text-3xl">
          <Link href={`${lng}/Especialidades`}>{t("Especialidades")}</Link>
        </div>
        <div className=" text-white text-3xl">
          <Link href={`${lng}/Servicios`}>{t("Servicios")}</Link>
        </div>
        <div className=" text-white text-3xl">
          <Link href={`${lng}/Clientes`}>{t("Clientes")}</Link>
        </div>
        <div className=" text-white text-3xl">
          <Link href={`${lng}/Aliados`}>{t("Aliados")}</Link>
        </div>
        <div className=" text-white text-3xl">
          <Link href={`${lng}/RSE`}>{t("RSE")}</Link>
        </div>
        <div className=" text-white text-3xl">
          <Link href={`${lng}/Bolsa`}>{t("Bolsa")}</Link>
        </div>
        {session && (
          <div className=" text-white text-3xl">
            <Link href={`${lng}/Dashboard`}>{t("Dashboard")}</Link>
          </div>
        )}
        {!session && (
          <div className=" text-white text-3xl">
            <Link href="/LogIn">{t("LogIn")}</Link>
          </div>
        )}
        {session && (
          <div className=" text-white text-3xl">
            <button onClick={() => signOut()}>Log Out</button>
          </div>
        )}
      </div>
    </div>
  );
}
