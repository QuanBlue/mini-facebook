import React from "react";
import NavBar from "./NavBar/";
import ViewSide from "./ViewSide/";

function Friend() {
   return (
      <div className="flex flex-row-reverse">
         {/* nav side */}
         <div className="fixed left-0">
            <NavBar />
         </div>

         {/* content */}
         <div className="w-[calc(100vw-360px)]">
            <ViewSide />
         </div>
      </div>
   );
}

export default Friend;
