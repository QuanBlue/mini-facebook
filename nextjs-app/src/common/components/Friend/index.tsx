import React from "react";
import NavBar from "./NavBar";
import ViewSide from "./ViewSide/";

function Friend() {
   return (
      <div className="flex">
         {/* nav side */}
         <NavBar />

         {/* content */}
         <ViewSide />
      </div>
   );
}

export default Friend;
