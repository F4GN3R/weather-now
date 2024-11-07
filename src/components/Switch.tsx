import { Switch } from "@headlessui/react";

type SwitchProps = {
  checked: boolean;
  onChange: (value: boolean) => void;
};

export default function CustomSwitch({ checked, onChange }: SwitchProps) {
  return (
    <Switch
      checked={checked}
      onChange={onChange}
      className="group inline-flex h-6 w-11 items-center rounded-full dark:bg-slate-700 transition data-[checked]:bg-indigo-600"
    >
      <span className="size-4 translate-x-1 rounded-full dark:bg-slate-400 transition group-data-[checked]:bg-slate-50 group-data-[checked]:translate-x-6" />
    </Switch>
  );
}
