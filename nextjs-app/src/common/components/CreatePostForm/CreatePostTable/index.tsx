import React, { useState } from "react";
import Image from "next/image";
import avatar from "@public/avt.jpg";
import pictureIcon from "@public/picture.png";
import Modal from "@components/Modal";
import CreatePost from "./CreatePost";
import PostScope from "./PostScope";
import { useCreatePostContext } from "../context";
import { FriendSolidIcon, PrivateIcon, PublicIcon } from "@public/svg-icon";

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

function CreatePostTable() {
   const context = useCreatePostContext();
   let [isModalOpen, setIsModalOpen] = useState(true);

   return (
      <div className="h-28 rounded-lg bg-white px-4 py-3 shadow-md">
         {/* modal */}
         {isModalOpen && (
            <Modal
               header_title={
                  context?.isChooseScope
                     ? "Đối tượng của bài viết"
                     : "Tạo bài viết"
               }
               body={context?.isChooseScope ? <PostScope /> : <CreatePost />}
               canBack={context?.isChooseScope}
               clickBackAction={() => context?.setIsChooseScope(false)}
               setIsModalOpen={setIsModalOpen}
            />
         )}

         {/* header */}
         <div className="-mb-3 block tablet:hidden">
            <strong className="text-regular">Bài viết</strong>
         </div>

         {/* input field */}
         <div className="flex flex-row tablet:flex-col">
            <div className="flex flex-auto items-center gap-3">
               <button className="relative h-[48px] w-[48px] overflow-hidden rounded-full tablet:h-[40px] tablet:w-[40px]">
                  <Image src={avatar} layout="fill" alt="user-avatar" />
               </button>
               <button
                  className="w-full rounded-2xl border-none bg-secondary px-4 py-3 hover:bg-hover-btn"
                  onClick={() => setIsModalOpen(true)}
               >
                  <p className="text-left text-regular text-gray-txt">
                     Thanh ơi, bạn đang nghĩ gì thế?
                  </p>
               </button>
            </div>

            {/* attach */}
            <div className=" mt-3 border-0 border-solid border-hover-btn pt-2 tablet:border-t">
               <button
                  className="flex flex-col items-center justify-center gap-3 rounded-lg tablet:flex-row"
                  onClick={() => setIsModalOpen(true)}
               >
                  <Image
                     src={pictureIcon}
                     width={24}
                     height={24}
                     alt="picture"
                  />

                  {/* > tablet */}
                  <strong className="hidden text-gray-txt tablet:block">
                     Ảnh/video
                  </strong>

                  {/* mobile */}
                  <strong className="block text-gray-txt tablet:hidden">
                     Ảnh
                  </strong>
               </button>
            </div>
         </div>
      </div>
   );
}

export default CreatePostTable;
