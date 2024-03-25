import Favicon from "/public/images/favicon.png";
import ClientRootLayout from "../components/ClientRootLayout";

export const metadata = {
  title: "Benoit Verdot | Ingénieur Cloud & DevOps",
  description:
  "Bienvenue sur mon portfolio d'Ingénieur Cloud & DevOps. Découvrez mes compétences et projets, et voyez comment je peux contribuer à votre entreprise. N'hésitez pas à me contacter !",
  keywords: [
    "portfolio",
    "app",
    "next.js 13",
    "sass",
    "scss",
    "react",
  ],
    icons: [{
    rel: 'icon',
    url: Favicon.src,
  }]
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>
}
