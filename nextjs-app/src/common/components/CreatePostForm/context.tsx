import React, { useState, useContext, createContext, useEffect } from "react";
import { scopes, TypeScope } from "./index";

export interface CreatePostContextProps {
   scope: TypeScope;
   setScope: React.Dispatch<React.SetStateAction<TypeScope>>;
   isChooseScope: boolean;
   setIsChooseScope: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CreatePostContext = createContext<CreatePostContextProps | null>(
   null,
);

// Custom hook
export const useCreatePostContext = () => {
   const context = useContext(CreatePostContext);

   if (!context) {
      throw new Error(
         "useCreatePostContext must be used within a CreatePostProvider",
      );
   }

   return context;
};

// Provider
function CreatePostProvider({ children }: React.PropsWithChildren<{}>) {
   let [isChooseScope, setIsChooseScope] = useState(false);
   let [scope, setScope] = React.useState<TypeScope>(scopes[0]);

   const contextValue: CreatePostContextProps = {
      scope,
      setScope,
      isChooseScope,
      setIsChooseScope,
   };

   return (
      <CreatePostContext.Provider value={contextValue}>
         {children}
      </CreatePostContext.Provider>
   );
}

export default CreatePostProvider;
