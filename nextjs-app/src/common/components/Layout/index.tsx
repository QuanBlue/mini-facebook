import Header from "@components/Header";
import React from "react";

function Layout({ children }: React.PropsWithChildren<{}>) {
   return (
      <div>
         <Header />
         <div className="tablet:top-[56px] relative top-[117px] w-full">
            {children}
         </div>
      </div>
   );
}

export default Layout;
