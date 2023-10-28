import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthProvider from "./providers/AuthProvider";
import SmoothScroller from "./components/SmoothScroller";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Expertia",
  description: "First prize urapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Poppins:wght@200&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Poppins:wght@200&family=Sometype+Mono&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Poppins:wght@200&family=Roboto:wght@100&family=Sometype+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&family=Poppins:wght@200&family=Roboto:wght@100;400&family=Sometype+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
        {/* <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <link
      href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
      rel="stylesheet"
    />


    <link rel="manifest" href="%PUBLIC_URL%/" />
  </head>
  <body>
    <div id="root"></div>
  </body>*/}
      </head>
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <SmoothScroller>{children}</SmoothScroller>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
