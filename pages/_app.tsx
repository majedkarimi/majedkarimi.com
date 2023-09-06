import ProvideSw from "@/config/ProvideSw";
import Providers from "@/store/Provider";
import "../style/globals.css";
import "../style/animation.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProvideSw>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </ProvideSw>
  );
}
