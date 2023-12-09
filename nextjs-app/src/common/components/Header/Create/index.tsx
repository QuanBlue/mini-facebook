import React, { useState } from "react";
import { useCreatePostContext } from "@components/CreatePostForm/context";
import { CreateIcon } from "@public/svg-icon";
import PostScope from "@components/CreatePostForm/CreatePostTable/PostScope";
import CreatePost from "@components/CreatePostForm/CreatePostTable/CreatePost";
import Modal from "@components/Modal";

function Create() {
   let [isModalOpen, setIsModalOpen] = useState(false);
   const context = useCreatePostContext();

   return (
      <button
         className="flex w-full items-center gap-3 rounded-xl hover:bg-secondary"
         onClick={() => setIsModalOpen(!isModalOpen)}
      >
         {/* icon */}
         <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-btn">
            <CreateIcon fill="#000" height={18} width={18} />
         </div>

         {/* content */}
         <div className="grid content-normal gap-1">
            <p className="text-left">Đăng</p>
            <div className=" overflow-hidden">
               <p className="truncate text-tiny text-gray-txt">
                  Chia sẻ bài viết trên Bảng tin.
               </p>
            </div>
         </div>

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
      </button>
   );
}

export default Create;
