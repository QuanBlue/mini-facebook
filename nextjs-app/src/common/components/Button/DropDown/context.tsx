import React, { useState, useContext, createContext, useEffect } from "react";

export interface DropDownContextProps {
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
   isAutoClose?: boolean;
   setIsAutoClose?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DropDownContext = createContext<DropDownContextProps | null>(null);

// Custom hook
export const useDropDown = () => {
   const context = useContext(DropDownContext);

   if (!context) {
      throw new Error("useDropDown must be used within a DropDownProvider");
   }

   return context;
};

// Provider
function DropDownProvider({ children }: React.PropsWithChildren<{}>) {
   let [isOpen, setIsOpen] = useState(false);
   let [isAutoClose, setIsAutoClose] = useState(true);

   const contextValue: DropDownContextProps = {
      isOpen,
      setIsOpen,
      isAutoClose,
      setIsAutoClose,
   };

   useEffect(() => {
      console.log("isOpen", isOpen);
   }, [isOpen]);

   return (
      <DropDownContext.Provider value={contextValue}>
         {children}
      </DropDownContext.Provider>
   );
}

export default DropDownProvider;
