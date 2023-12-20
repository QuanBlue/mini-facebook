import React from "react";
import Default from "./Default";
import FriendHome from "./FriendHome";
import { useFriend } from "../context";

function ViewSide() {
   const friendContext = useFriend();
   return (
      <div className="flex flex-col items-center justify-center">
         {friendContext.query === "home" ? <FriendHome /> : <Default />}
      </div>
   );
}

export default ViewSide;
