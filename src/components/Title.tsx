type TitleProps = {
  title: string;
  className?: string;
};
export default function Title({ title, className }: TitleProps) {
  return (
    <h4
      className={`text-sm lg:text-base font-semibold uppercase text-slate-500/70 dark:text-slate-400 ${className}`}
    >
      {title}
    </h4>
  );
}
