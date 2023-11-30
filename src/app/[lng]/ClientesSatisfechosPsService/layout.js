export async function generateMetadata({ params }) {
  const lng = params.lng;
  if (lng === "en") {
    return {
      title: "PS Service clients",
      description:
        "25 years of experience and innovation support us. Our clients are the best proof of this.",
      alternates: {
        canonical: "https://www.psservice.com.mx/ClientesSatisfechosPsService",
        languages: {
          en: "https://www.psservice.com.mx/ClientesSatisfechosPsService/en",
          es: "https://www.psservice.com.mx/ClientesSatisfechosPsService/es",
        },
      },
    };
  }
  return {
    title: "PS Service, nuestros clientes",
    description:
      "25 años de experiencia e innovación nos respaldan. Nuestros clientes son la mejor prueba de ello.",
    alternates: {
      canonical: "https://www.psservice.com.mx/ClientesSatisfechosPsService",
      languages: {
        en: "https://www.psservice.com.mx/ClientesSatisfechosPsService/en",
        es: "https://www.psservice.com.mx/ClientesSatisfechosPsService/es",
      },
    },
  };
}

export default function layout({ children }) {
  return <>{children}</>;
}
