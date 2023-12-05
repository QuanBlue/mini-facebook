import React, { useEffect, useState } from "react";
import avt from "@public/avt.jpg";
import Image from "next/image";
import { CloseIcon } from "@public/svg-icon";

function MinimizeChat() {
   let [isHover, setIsHover] = useState(false);

   useEffect(() => {
      console.log("isHover:", isHover);
   });

   return (
      <div className="relative ">
         <div className="absolute bottom-0 right-0 h-full">
            <div className="relative h-full w-[305px]">
               {/* preview message - on hover */}
               {isHover && (
                  <div>
                     <div className="shadow-pre_message absolute -top-1 left-0 grid w-[230px] gap-1 rounded-[8px] bg-white p-3">
                        <strong className="">Anh Tu Nguyen</strong>

                        <div className="w-full overflow-hidden">
                           <p className="text-gray-txt">
                              adawawawwwwwwwwwwwwwdwadawdawdawdawdawddwa
                           </p>
                        </div>
                     </div>
                  </div>
               )}
            </div>
         </div>

         {/* button */}
         <button
            className={`relative h-[48px] w-[48px] rounded-full  p-0 ${
               isHover ? "shadow-md" : "border-none"
            }`}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
         >
            <Image
               src={avt}
               alt="avatar"
               width={48}
               height={48}
               className="rounded-full"
            />

            {/* online dot */}
            <div className="absolute bottom-0 right-0  h-3 w-3 rounded-full border-[2px] border-solid border-white bg-active-status"></div>

            {/* close button */}
            {isHover && (
               <button className="absolute -right-1 -top-1  h-5 w-5 rounded-full  bg-gray p-0 shadow-modal">
                  <div className="grid items-center justify-center">
                     <CloseIcon height={8} width={8} />
                  </div>
               </button>
            )}
         </button>
      </div>
   );
}

export default MinimizeChat;
