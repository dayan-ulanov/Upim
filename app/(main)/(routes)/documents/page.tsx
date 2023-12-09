"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";

import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import { toast } from "sonner";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);

  const onCreate = () => {
    const promise = create({title: "Untitled"});

    toast.promise(promise, {
      loading: "Create a new note...",
      success: "New note created!",
      error: "Failed to create a new note."
    });
  };

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
      <Button onClick={onCreate}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create Note
      </Button>
    </div>
   );
}
 
export default DocumentsPage;