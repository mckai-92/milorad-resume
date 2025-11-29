import { LangContext } from "@/components/lang-context";
import { ListItem } from "@/components/list-item";
import { useContext } from "react";
import { data as _data } from "@/config/data";
import { LanguageInterface } from "@/types/interface";

export const Skills = ({ className }: { className: string }) => {
  const { lang } = useContext(LangContext);
  const data: LanguageInterface = _data.lang;

  const hClass = `mt-4 text-neutral-600 dark:text-neutral-400 uppercase font-[500]`;

  return (
    <>
      <div className={className}>
        <h3 className={hClass}>{data[lang].skills.frontend.name}</h3>
        <ul>
          {data[lang].skills.frontend.items.map((skill, index) => (
            <ListItem text={skill} width={5} key={index} />
          ))}
        </ul>

        <h3 className={hClass}>{data[lang].skills.backend.name}</h3>
        <ul>
          {data[lang].skills.backend.items.map((skill, index) => (
            <ListItem text={skill} width={5} key={index} />
          ))}
        </ul>

        <h3 className={hClass}>{data[lang].skills.other.name}</h3>
        <ul>
          {data[lang].skills.other.items.map((skill, index) => (
            <ListItem text={skill} width={5} key={index} />
          ))}
        </ul>

        <h3 className={hClass}>{data[lang].skills.familiar.name}</h3>
        <ul>
          {data[lang].skills.familiar.items.map((skill, index) => (
            <ListItem text={skill} width={5} key={index} />
          ))}
        </ul>
      </div>
    </>
  );
};
