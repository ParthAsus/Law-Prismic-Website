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
              <DialogTitle>{jobTitle}</DialogTitle>
            </DialogHeader>
            {/* <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  className="w-full px-3 py-2 border rounded"
                  placeholder="Why are you a good fit for this role?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Submit Application
              </button>
            </form> */}

            <CareerForm jobTitle={jobTitle}/>
          </DialogContent>
        </Dialog>
      )}        
    </div>
  )
}

export default CareerButton;

