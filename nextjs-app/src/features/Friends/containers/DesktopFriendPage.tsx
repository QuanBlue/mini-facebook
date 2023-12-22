import React from "react";
import NavBar from "../components/NavBar";
import InspectView from "../components/InspectView";

function DesktopFriendPage() {
   return (
      <div>
         {/* nav side */}
         <div className="fixed left-0 z-50">
            <NavBar />
         </div>

         {/* content */}
         <div className="w-[calc(100vw-300px)]">
            <InspectView />
         </div>
      </div>
   );
}

export default DesktopFriendPage;
