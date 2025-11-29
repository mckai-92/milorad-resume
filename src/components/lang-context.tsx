import { createContext } from "react";

interface I {
  lang: string;
  setLang: (lang: string) => void;
}

const context: I = {
  lang: "",
  setLang: (lang?: string) => {},
};

export const LangContext = createContext(context);
