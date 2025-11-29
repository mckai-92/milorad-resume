import { ReactNode } from "react";

export const Button = ({
  children,
  href,
  className,
}: {
  children: ReactNode;
  href?: string;
  className?: string;
}) => {
  const buttonClass = `flex items-center gap-2 px-3 py-1 
        rounded-full border-1 border-gray-500/50 
        bg-white/40 dark:bg-black/20 shadow-md dark:shadow-white/5 text-sm text-neutral-600 dark:text-neutral-300
        transition-bg duration-300 hover:bg-sky-400/10`;
  return (
    <>
      {href ? (
        <a
          href={href}
          target="_blank"
          className={`${buttonClass} ${className}`}
        >
          {children}
        </a>
      ) : (
        <button className={`${buttonClass} ${className}`}>{children}</button>
      )}
    </>
  );
};
