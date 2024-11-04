type SkeletonProps = {
  className: string;
};
export default function Skeleton({ className }: SkeletonProps) {
  return (
    <div
      className={`rounded-lg animate-pulse bg-slate-300 dark:bg-slate-600 ${className}`}
    />
  );
}
