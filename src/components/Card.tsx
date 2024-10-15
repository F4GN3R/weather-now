import { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
};

export default function Card({ title, children }: CardProps) {
  return (
    <div className="flex flex-col gap-4">
      {title && (
        <h1 className="text-2xl font-semibold dark:text-slate-100">{title}</h1>
      )}
      <div className="flex flex-col gap-4 py-7 px-6 rounded-3xl bg-slate-200 dark:bg-slate-800 ">
        {children}
      </div>
    </div>
  );
}
