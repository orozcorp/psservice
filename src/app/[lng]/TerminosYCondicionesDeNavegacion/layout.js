export async function generateMetadata({ params }) {
  const lng = params.lng;
  if (lng === "en") {
    return {
      title: "navigation terms and conditions",
      description:
        "Review the terms and conditions of navigation of our site, updated in 2023",
    };
  }
  return {
    title: "Términos y condiciones de www.psservice.com.mx",
    description:
      "Revisa los términos y condiciones de navegación de nuestro sitio, actualizados en 2023",
  };
}

export default function layout({ children }) {
  return <>{children}</>;
}
