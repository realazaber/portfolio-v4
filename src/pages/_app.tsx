import "@/styles/main.scss";
import type { AppProps } from "next/app";
import Nav from "@/components/Navigation/Nav";
import Footer from "@/components/Navigation/Footer";
import Socials from "@/components/Misc/Socials";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <div className="flex flex-col justify-center items-center w-full mx-auto mt-24 overflow-x-hidden">
        <Component {...pageProps} />
      </div>
      <Socials />
      <Footer />
    </>
  );
}
