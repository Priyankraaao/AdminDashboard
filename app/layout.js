import { Inter } from "next/font/google";
import "./ui/globals.css";
import { NextAuthProvider } from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin Dashboard",
  description: "Carbon Trail",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider> {children}</NextAuthProvider>
      </body>
    </html>
  );
}
