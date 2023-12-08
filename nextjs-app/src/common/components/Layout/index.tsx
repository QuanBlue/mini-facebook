import Header from "@components/Header";
import { useRouter } from "next/router";
import ChatBoxArea from "@components/Chat/ChatBoxArea";
import React from "react";
import ChatProvider from "@components/Chat/context";

function Layout({ children }: React.PropsWithChildren<{}>) {
   const router = useRouter();
   const showHeader = router.pathname !== "/login";
   return (
      <ChatProvider>
         <div>
            {showHeader && <Header />}
            <div className="relative top-[117px] w-full tablet:top-[56px]">
               {children}

               {/* Chat box */}
               <div className="fixed bottom-0 right-0">
                  <ChatBoxArea />
               </div>
            </div>
         </div>
      </ChatProvider>
   );
}

export default Layout;
