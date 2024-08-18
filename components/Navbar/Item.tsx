'use client';

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"

export const Item = ({
  children,
  className
}: Readonly<{children: React.ReactNode; className?: string}>
) => {
  const path = usePathname();
  const active = 
    path === children!.toString().toLowerCase().split(" ").join("-") ||
    (path === "/" && children === "Home");

  return (
    <div className={
        cn(
          "hover:cursor-pointer hover:text-[#f0f0f0] transition-all duration-300 font-semibold", 
          className, 
          active && ''
        )
      }
    >
      {children}
    </div>
  )
}