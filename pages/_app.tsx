import ProvideSw from "@/config/ProvideSw";
import Providers from "@/store/Provider";
import "../style/globals.css";
import "../style/animation.css";
import { useEffect } from "react";
import TagManager, { TagManagerArgs } from "react-gtm-module";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const gtmId = "GTM_ID";
  const tagManagerArgs: TagManagerArgs = {
    gtmId,
  };
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <ProvideSw>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </ProvideSw>
  );
}
