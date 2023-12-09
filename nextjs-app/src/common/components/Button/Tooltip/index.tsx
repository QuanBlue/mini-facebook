import React, { useState } from "react";

interface Props {
   describe?: string;
   children: React.ReactNode;
}

function Tooltip({ describe, children }: Props) {
   const [isTooltipVisible, setIsTooltipVisible] = useState(false);

   return (
      <div
         className="relative z-50 flex justify-center"
         onMouseEnter={() => setIsTooltipVisible(true)}
         onMouseLeave={() => setIsTooltipVisible(false)}
      >
         {children}
         <div
            className={`${
               isTooltipVisible ? "visible" : "invisible"
            } absolute -bottom-9 `}
         >
            <div className="rounded-lg bg-black opacity-70">
               <div className="px-3 py-2">
                  <p className="whitespace-nowrap text-tiny text-white">
                     {describe}
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Tooltip;
