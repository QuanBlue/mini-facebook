import Header from "@components/Header";
import { useRouter } from "next/router";
import React from "react";

function Layout({ children }: React.PropsWithChildren<{}>) {
   const router = useRouter();
   const showHeader = router.pathname !== "/login";
   return (
      <div>
         {showHeader && <Header />}
         <div className="relative top-[117px] w-full tablet:top-[56px]">
            {children}
         </div>
      </div>
   );
}

export default Layout;
