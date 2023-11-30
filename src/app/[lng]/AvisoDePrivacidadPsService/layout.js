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
          en: "https://www.psservice.com.mx/AviosDePrivacidadPsService/en",
          es: "https://www.psservice.com.mx/AviosDePrivacidadPsService/es",
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
        en: "https://www.psservice.com.mx/AviosDePrivacidadPsService/en",
        es: "https://www.psservice.com.mx/AviosDePrivacidadPsService/es",
      },
    },
  };
}

export default function layout({ children }) {
  return <>{children}</>;
}
