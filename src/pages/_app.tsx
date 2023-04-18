import "@/styles/main.scss";
import type { AppProps } from "next/app";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center w-full mx-auto">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
