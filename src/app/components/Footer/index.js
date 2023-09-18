import { FooterBase } from "./FooterBase";
import { useTranslation } from "../../i18n";

export const Footer = async ({ lng }) => {
  const { t } = await useTranslation(lng, "Footer");
  return <FooterBase t={t} lng={lng} />;
};
