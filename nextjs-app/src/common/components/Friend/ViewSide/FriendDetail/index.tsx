import React from "react";
import Default from "./Default";
import { useFriend } from "@components/Friend/context";
import PersonalPage from "@modules/PersonalPage";

function FriendDetail() {
   const friendContext = useFriend();

   return (
      <div className="w-full">
         {friendContext.viewFriend ? <PersonalPage /> : <Default />}
      </div>
   );
}
export default FriendDetail;
