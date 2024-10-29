import "../globals.css";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { ThemeProvider } from "../providers/theme-provider";
import { Oxygen } from "next/font/google";
import dynamic from "next/dynamic";
import NextAuthSessionProvider from "../providers/sessionProvider";
import { GoogleTagManager } from "@next/third-parties/google";
import QCProvider from "../providers/QCProvider";
const Navbar = dynamic(() =>
  import("./(navigationComponents)/Navbar/NavbarBase")
);
const Footer = dynamic(() =>
  import("./(navigationComponents)/Footer/FooterBase")
);

// Oxygen font with preload optimization
const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap", // Add font-display: swap
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng: lng || "es" }));
}
export async function generateMetadata({ params }) {
  const lng = params.lng;
  if (lng === "en") {
    return {
      title: "PS Service, engineering firm",
      description:
        "We are a leading engineering firm in Mexico, specialized in the implementation of mission-critical systems, optimization of technological infrastructures and innovative solutions to boost your business. Committed to efficiency and safety",
    };
  }
  return {
    title: "PS Service, firma de ingeniería",
    description:
      "Somos una firma líder de ingeniería en México, especializada en la implementación de sistemas de misión crítica, optimización de infraestructuras tecnológicas y soluciones innovadoras para impulsar tu negocio. Comprometidos con la eficiencia y la seguridad",
  };
}

export default async function RootLayout({ children, params: { lng = "es" } }) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <GoogleTagManager gtmId={"GTM-WSZKMS27"} />
      <body>
        <QCProvider>
          <NextAuthSessionProvider>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
              <main
                className={`${oxygen.className} relative flex flex-col min-h-screen bg-[#F4F4F5] dark:bg-gradient-to-r dark:from-[#1E3F88] dark:to-[#0F2044]`}
              >
                <Navbar />

                <div className="flex-grow">{children}</div>

                <Footer lng={lng} />
              </main>
            </ThemeProvider>
          </NextAuthSessionProvider>
        </QCProvider>
      </body>
    </html>
  );
}
