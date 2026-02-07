import type { Metadata } from "next";
import "./globals.css";
import PageBackground from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "Sinad - Sustainable Building Solutions | سِناد",
  description: "شركة عُمانية رائدة في ابتكارات البناء المستدامة | Leading Omani sustainable building innovations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="overflow-x-hidden">
        <PageBackground />
        {children}
      </body>
    </html>
  );
}