import React from "react";
import MobileFriendPage from "./MobileFriendPage";
import DesktopFriendPage from "./DesktopFriendPage";

function FriendPage() {
   return (
      <div>
         {/* Desktop responsive */}
         <div className="hidden flex-row-reverse tablet:flex">
            <DesktopFriendPage />
         </div>

         {/* Mobile responsive */}
         <div className="block tablet:hidden">
            <MobileFriendPage />
         </div>
      </div>
   );
}

export default FriendPage;
