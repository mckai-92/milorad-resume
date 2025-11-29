import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { LangContext } from "@/components/lang-context";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [lang, setLang] = useState<string>("en");

  return (
    <ThemeProvider>
      <LangContext.Provider value={{ lang, setLang }}>
        <Component {...pageProps} />
      </LangContext.Provider>
    </ThemeProvider>
  );
}
