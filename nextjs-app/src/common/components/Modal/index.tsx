import React, { ReactComponentElement } from "react";
import { CloseIcon, DownArrowSolidIcon, PrivateIcon } from "@public/svg-icon";

export interface ModalProps {
   header_title: string;
   body: React.ReactNode;
   setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ header_title, body, setIsModalOpen }: ModalProps) {
   return (
      <div>
         <div className="fixed left-0 top-0 z-50 h-screen w-screen">
            {/* Background */}
            <div
               className=" h-full w-full bg-white opacity-60"
               onClick={() => setIsModalOpen(false)}
            />

            {/* Foreground - Modal */}
            <div className="flex justify-center">
               <div className="absolute top-1/4 w-1/2 rounded-2xl bg-white shadow-modal">
                  {/* content here */}

                  {/* header */}
                  <div className=" flex border-0 border-b border-solid border-hover-btn px-4 py-2">
                     <div className="flex flex-auto items-center justify-center">
                        <h1>{header_title}</h1>
                     </div>

                     {/* close modal */}
                     <button
                        className="circle-btn h-[36px] w-[36px]"
                        onClick={() => setIsModalOpen(false)}
                     >
                        <CloseIcon />
                     </button>
                  </div>

                  <div className="grid gap-4 p-4">
                     {/* body */}
                     {body}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Modal;
