export async function generateMetadata({ params }) {
  const lng = params.lng;
  if (lng === "en") {
    return {
      title: "PS Service privacy notice",
      description:
        "At PS Service we take care of the privacy of our visitors, consult our privacy notice",
      alternates: {
        canonical: "https://www.psservice.com.mx/AviosDePrivacidadPsService",
        languages: {
          en: "https://www.psservice.com.mx/en/AviosDePrivacidadPsService",
          es: "https://www.psservice.com.mx/es/AviosDePrivacidadPsService",
        },
      },
    };
  }
  return {
    title: "PS Service, nuestro aviso de privacidad",
    description:
      "En PS Service cuidamos la privacidad de nuestros visitantes, consulta nuestro aviso de privacidad",
    alternates: {
      canonical: "https://www.psservice.com.mx/AviosDePrivacidadPsService",
      languages: {
        en: "https://www.psservice.com.mx/en/AviosDePrivacidadPsService",
        es: "https://www.psservice.com.mx/es/AviosDePrivacidadPsService",
      },
    },
  };
}

export default function layout({ children }) {
  return <>{children}</>;
}
