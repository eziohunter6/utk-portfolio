"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Drawer from "@/components/ui/Drawer";

export default function WorkModalTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    setIsOpen(false);
  };

  const onCloseComplete = () => {
    router.back();
  };

  return (
    <Drawer open={isOpen} onClose={onClose} onCloseComplete={onCloseComplete}>
      {children}
    </Drawer>
  );
}
