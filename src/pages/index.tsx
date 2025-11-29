import Image from "next/image";
import { Geist, Rubik } from "next/font/google";
import {
  ExternalIcon,
  GithubIcon,
  LanguageIcon,
  LinkedinIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/icons";

import { data as _data } from "@/config/data";
import { Job } from "@/components/job";
import { Button } from "@/components/button";
import { ThemeSwitch } from "@/components/theme-switch";
import { LanguageSwitch } from "@/components/language-switch";
import { useContext, useEffect, useEffectEvent, useState } from "react";
import { Skills } from "../components/skills";
import { LangContext } from "@/components/lang-context";
import { LanguageInterface } from "@/types/interface";
import Head from "next/head";

const geist = Geist({
  subsets: ["latin"],
});

const rubik = Rubik({
  subsets: ["latin"],
});

export default function Home() {
  const { lang, setLang } = useContext(LangContext);
  const data: LanguageInterface = _data.lang;

  const socialButtons = (iconOnly?: boolean) => (
    <>
      <Button
        href={`mailto:${_data.email}`}
        className={iconOnly ? "px-3 py-3" : ""}
      >
        {!iconOnly ? _data.email : null}
        <MailIcon size={20} />
      </Button>
      <Button href={`tel:${_data.tel}`} className={iconOnly ? "px-3 py-3" : ""}>
        {!iconOnly ? data[lang].tel : null}
        <PhoneIcon size={20} />
      </Button>
      <Button href={_data.linkedin} className={iconOnly ? "px-3 py-3" : ""}>
        {!iconOnly ? "LinkedIn" : null}
        <LinkedinIcon size={20} />
      </Button>
      <Button href={_data.github} className={iconOnly ? "px-3 py-3" : ""}>
        {!iconOnly ? "GitHub" : null}
        <GithubIcon size={20} />
      </Button>
    </>
  );

  /**
   * Detect firefox and add class to make background less visible
   * because firefox filter can't be greater than 100px and we need 300 - 1000
   */
  const [firefoxCustomClass, setFirefoxCustomClass] = useState("");
  const detectFirefox = useEffectEvent(() => {
    if (navigator.userAgent.indexOf("Firefox") !== -1) {
      setFirefoxCustomClass("opacity-50");
    }
  });
  useEffect(() => {
    detectFirefox();
  }, []);

  return (
    <>
      <Head>
        <title>{_data.site.title}</title>
        <meta name="description" content={_data.site.description}></meta>
      </Head>

      <div
        className={`${rubik.className} outline-red-400 flex flex-col items-center justify-center font-sans dark:bg-black/2`}
      >
        <div
          className={`bg-radial from-cyan-500/30 dark:from-sky-500/30 to-transparent 
          blur-[300px] dark:blur-[1000px]
          max-md:from-cyan-500/60 max-md:dark:blur-[400px]
        absolute top-[-50vh] left-0 right-0 h-[100vh]
        ${firefoxCustomClass}
        `}
        ></div>

        <div className="p-4 flex items-center justify-end gap-4 w-full max-w-5xl cursor-pointer z-1">
          <LanguageSwitch
            language={lang}
            onlanguageChange={(l: string) => setLang(l)}
          />
          <ThemeSwitch />
        </div>

        <main className=" w-full max-w-5xl items-center justify-between py-0 md:py-8 sm:items-start z-1">
          <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[300px_1fr] gap-0 md:gap-8 lg:gap-16">
            <div>
              <div className="flex justify-center">
                <div className="flip-container z-1">
                  <div className="flipper">
                    <div className="front">
                      <Image
                        className="mt-0 lg:mt-8 mb-2 rounded-full border-1 border-red-400 
              w-40 h-40 md:w-50 md:h-50 overflow-hidden object-cover"
                        src="/user.png"
                        alt={_data.name}
                        width={200}
                        height={200}
                        priority
                      />
                    </div>
                    <div className="back">
                      <Image
                        className="mt-0 lg:mt-8 mb-2 rounded-full border-1 border-red-400 
              w-40 h-40 md:w-50 md:h-50 overflow-hidden object-cover"
                        src="/user-cartoon.png"
                        alt={_data.name}
                        width={200}
                        height={200}
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 items-center justify-center mb-2">
                {data[lang].location}
                <LocationIcon size={20} />
              </div>

              <div className="flex gap-2 items-center justify-center mb-2">
                {data[lang].languages.map((l, index) => (
                  <span key={index}>{l}</span>
                ))}

                <LanguageIcon />
              </div>

              <div className="py-16 pl-4 max-md:hidden">
                <h2
                  className={`${geist.className} 
                text-3xl lg:text-4xl
                border-b-1 border-red-400 font-[600] px-2 tracking-tight`}
                >
                  {data[lang].headings.skills}
                </h2>

                <Skills className="text-sm" />
              </div>
            </div>

            <div className="flex-grow">
              <h1
                className={`${geist.className} 
              text-5xl lg:text-6xl
               flex-grow font-[600] tracking-tighter max-md:text-center`}
              >
                {_data.name}
              </h1>
              <div
                className="text-lg lg:text-xl 
            uppercase text-neutral-500 dark:text-neutral-400  max-md:text-center"
              >
                Frontend developer
              </div>

              <div className="flex flex-wrap gap-2 mt-8 mb-16 max-md:hidden">
                {socialButtons()}
              </div>

              <div className="flex flex-wrap justify-center gap-2 mt-4 mb-8 md:hidden">
                {socialButtons(true)}
              </div>

              <div>
                <h2
                  className={`${geist.className} 
                text-3xl lg:text-4xl
                border-b-1 border-red-400 font-[600] mx-2 relative tracking-tight`}
                >
                  {data[lang].headings.work_experience}
                </h2>

                {data[lang].jobs?.map((job, index) => (
                  <Job data={job} key={index} />
                ))}
              </div>

              <div>
                <h2
                  className={`${geist.className} 
                text-3xl lg:text-4xl
                mb-0 lg:mt-4 mt-8 border-b-1 border-red-400 font-[600] mx-2 relative tracking-tight`}
                >
                  {data[lang].headings.education}
                </h2>

                <a
                  href={data[lang].school.url}
                  target="_blank"
                  className="font-[500] text-xl flex gap-2 items-center p-4 tracking-tight hover:text-blue-500 hover:dark:text-sky-400 transition duration-200 group"
                >
                  <ExternalIcon
                    size={20}
                    className="text-neutral-500 dark:text-neutral-400 group-hover:text-blue-500 group-hover:dark:text-sky-400 transition duration-200 min-w-[20]"
                  />
                  <span>{data[lang].school.name}</span>
                </a>
              </div>

              <div className="mb-4 mt-8 md:hidden">
                <h2
                  className={`${geist.className} 
                text-3xl lg:text-4xl
                border-b-1 border-red-400 font-[600] mx-2 tracking-tight`}
                >
                  {data[lang].headings.skills}
                </h2>

                <Skills className="text-sm mx-4" />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
