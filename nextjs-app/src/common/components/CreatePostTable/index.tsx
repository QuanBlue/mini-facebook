import React from "react";
import Image from "next/image";
import avatar from "@public/avt.jpg";
import pictureIcon from "@public/picture.png";
import Modal from "./Modal";

function CreatePostTable() {
   return (
      <div className="h-28 rounded-lg bg-white px-4 py-3 shadow-md">
         {/* modal */}
         {/* <Modal /> */}

         {/* input field */}
         <div className="tablet:flex-col flex flex-row">
            <div className="flex flex-auto items-center gap-3">
               <button className="tablet:h-[40px] tablet:w-[40px] relative h-[48px] w-[48px] overflow-hidden rounded-full">
                  <Image src={avatar} layout="fill" alt="user-avatar" />
               </button>
               <button className="w-full rounded-2xl border-none bg-secondary px-4 py-3 hover:bg-hover-btn">
                  <p className="text-regular text-left text-gray-txt">
                     Thanh ơi, bạn đang nghĩ gì thế?
                  </p>
               </button>
            </div>

            {/* attach */}
            <div className=" tablet:border-t mt-3 border-0 border-solid border-hover-btn pt-2">
               <button className="tablet:flex-row flex flex-col items-center justify-center gap-3 rounded-lg">
                  <Image
                     src={pictureIcon}
                     width={24}
                     height={24}
                     alt="picture"
                  />

                  {/* > tablet */}
                  <strong className="tablet:block hidden text-gray-txt">
                     Ảnh/video
                  </strong>

                  {/* < tablet */}
                  <strong className="tablet:hidden block text-gray-txt">
                     Ảnh
                  </strong>
               </button>
            </div>
         </div>
      </div>
   );
}

export default CreatePostTable;
