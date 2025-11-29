export const ListItem = ({
  text,
  width = 15,
}: {
  text: string;
  width?: number;
}) => {
  return (
    <div className="flex items-center gap-3">
      <span
        className="w-[15] min-w-[15] max-w-[15] h-[1] shadow-sm
        bg-black/10 shadow-black dark:bg-white/10 dark:shadow-white"
        style={{
          width: width + "px",
          minWidth: width + "px",
          maxWidth: width + "px",
        }}
      ></span>
      <span className="">{text}</span>
    </div>
  );
};
