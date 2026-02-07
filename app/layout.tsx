import type { Metadata } from "next";
import "./globals.css";
import PageBackground from "@/components/PageBackground";

export const metadata: Metadata = {
  title: "SINAD - Sustainable Building Solutions | سِناد",
  description: "شركة عُمانية رائدة في ابتكارات البناء المستدامة | Leading Omani sustainable building innovations",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <PageBackground />
        {children}
      </body>
    </html>
  );
}