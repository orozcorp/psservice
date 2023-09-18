"use client";
import { useTranslation } from "../../i18n";
import { NavbarBase } from "./NavbarBase";

export const Navbar = async ({ lng }) => {
  const { t } = await useTranslation(lng, "Footer");
  return <NavbarBase t={t} lng={lng} />;
};
