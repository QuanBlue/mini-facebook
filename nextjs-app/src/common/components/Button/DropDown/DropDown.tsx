import React, { useEffect, useRef, useState } from "react";
import Tooltip from "../Tooltip";
import { DropDownProps } from ".";
import { useDropDown } from "./context";

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

function DropDownComponent({
   title,
   tooltip,
   btn_className,
   btn_icon,
   btn_icon_active,
   body,
   footer,
}: DropDownProps) {
   const context = useDropDown();

   const dropdown = context.isAutoClose
      ? useClickOutside(() => context.setIsOpen(false))
      : null;

   if (btn_icon && !btn_icon_active) {
      btn_icon_active = btn_icon;
   }

   return (
      <div ref={dropdown}>
         <Tooltip describe={tooltip}>
            <button
               className={`${btn_className} ${
                  context.isOpen ? "bg-primary-btn" : "bg-secondary-btn"
               }`}
               onClick={() => context.setIsOpen(!context.isOpen)}
            >
               {context.isOpen ? btn_icon_active : btn_icon}
            </button>
         </Tooltip>

         {context.isOpen && (
            <div className="relative">
               <div className="absolute bottom-0 right-0">
                  <div className="relative">
                     <div className="absolute -right-2 top-2 rounded-xl bg-white  shadow-modal">
                        <div className="px-4">
                           {/* title */}
                           {title && (
                              <h1 className=" mt-6 text-regular-big">
                                 {title}
                              </h1>
                           )}

                           {/* body */}
                           <div className="scroll max-h-dropdown-menu w-dropdown-menu py-4">
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

export default DropDownComponent;
