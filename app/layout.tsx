import type { Metadata } from "next";
import "./styles/index.css";

export const metadata: Metadata = {
  title: "TLG",
  description: "Tomas Lorono Garcia, fullstack developer from Spain",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
