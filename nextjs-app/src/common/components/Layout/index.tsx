import Header from "@components/Header";
import { useRouter } from "next/router";
import ChatBoxController from "@components/Chat/ChatBoxController";
import React from "react";

function Layout({ children }: React.PropsWithChildren<{}>) {
   const router = useRouter();
   const showHeader = router.pathname !== "/login";
   return (
      <div>
         {showHeader && <Header />}
         <div className="relative top-[117px] w-full tablet:top-[56px]">
            {children}

            {/* Chat box */}
            <div className="fixed bottom-0 right-0">
               <ChatBoxController />
            </div>
         </div>
      </div>
   );
}

export default Layout;
