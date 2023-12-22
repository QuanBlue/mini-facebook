import React from "react";
import NavBar from "./NavBar/";
import ViewSide from "./ViewSide/";
import FriendMobileResponsive from "./MobileResponsive";

function Friend() {
   return (
      <div>
         {/* > tablet responsive */}
         <div className="hidden flex-row-reverse tablet:flex">
            {/* nav side */}
            <div className="fixed left-0 z-50">
               <NavBar />
            </div>

            {/* content */}
            <div className="w-[calc(100vw-300px)]">
               <ViewSide />
            </div>
         </div>

         {/* mobile responsive */}
         <div className="block tablet:hidden">
            <FriendMobileResponsive />
         </div>
      </div>
   );
}

export default Friend;
