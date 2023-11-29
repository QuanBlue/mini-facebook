import React, { useState } from "react";
import Tooltip from "./Tooltip";

interface Props {
   describe: string;
   children: React.ReactNode;
}

function TooltipButton({ describe, children }: Props) {
   const [isTooltipVisible, setIsTooltipVisible] = useState(false);

   return (
      <div
         className="relative flex justify-center"
         onMouseEnter={() => setIsTooltipVisible(true)}
         onMouseLeave={() => setIsTooltipVisible(false)}
      >
         {children}

         <Tooltip
            describe={describe}
            className={isTooltipVisible ? "visible" : "invisible"}
         />
      </div>
   );
}

export default TooltipButton;
