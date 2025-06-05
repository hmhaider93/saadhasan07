import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-green-100 dark:bg-green-900/20", className)}
      {...props}
    />
  )
}

export { Skeleton }
