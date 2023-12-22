import React from "react";
import { useFriend } from "@contexts/FriendContext";

import FriendNavBar from "./FriendNavBar";
import DefaultNavBar from "./DefaultNavBar";

function NavBar() {
   const friendContext = useFriend();

   return (
      <div className="h-[calc(100vh-56px)]  w-friend-page-nav-bar overflow-hidden bg-white shadow-md">
         {friendContext.query === "home" ? <DefaultNavBar /> : <FriendNavBar />}
      </div>
   );
}

export default NavBar;
