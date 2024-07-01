export async function generateMetadata({ params }) {
  const lng = params.lng;
  if (lng === "en") {
    return {
      title: "Socially Responsible Company",
      description:
        "Committed to corporate social responsibility in Mexico, we promote sustainable practices and contribute to the development of our communities",
      alternates: {
        canonical: "https://www.psservice.com.mx/EmpresaSocialmenteResponsable",
        languages: {
          en: "https://www.psservice.com.mx/en/EmpresaSocialmenteResponsable",
          es: "https://www.psservice.com.mx/es/EmpresaSocialmenteResponsable",
        },
      },
    };
  }
  return {
    title: "Empresa Socialmente Responsable PS Service",
    description:
      "Comprometidos con la responsabilidad social empresarial en México, impulsamos prácticas sostenibles y contribuimos al desarrollo de nuestras comunidades",
    alternates: {
      canonical: "https://www.psservice.com.mx/EmpresaSocialmenteResponsable",
      languages: {
          en: "https://www.psservice.com.mx/en/EmpresaSocialmenteResponsable",
          es: "https://www.psservice.com.mx/es/EmpresaSocialmenteResponsable",
      },
    },
  };
}

export default async function Layout({ children }) {
  return <>{children}</>;
}
