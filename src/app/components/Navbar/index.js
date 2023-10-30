"use client";
import { useTranslation } from "../../i18n";
import { NavbarBase } from "./NavbarBase";

export const Navbar = async ({ lng }) => {
  const { t, i18n } = await useTranslation(lng, "Footer");
  return <NavbarBase t={t} lng={lng} i18n={i18n} />;
};
