"use client"
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import CareerForm from "./careerForm";


interface buttonProps{
  label: string;
  jobTitle: string;
}
const CareerButton = ({label, jobTitle}: buttonProps) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  }

  const handleModalClose = () => {
    setModalOpen(false);
  }
  return (
    <div>
      <button onClick={handleModalOpen} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          {label}
      </button>

      {isModalOpen && (
        <Dialog open={isModalOpen} onOpenChange={handleModalClose}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle></DialogTitle>
            </DialogHeader>
            <CareerForm jobTitle={jobTitle} handleModalClose={handleModalClose}/>
          </DialogContent>
        </Dialog>
      )}        
    </div>
  )
}

export default CareerButton;

