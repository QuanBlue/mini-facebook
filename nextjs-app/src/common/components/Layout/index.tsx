import Header from "@components/Header";
import React from "react";

function Layout({ children }: React.PropsWithChildren<{}>) {
   return (
      <div>
         <Header />
         <div className="relative top-[56px] w-full">{children}</div>
      </div>
   );
}

export default Layout;
