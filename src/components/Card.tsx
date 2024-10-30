import { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function Card({ title, children, className }: CardProps) {
  return (
    <>
      {title && (
        <h1 className="text-lg lg:text-2xl font-semibold dark:text-slate-100 -mb-4">
          {title}
        </h1>
      )}
      <div
        className={`flex flex-col gap-5 py-7 px-6 rounded-3xl bg-slate-200/50 dark:bg-slate-800 ${className}`}
      >
        {children}
      </div>
    </>
  );
}
