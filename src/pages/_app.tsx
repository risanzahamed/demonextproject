import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Source_Sans_Pro } from "@next/font/google";

const source = Source_Sans_Pro({
  weight: ["200", "300", "400", "600", "700","900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-source",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${source.variable} font-sans`}>
        <Component {...pageProps} />
    </main>
  );
}
