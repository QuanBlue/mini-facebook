import React, { useState } from "react";
import CreatePostProvider from "./context";
import { FriendSolidIcon, PrivateIcon, PublicIcon } from "@public/svg-icon";
import CreatePostTable from "./CreatePostTable";

export interface TypeScope {
   title: string;
   id: string;
   description?: string;
   icon: React.ReactNode;
}

export const scopes = [
   {
      title: "Công khai",
      id: "public",
      description: "Bất kỳ ai ở trên hoặc ngoài Facebook",
      icon: <PublicIcon fill="#000000" width={12} height={12} />,
   },
   {
      title: "Bạn bè",
      id: "friend",
      description: "Bạn bè của bạn trên Facebook",
      icon: <FriendSolidIcon fill="#000000" width={12} height={12} />,
   },
   {
      title: "Chỉ mình tôi",
      id: "private",
      description: "",
      icon: <PrivateIcon fill="#000000" width={12} height={12} />,
   },
];

function CreatePostForm() {
   return (
      // <CreatePostProvider>
      <CreatePostTable />
      // </CreatePostProvider>
   );
}

export default CreatePostForm;
