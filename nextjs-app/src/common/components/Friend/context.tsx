import React, { useState, useContext, createContext } from "react";

interface FriendContextProps {
   query: "home" | "list" | "request";
   setQuery: React.Dispatch<React.SetStateAction<"home" | "list" | "request">>;
}

const FriendContext = createContext<FriendContextProps | null>(null);

export function useFriend() {
   const context = useContext(FriendContext);
   if (!context) {
      throw new Error("useFriend must be used within a ChatProvider");
   }
   return context;
}

function FriendProvider({ children }: React.PropsWithChildren<{}>) {
   let [query, setQuery] = useState<"home" | "list" | "request">("home");

   const contextValue: FriendContextProps = {
      query,
      setQuery,
   };

   return (
      <FriendContext.Provider value={contextValue}>
         {children}
      </FriendContext.Provider>
   );
}

export default FriendProvider;
