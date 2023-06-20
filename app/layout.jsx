import "./globals.css";
import { Poppins } from "next/font/google";

import Navbar from "./component/Navbar/page";
import { MyProvider } from "@/ContextAPI";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <MyProvider>
        <head />
        <body className={poppins.className}>
          <Navbar />
          {children}
        </body>
      </MyProvider>
    </html>
  );
}
