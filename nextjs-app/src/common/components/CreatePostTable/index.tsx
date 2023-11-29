import React from "react";
import Image from "next/image";
import avatar from "@public/avt.jpg";
import pictureIcon from "@public/picture.png";
import Modal from "./Modal";

function CreatePostTable() {
   return (
      <div className="mt-5 h-28 rounded-lg bg-white px-4 py-3 shadow-md">
         {/* modal */}
         {/* <Modal /> */}

         {/* input field */}
         <div className="flex items-center gap-3">
            <button className="relative h-[40px] w-[40px] overflow-hidden rounded-full">
               <Image src={avatar} layout="fill" alt="user-avatar" />
            </button>
            <button className="w-full rounded-2xl border-none bg-secondary px-3 py-2 hover:bg-hover-btn">
               <p className="text-gray-txt text-left text-[18px]">
                  Thanh ơi, bạn đang nghĩ gì thế?
               </p>
            </button>
         </div>

         {/* attach */}
         <div className=" mt-3 border-0 border-t border-solid border-hover-btn pt-2">
            <button className="flex items-center justify-center gap-3 rounded-lg">
               <Image src={pictureIcon} width={24} height={24} alt="picture" />
               <strong className="text-gray-txt">Ảnh/video</strong>
            </button>
         </div>
      </div>
   );
}

export default CreatePostTable;
