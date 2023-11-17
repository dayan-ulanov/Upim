"use client";

import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import Image from "next/image";

const DocumentsPage = () => {
  const { user } = useUser();

  return (
    <div className="h-full flex flex-col items-center justify-center space-y-4">
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty"
      />
      <h2 className="text-lg font-semibold">
        Welcome to {user?.firstName}&apos;s Upim
      </h2>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create Note
      </Button>
    </div>
   );
}
 
export default DocumentsPage;