import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Celebración de Graduación · Carlos",
  description:
    "Confirma tu asistencia para la reunión íntima de graduación de Carlos.",
  icons: {
    icon: "/icon.png?v=2",
    shortcut: "/favicon.ico?v=2",
    apple: "/apple-touch-icon.png?v=2",
  },
  openGraph: {
    title: "Celebración de Graduación · Carlos",
    description:
      "Confirma por WhatsApp y escucha la playlist Dinner Time - Grad Party @ Condominio 71.",
    url: "https://graduation-invite.vercel.app",
    siteName: "Celebración de Graduación",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Invitación a la graduación de Carlos",
      },
    ],
    locale: "es_SV",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Celebración de Graduación · Carlos",
    description:
      "Confirma por WhatsApp y escucha la playlist Dinner Time - Grad Party @ Condominio 71.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
