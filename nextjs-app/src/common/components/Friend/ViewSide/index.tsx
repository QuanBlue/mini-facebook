import React from "react";
import FriendHome from "./FriendHome";
import { useFriend } from "../context";
import FriendDetail from "./FriendDetail";

function ViewSide() {
   const friendContext = useFriend();
   return (
      <div className="flex flex-col items-center justify-center">
         {friendContext.query === "home" ? <FriendHome /> : <FriendDetail />}
      </div>
   );
}

export default ViewSide;
