import { useEffect, useEffectEvent, useState } from "react";

export const LanguageSwitch = ({
  language,
  onlanguageChange,
}: {
  language: string;
  onlanguageChange: (l: string) => void;
}) => {
  const [mounted, setMounted] = useState(false);
  const [lang, setLang] = useState(language);

  const setMountedValue = useEffectEvent(() => {
    setMounted(true);
  });
  useEffect(() => {
    setMountedValue();
  }, []);

  if (!mounted) {
    return null;
  }

  const onChange = () => {
    const l = lang === "rs" ? "en" : "rs";
    setLang(l);
    onlanguageChange(l);
  };

  return (
    <button
      className="cursor-pointer flex items-center gap-2 px-3 py-1 
        rounded-full border-1 border-gray-500/50 
        bg-white/40 dark:bg-black/20 shadow-md dark:shadow-white/5 text-sm text-neutral-600 dark:text-neutral-300
        transition-bg duration-300 hover:bg-sky-400/10"
      onClick={onChange}
    >
      {lang === "rs" ? <>RS</> : <>EN</>}
    </button>
  );
};
