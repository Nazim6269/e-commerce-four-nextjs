"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import React from "react";

const Modal: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Dialog>
      <DialogContent className="sm:max-w-[425px] ">{children}</DialogContent>
    </Dialog>
  );
};
export default Modal;
