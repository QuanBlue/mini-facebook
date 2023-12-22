import React from "react";
import { useFriend } from "@components/Friend/context";

import FriendDetail from "./FriendDetail";
import Default from "./Default";

function NavBar() {
   const friendContext = useFriend();

   return (
      <div className="h-[calc(100vh-56px)]  w-friend-page-nav-bar overflow-hidden bg-white shadow-md">
         {friendContext.query === "home" ? <Default /> : <FriendDetail />}
      </div>
   );
}

export default NavBar;
