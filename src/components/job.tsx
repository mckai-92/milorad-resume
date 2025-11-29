import { CalendarIcon, ExternalIcon } from "@/components/icons";
import { ListItem } from "./list-item";

interface Job {
  role: string;
  company: {
    name: string;
    url: string;
  };
  date: string;
  heading: string;
  items: string[];
}

export const Job = ({ data }: { data: Job }) => {
  return (
    <div className="mt-0 md:mt-4 bg-black/2 dark:bg-black/10 p-4 rounded-2xl">
      <div className="flex flex-wrap justify-between">
        <a
          href={data.company.url}
          target="_blank"
          className="font-[500] text-xl flex gap-2 items-center tracking-tight hover:text-blue-500 hover:dark:text-sky-400 transition duration-200 group"
        >
          <ExternalIcon
            size={20}
            className="text-neutral-500 dark:text-neutral-400 group-hover:text-blue-500 group-hover:dark:text-sky-400 transition duration-200"
          />

          {data.company.name}
        </a>

        <div className="flex gap-2 items-center text-neutral-500 dark:text-neutral-400">
          {data.date}
          <CalendarIcon size={20} />
        </div>
      </div>

      <div className="text-red-400 uppercase text-[.9rem] font-medium dark:font-normal">
        {data.role}
      </div>

      <div className="mt-4 text-gray-800 dark:text-gray-300 max-md:text-sm">
        {data.heading}
        {/*<ul className="list-outside list-disc pl-6">*/}
        <ul>
          {data.items.map((item, index) => (
            <li key={index} className="my-2">
              <ListItem text={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
