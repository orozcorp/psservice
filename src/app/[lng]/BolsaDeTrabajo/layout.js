export async function generateMetadata({ params }) {
  const lng = params.lng;
  if (lng === "en") {
    return {
      title: "PS Service job board",
      description:
        "Specialized in recruitment and selection of personnel in Mexico, we find the best talents to boost our company. ",
      alternates: {
        canonical: "https://www.psservice.com.mx/BolsaDeTrabajo",
        languages: {
          en: "https://www.psservice.com.mx/en/BolsaDeTrabajo",
          es: "https://www.psservice.com.mx/es/BolsaDeTrabajo",
        },
      },
    };
  }
  return {
    title: "Bolsa de trabajo PS Service",
    description:
      "Especializados en reclutamiento y selección de personal en México, encontramos los mejores talentos para impulsar nuestra empresa. Proceso eficiente y transparente",
    alternates: {
      canonical: "https://www.psservice.com.mx/BolsaDeTrabajo",
      languages: {
        en: "https://www.psservice.com.mx/en/BolsaDeTrabajo",
        es: "https://www.psservice.com.mx/es/BolsaDeTrabajo",
      },
    },
  };
}

export default async function Layout({ children }) {
  return <>{children}</>;
}
