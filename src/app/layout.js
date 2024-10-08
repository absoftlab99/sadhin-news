import { Hind_Siliguri, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import BrandBar from "@/components/Shared/BrandBar";

const bengali = Hind_Siliguri({ weight: ["300", "400", "500", "600", "700"], subsets: ["bengali"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bengali.className}>
        <Navbar></Navbar>
        <BrandBar></BrandBar>
        <main className="md:grid md:place-content-center">
          <div className="w-full lg:w-[1200px] xl:w-[1440px]">{children}</div>
        </main>
      </body>
    </html>
  );
}
