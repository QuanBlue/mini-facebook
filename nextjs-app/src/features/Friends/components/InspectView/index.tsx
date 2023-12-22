import React from "react";
import FriendPageHome from "./FriendPageHome";
import { useFriend } from "@contexts/FriendContext";
import Profile from "@features/Profile/ProfilePage";
import BlankInspectView from "./BlankInspectView";

function InspectView() {
   const friendContext = useFriend();
   return (
      <div className="flex flex-col items-center justify-center">
         {friendContext.query === "home" ? (
            <FriendPageHome />
         ) : (
            <div className="w-full">
               {friendContext.viewFriend ? <Profile /> : <BlankInspectView />}
            </div>
         )}
      </div>
   );
}

export default InspectView;
