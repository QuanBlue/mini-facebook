import React from "react";

interface Props {
   describe: string;
   className?: string;
}

function Tooltip({ describe, className }: Props) {
   return (
      <div
         className={`bg-black absolute -bottom-9 rounded-lg opacity-70  ${className}`}
      >
         <div className="px-3 py-2">
            <p className="whitespace-nowrap text-[12px] text-white">
               {describe}
            </p>
         </div>
      </div>
   );
}

export default Tooltip;
