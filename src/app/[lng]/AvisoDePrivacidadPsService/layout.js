export async function generateMetadata({ params }) {
  const lng = params.lng;
  if (lng === "en") {
    return {
      title: "PS Services privacy notice",
      description:
        "At PS Service we take care of the privacy of our visitors, consult our privacy notice",
    };
  }
  return {
    title: "PS Services, nuestro aviso de privacidad",
    description:
      "En PS Service cuidamos la privacidad de nuestros visitantes, consulta nuestro aviso de privacidad",
  };
}

export default function layout({ children }) {
  return <>{children}</>;
}
