import "../globals.css";
import { dir } from "i18next";
import { languages } from "../i18n/settings";
import { ThemeProvider } from "../providers/theme-provider";
import { Oxygen } from "next/font/google";

import dynamic from "next/dynamic";
const Navbar = dynamic(() =>
  import("../components/Navbar").then((mod) => ({ default: mod.Navbar }))
);
const Footer = dynamic(
  () => import("../components/Footer").then((mod) => ({ default: mod.Footer })),
  {
    ssr: false, // Load Footer client-side
  }
);

import Script from "next/script";
import NextAuthSessionProvider from "../providers/sessionProvider";
const oxygen = Oxygen({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
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
      <Script
        async
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-VL85Y4PMKP`}
      />

      <Script id="googleTag" strategy="afterInteractive" async>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-VL85Y4PMKP', {
          page_path: window.location.pathname,
          });
        `}
      </Script>

      <body>
        <NextAuthSessionProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <main
              className={`${oxygen.className} relative flex flex-col flex-nowrap min-h-screen bg-[#F4F4F5] dark:bg-gradient-to-r dark:from-[#1E3F88] dark:to-[#0F2044]`}
            >
              <Navbar lng={lng} />
              <div style={{ flex: 1 }}>{children}</div>
              <Footer lng={lng} />
            </main>
          </ThemeProvider>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
