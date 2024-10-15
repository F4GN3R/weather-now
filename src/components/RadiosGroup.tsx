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
  return (
    <div className="flex flex-col gap-2">
      <h4 className="text-base font-semibold uppercase dark:text-slate-400">
        {title}
      </h4>
      <RadioGroup
        value={value}
        onChange={onChange}
        aria-label={title}
        className="flex w-full dark:bg-slate-950 p-1 rounded-xl"
      >
        {options.map((option, index) => (
          <Radio
            key={option}
            value={option}
            className="group flex flex-1 justify-center cursor-pointer rounded-lg py-1 data-[checked]:bg-slate-700"
            // className="group relative flex flex-1 cursor-pointer rounded-lg bg-white/5 py-4 px-5 text-white shadow-md transition focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-white/10"
          >
            <p className="bg-transparent dark:text-slate-400 group-data-[checked]:text-slate-100">
              {labels[index]}
            </p>
          </Radio>
        ))}
      </RadioGroup>
    </div>
  );
}
