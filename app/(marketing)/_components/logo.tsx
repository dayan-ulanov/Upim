import Image from "next/image";
import { Montserrat } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500"]
})

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/UpimPrimary.svg"
        height="40"
        width="40"
        alt="Logo"
      />
      <p className={cn("font-semibold text-2xl", font.className)}>
        Upim
      </p>
    </div>
  );
}