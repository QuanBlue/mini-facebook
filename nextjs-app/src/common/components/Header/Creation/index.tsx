import React, { useEffect, useState } from "react";
import { useCreatePostContext } from "@components/CreatePostTable/context";
import { CreateIcon } from "@public/svg-icon";
import PostScope from "@components/CreatePostTable/PostScope";
import CreatePost from "@components/CreatePostTable/CreatePost";
import Modal from "@components/Modal";
import { useDropDown } from "@components/Button/DropDown/context";

function Creation() {
   let [isModalOpen, setIsModalOpen] = useState(false);
   const context = useCreatePostContext();
   const dropDownContext = useDropDown();

   useEffect(() => {
      if (isModalOpen && dropDownContext?.setIsAutoClose) {
         dropDownContext.setIsAutoClose(false);
      } else if (
         !isModalOpen &&
         dropDownContext.isOpen &&
         !dropDownContext.isAutoClose
      ) {
         dropDownContext.setIsOpen(false);

         if (dropDownContext?.setIsAutoClose)
            dropDownContext.setIsAutoClose(true);
      }
   }, [isModalOpen]);

   return (
      <div>
         <button
            className="flex w-full items-center gap-3 rounded-xl hover:bg-secondary"
            onClick={() => setIsModalOpen(true)}
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
         </button>

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
            // <>dawd</>
         )}
      </div>
   );
}

export default Creation;
