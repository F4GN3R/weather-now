import Skeleton from "../Skeleton";

type AirConditionInformationProps = {
  icon?: JSX.Element;
  name: string;
  value: number | string | null;
  className?: string;
};

export default function AirConditionInformation({
  icon,
  name,
  value,
  className,
}: AirConditionInformationProps) {
  return (
    <div className={`flex gap-2 md:gap-3 w-6/12 ${className}`}>
      {icon}
      <div className="flex-col text-base md:text-lg">
        <p className="text-xs mb-1 uppercase text-slate-500 dark:text-slate-400 md:text-sm lg:normal-case lg:text-base">
          {name}
        </p>
        {value !== null ? (
          <b className="font-semibold text-slate-800 dark:text-slate-300 md:text-xl lg:text-2xl">
            {value}
          </b>
        ) : (
          <Skeleton className="w-16 h-7" />
        )}
      </div>
    </div>
  );
}
