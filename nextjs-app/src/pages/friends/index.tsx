import React from "react";
import Friend from "@components/Friend";
import FriendProvider from "@components/Friend/context";

function Friends() {
   return (
      <FriendProvider>
         <Friend />
      </FriendProvider>
   );
}

export default Friends;
