import React, { useState, useContext, createContext, useEffect } from "react";
import { FriendSolidIcon, PrivateIcon, PublicIcon } from "@public/svg-icon";

export interface TypeScope {
   title: string;
   id: string;
   description?: string;
   icon: React.ReactNode;
}

export const scopes = [
   {
      title: "Công khai",
      id: "public",
      description: "Bất kỳ ai ở trên hoặc ngoài Facebook",
      icon: <PublicIcon fill="#000000" width={12} height={12} />,
   },
   {
      title: "Bạn bè",
      id: "friend",
      description: "Bạn bè của bạn trên Facebook",
      icon: <FriendSolidIcon fill="#000000" width={12} height={12} />,
   },
   {
      title: "Chỉ mình tôi",
      id: "private",
      description: "",
      icon: <PrivateIcon fill="#000000" width={12} height={12} />,
   },
];

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
