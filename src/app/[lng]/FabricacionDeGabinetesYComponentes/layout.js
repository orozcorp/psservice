export async function generateMetadata({ params }) {
  const lng = params.lng;
  if (lng === "en") {
    return {
      title: "Manufacturing of cabinets and components PS Service",
      description:
        "We manufacture cabinets and components to measure in Mexico, with high quality materials and personalized design to meet your exact specifications.",
      keywords:
        "gabinetes industriales,gabinete estilo industrial banheiro,gabinetes eléctricos industriales medidas,gabinete tablero industrial,gabinetes industriales panduit,gabinetes industriales rittal,diseño gabinetes industriales,gabinete industrial inox,gabinete industrial usado,gabinete industrial con frente transparente,fabrica de gabinetes electricos industriales,gabinete industrial para banheiro,gabinete recolocación industrial,gabinetes cocina industrial,gabinete industrial para computadora,gabinetes justrite,gabinete tipo industrial,gabinete industrial led,gabinete computadora industrial,gabinetes para quimicos,gabinetes industriales precios,gabinete piso industrial,gabinete industrial de almacenamiento,gabinete industrial 2x75,gabinete estilo industrial,gabinetes industriales monterrey,gabinete industrial lavabo,gabinete tecnico industrial,gabinetes nema 4x,proveedor de gabinetes industriales,gabinete pia industrial,gabinete industrial pc,gabinete banheiro industrial com cuba,gabinetes nema,gabinete industrial cuartas,gabinetes zamora,gabinete estilo industrial para banheiro,gabinete industrial para tablero de control,gabinetes industriales en puebla,gabinetes north,gabinete industrial 3u,gabinetes himel,gabinete control industrial,gabinete industrial cozinha,gabinete ministra industria,gabinete metal industrial,gabinetes modulares industria,gabinetes queretaro",
      alternates: {
        canonical:
          "https://www.psservice.com.mx/FabricacionDeGabinetesYComponentes",
        languages: {
          en: "https://www.psservice.com.mx/FabricacionDeGabinetesYComponentes/en",
          es: "https://www.psservice.com.mx/FabricacionDeGabinetesYComponentes/es",
        },
      },
    };
  }
  return {
    title: "Fabricacion de gabinetes y componentes PS Service",
    description:
      "Fabricamos gabinetes y componentes a medida en México, con materiales de alta calidad y diseño personalizado para cumplir con tus especificaciones exactas.",
    keywords:
      "gabinetes industriales,gabinete estilo industrial banheiro,gabinetes eléctricos industriales medidas,gabinete tablero industrial,gabinetes industriales panduit,gabinetes industriales rittal,diseño gabinetes industriales,gabinete industrial inox,gabinete industrial usado,gabinete industrial con frente transparente,fabrica de gabinetes electricos industriales,gabinete industrial para banheiro,gabinete recolocación industrial,gabinetes cocina industrial,gabinete industrial para computadora,gabinetes justrite,gabinete tipo industrial,gabinete industrial led,gabinete computadora industrial,gabinetes para quimicos,gabinetes industriales precios,gabinete piso industrial,gabinete industrial de almacenamiento,gabinete industrial 2x75,gabinete estilo industrial,gabinetes industriales monterrey,gabinete industrial lavabo,gabinete tecnico industrial,gabinetes nema 4x,proveedor de gabinetes industriales,gabinete pia industrial,gabinete industrial pc,gabinete banheiro industrial com cuba,gabinetes nema,gabinete industrial cuartas,gabinetes zamora,gabinete estilo industrial para banheiro,gabinete industrial para tablero de control,gabinetes industriales en puebla,gabinetes north,gabinete industrial 3u,gabinetes himel,gabinete control industrial,gabinete industrial cozinha,gabinete ministra industria,gabinete metal industrial,gabinetes modulares industria,gabinetes queretaro",
    alternates: {
      canonical:
        "https://www.psservice.com.mx/FabricacionDeGabinetesYComponentes",
      languages: {
        en: "https://www.psservice.com.mx/FabricacionDeGabinetesYComponentes/en",
        es: "https://www.psservice.com.mx/FabricacionDeGabinetesYComponentes/es",
      },
    },
  };
}

export default async function Layout({ children }) {
  return <>{children}</>;
}
