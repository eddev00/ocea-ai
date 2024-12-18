import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        " h-full mx-auto w-full max-w-[1024px]  px-[16px]  flex flex-col justify-center",
        className
      )}
    >
        {children}
    </div>
  );
};

export default MaxWidthWrapper;