import { Gloock } from "next/font/google";
import type { Metadata } from "next";
import "./styles/index.css";

export const metadata: Metadata = {
  title: "TLG",
  description: "Tomas Lorono Garcia, fullstack developer from Spain",
};

const gloock = Gloock({
  variable: "--font-gloock",
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth selection:bg-brand selection:text-background"
    >
      <link
        rel="icon"
        href="/icon?<generated>"
        type="image/png"
        sizes="32x32"
      />
      <body className={`antialiased ${gloock.variable}`}>{children}</body>
    </html>
  );
}
