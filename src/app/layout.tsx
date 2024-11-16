
import clsx from "clsx";
import "./globals.css";
import { nunito, nunito_sans } from "./fonts/font";
import { createClient } from "@/prismicio";
import { Metadata } from "next";
import HeaderComponent from "@/app/components/header";


export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("settings");

  return {
    title: page.data.title || "fallback title",
    description: page.data.meta_description || "fallback description",
    openGraph: {
      images: [page.data.logo.url || "image"],
    },
  };
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(nunito.variable, nunito_sans.variable) }
      >
        <HeaderComponent />
        
        {children}
      </body>
    </html>
  );
}
