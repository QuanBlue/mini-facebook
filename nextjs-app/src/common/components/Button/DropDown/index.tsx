import React, { useEffect, useRef, useState } from "react";
import Tooltip from "../Tooltip";

interface DropDownProps {
   title: string;
   tooltip?: string;
   btn_className?: string;
   btn_icon?: React.ReactNode;
   btn_icon_active?: React.ReactNode;
   body?: React.ReactNode;
   footer?: React.ReactNode;
}

// Hook to handle clicks outside an element
const useClickOutside = (handler: () => void) => {
   const ref = useRef<HTMLInputElement>(null);

   const handleClick = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
         handler();
      }
   };

   useEffect(() => {
      document.addEventListener("click", handleClick);

      return () => {
         document.removeEventListener("click", handleClick);
      };
   }, [handler]);

   return ref;
};

function DropDown({
   title,
   tooltip,
   btn_className,
   btn_icon,
   btn_icon_active,
   body,
   footer,
}: DropDownProps) {
   let [isOpen, setIsOpen] = useState(false);
   const dropdown = useClickOutside(() => setIsOpen(false));

   return (
      <div ref={dropdown}>
         <Tooltip describe={tooltip}>
            <button
               className={`${btn_className} ${
                  isOpen ? "bg-primary-btn" : "bg-secondary-btn"
               }`}
               onClick={() => setIsOpen(!isOpen)}
            >
               {isOpen ? btn_icon_active : btn_icon}
            </button>
         </Tooltip>

         {isOpen && (
            <div className="relative">
               <div className="absolute bottom-0 right-0">
                  <div className="relative">
                     <div className="absolute -right-2 top-2 rounded-xl bg-white  shadow-modal">
                        <div className="px-4 py-3">
                           {/* title */}
                           <h1 className="mb-4 mt-2 text-regular-big">
                              {title}
                           </h1>

                           {/* body */}
                           <div className="scroll max-h-dropdown-menu w-dropdown-menu">
                              {body}
                           </div>
                        </div>

                        {/* footer */}
                        {footer && (
                           <div className="border-0 border-t border-solid border-hover-btn py-4 text-center">
                              {footer}
                           </div>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
}

export default DropDown;
