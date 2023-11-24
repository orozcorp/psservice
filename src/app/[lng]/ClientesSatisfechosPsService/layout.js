export async function generateMetadata({ params }) {
  const lng = params.lng;
  if (lng === "en") {
    return {
      title: "PS Services clients",
      description:
        "25 years of experience and innovation support us. Our clients are the best proof of this.",
    };
  }
  return {
    title: "PS Services, nuestros clientes",
    description:
      "25 años de experiencia e innovación nos respaldan. Nuestros clientes son la mejor prueba de ello.",
  };
}

export default function layout({ children }) {
  return <>{children}</>;
}
