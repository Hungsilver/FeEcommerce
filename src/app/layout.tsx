import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/shared/layout/header/header";
import Footer from "@/shared/layout/footer/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
// Prevent fontawesome from adding its CSS since we did it manually above:
import { config } from "@fortawesome/fontawesome-svg-core";
import GoogleRecaptchaWrapper from "@/shared/common/GoogleRecaptchaWrapper";
import { ToastContainer } from "react-toastify";
config.autoAddCss = false; /* eslint-disable import/first */ //fix bug icon awesome bi to first load
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export let metadata: Metadata = {
  title:
    "Hưng Silver - thương hiệu quần áo thời trang nam, nữ, trẻ em chất lượng",
  description: "hungsilvershop.click",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAdmin: boolean = false;
  const isAuthenticated: boolean = false;
  return (
    <html lang="en">
      {/* <body className=className={`${inter.variable} ${roboto_mono.variable} antialiased`}> */}
      <body className={`${inter.className} antialiased`}>
        {/* <CombinedProvider> */}
        <Header isAdmin={isAdmin} isAuthenticated={isAuthenticated} />
        <GoogleRecaptchaWrapper>{children}</GoogleRecaptchaWrapper>
        <ToastContainer />
        <Footer isAdmin={isAdmin} />
        {/* </CombinedProvider> */}
      </body>
    </html>
  );
}
