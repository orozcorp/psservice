export async function generateMetadata({ params }) {
  const lng = params.lng;
  if (lng === "en") {
    return {
      title: "PS Service job board",
      description:
        "Specialized in recruitment and selection of personnel in Mexico, we find the best talents to boost our company. ",
    };
  }
  return {
    title: "Bolsa de trabajo PS Service",
    description:
      "Especializados en reclutamiento y selección de personal en México, encontramos los mejores talentos para impulsar nuestra empresa. Proceso eficiente y transparente",
  };
}

export default async function Layout({ children }) {
  return <>{children}</>;
}
