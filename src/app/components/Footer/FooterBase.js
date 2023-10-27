import Image from "next/image";
import Link from "next/link";
import FooterLinks from "../FooterLinks";
import FooterLinksId from "../FooterLinkId";
export const FooterBase = async ({ t, lng }) => {
  const today = new Date();
  return (
    <>
      <footer className="flex flex-row flex-wrap w-full justify-center items-center bg-[#3F3F3F] dark:bg-[#4C051A] py-4 text-white text-sm z-50">
        <div className="flex flex-col flex-nowrap w-3/4">
          <div className="flex flex-row flex-wrap  justify-between gap-16">
            <div className="flex flex-col flex-nowrap max-w-xs">
              <Image
                src="https://psservicesavvy.s3.us-east-2.amazonaws.com/logosYLanding/LOGOPS.png"
                width={266}
                height={114}
                alt="logo"
              />
              <p className="my-8 text-xl">{t("Contacto")}</p>
              <p className="my-2 ">{t("Frase")}</p>
              <p>(52) 55 5919 2181 atencion_clientes@psservice.com.mx</p>
            </div>
            <div className="flex flex-col flex-nowrap max-w-xs">
              <p className="my-8 text-xl">{t("Servicios")}</p>
              <ul>
                <FooterLinks lng={lng} href="Energia" text={t("Energia")} />
                <FooterLinks lng={lng} href="DataCenter" text={t("Sistemas")} />
                <FooterLinks lng={lng} href="Monitoreo" text={t("Monitoreo")} />
                <FooterLinks lng={lng} href="Soporte" text={t("Soporte")} />
                <FooterLinks
                  lng={lng}
                  href="AiresAcondicionados"
                  text={t("Aire")}
                />
                <FooterLinks
                  lng={lng}
                  href="Fabricacion"
                  text={t("Fabricacion")}
                />
                <FooterLinks
                  lng={lng}
                  href="TecnologiaMedica"
                  text={t("Data")}
                />
              </ul>
            </div>
            <div className="flex flex-col flex-nowrap max-w-xs">
              <p className="my-8 text-xl">{t("Recursos")}</p>
              <ul>
                <FooterLinks lng={lng} href="Clientes" text={t("Clientes")} />
                <FooterLinksId
                  lng={lng}
                  href="Certificaciones"
                  text={t("Certificaciones")}
                />
                <FooterLinksId lng={lng} href="Aliados" text={t("Aliados")} />
                <FooterLinks lng={lng} href="RSE" text={t("RSE")} />

                <FooterLinks lng={lng} href="Bolsa" text={t("Bolsa")} />
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex flex-col lg:flex-row flex-nowrap lg:flex-wrap w-full justify-around py-4 bg-[#1A4693] text-white p-8 gap-4 text-xs">
        <div>
          PS Service, México {today.getFullYear()}, Todos los derechos
          reservados
        </div>
        <Link href={`${lng}/AvisoDePrivacidad`}>{t("Aviso")}</Link>
        <Link href={`${lng}/TerminosYCondiciones`}>{t("Terminos")}</Link>
      </div>
    </>
  );
};
