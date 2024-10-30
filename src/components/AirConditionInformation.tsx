type AirConditionInformationProps = {
  icon?: JSX.Element;
  name: string;
  value: number | string;
};

export default function AirConditionInformation({
  icon,
  name,
  value,
}: AirConditionInformationProps) {
  return (
    <div className="flex gap-3 w-6/12">
      {icon}
      <div className="flex-col text-lg lg:mt-1">
        <p className="mb-1 lg:text-xl text-slate-500 dark:text-slate-400">
          {name}
        </p>
        <b className="font-semibold text-slate-800 dark:text-slate-300 lg:text-3xl">
          {value}
        </b>
      </div>
    </div>
  );
}
