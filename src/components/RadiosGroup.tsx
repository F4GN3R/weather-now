import { Radio, RadioGroup } from "@headlessui/react";

type RadiosGroupProps = {
  title: string;
  value: string;
  onChange: (value: string) => void;
  labels: string[];
  options: string[];
};

export default function RadiosGroup({
  title,
  value,
  onChange,
  labels,
  options,
}: RadiosGroupProps) {
  const enableBars = (index: number): string => {
    return options.length > 2 && index > 0 && value !== options[index - 1]
      ? "border-l-[0.05rem] group-data-[checked]:border-none"
      : "";
  };

  return (
    <div className="flex flex-col gap-3">
      <h4 className="text-sm lg:text-base font-semibold uppercase text-slate-500/70 dark:text-slate-400">
        {title}
      </h4>
      <RadioGroup
        value={value}
        onChange={onChange}
        aria-label={title}
        className="flex w-full bg-slate-400/50 dark:bg-slate-950 p-1 rounded-xl"
      >
        {options.map((option, index) => (
          <Radio
            key={option}
            value={option}
            className="group flex flex-1 justify-center cursor-pointer rounded-lg py-1.5 lg:py-1 data-[checked]:bg-slate-200/80 dark:data-[checked]:bg-slate-700"
          >
            <p
              className={`text-sm lg:text-base bg-transparent text-slate-700 group-data-[checked]:text-slate-800 dark:text-slate-400 dark:group-data-[checked]:text-slate-100 w-full text-center border-x-slate-500/80 ${enableBars(
                index
              )}`}
            >
              {labels[index]}
            </p>
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
}
