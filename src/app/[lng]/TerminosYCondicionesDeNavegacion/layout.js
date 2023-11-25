export async function generateMetadata({ params }) {
  const lng = params.lng;
  if (lng === "en") {
    return {
      title: "navigation terms and conditions",
      description:
        "Review the terms and conditions of navigation of our site, updated in 2023",
      alternates: {
        canonical:
          "https://www.psservice.com.mx/TerminosYCondicionesDeNavegacion",
        languages: {
          en: "https://www.psservice.com.mx/TerminosYCondicionesDeNavegacion/en",
          es: "https://www.psservice.com.mx/TerminosYCondicionesDeNavegacion/es",
        },
      },
    };
  }
  return {
    title: "Términos y condiciones de www.psservice.com.mx",
    description:
      "Revisa los términos y condiciones de navegación de nuestro sitio, actualizados en 2023",
    alternates: {
      canonical:
        "https://www.psservice.com.mx/TerminosYCondicionesDeNavegacion",
      languages: {
        en: "https://www.psservice.com.mx/TerminosYCondicionesDeNavegacion/en",
        es: "https://www.psservice.com.mx/TerminosYCondicionesDeNavegacion/es",
      },
    },
  };
}

export default function layout({ children }) {
  return <>{children}</>;
}
