import "@/styles/globals.scss";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider seesion={pageProps.seesion}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
