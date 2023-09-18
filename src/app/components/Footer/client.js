"use client";
import { FooterBase } from "./FooterBase";
import { useTranslation } from "../../i18n";

export const Footer = ({ lng }) => {
  const { t } = useTranslation(lng, "Footer");
  return <FooterBase t={t} lng={lng} />;
};
