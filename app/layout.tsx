import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Vasyl Miskiv",
  description: "Fullstack software engineer portfolio",
  keywords:
    "web development, web design, javascript, typescript, react, next.js, node, software engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
