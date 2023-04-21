import "@/styles/main.scss";
import type { AppProps } from "next/app";
import Nav from "@/components/Navigation/Nav";
import Footer from "@/components/Navigation/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center w-full mx-auto mt-32 overflow-x-hidden">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
