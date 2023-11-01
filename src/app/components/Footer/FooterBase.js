import Image from "next/image";
import Link from "next/link";
import FooterLinks from "../FooterLinks";
import FooterLinksId from "../FooterLinkId";
export const FooterBase = async ({ t, lng }) => {
  const today = new Date();
  return (
    <>
      <footer className="flex flex-row flex-wrap w-full justify-center items-center bg-[#3F3F3F] dark:bg-[#4C051A] py-4 text-white text-sm z-0">
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
                <FooterLinks
                  lng={lng}
                  href="IngenieriaEnSistemasElectricos"
                  text={t("Energia")}
                />
                <FooterLinks
                  lng={lng}
                  href="ImplementacionDeDataCenter"
                  text={t("Sistemas")}
                />
                <FooterLinks
                  lng={lng}
                  href="MonitoreoYControlDeSeguridad"
                  text={t("Monitoreo")}
                />
                <FooterLinks
                  lng={lng}
                  href="SoporteDeSistemasDeMisionCritica"
                  text={t("Soporte")}
                />
                <FooterLinks
                  lng={lng}
                  href="AireAcondicionadosDePrecision"
                  text={t("Aire")}
                />
                <FooterLinks
                  lng={lng}
                  href="FabricacionDeGabinetesYComponentes"
                  text={t("Fabricacion")}
                />
                <FooterLinks
                  lng={lng}
                  href="ImplementacionDeTecnologiaMedica"
                  text={t("Data")}
                />
              </ul>
            </div>
            <div className="flex flex-col flex-nowrap max-w-xs">
              <p className="my-8 text-xl">{t("Recursos")}</p>
              <ul>
                <FooterLinks
                  lng={lng}
                  href="ClientesSatisfechosPsService"
                  text={t("Clientes")}
                />
                <FooterLinksId
                  lng={lng}
                  href="Certificaciones"
                  text={t("Certificaciones")}
                />
                <FooterLinksId lng={lng} href="Aliados" text={t("Aliados")} />
                <FooterLinks
                  lng={lng}
                  href="EmpresaSocialmenteResponsable"
                  text={t("RSE")}
                />

                <FooterLinks
                  lng={lng}
                  href="BolsaDeTrabajo"
                  text={t("Bolsa")}
                />
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
        <Link href={`${lng}/AvisoDePrivacidadPsService`}>{t("Aviso")}</Link>
        <Link href={`${lng}/TerminosYCondicionesDeNavegacion`}>
          {t("Terminos")}
        </Link>
      </div>
    </>
  );
};
