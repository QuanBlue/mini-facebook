import React from "react";
import Image from "next/image";
import { DownArrowSolidIcon } from "@public/svg-icon";
import avt from "@public/avt.jpg";
import pictureIcon from "@public/picture.png";
import { useCreatePostContext } from "../context";

function CreatePost() {
   const context = useCreatePostContext();

   return (
      <div className="grid gap-4 p-4">
         {/* content */}
         <div className="flex flex-col gap-4">
            <div>
               <div className="flex gap-3">
                  {/* avatar */}
                  <button className="relative h-[38px] w-[38px] overflow-hidden rounded-full">
                     <Image src={avt} layout="fill" alt="user-avatar" />
                  </button>

                  {/* Name */}
                  <div className="grid gap-1">
                     <a href="#" className="no-underline hover:underline">
                        <strong>Thanh Quân</strong>
                     </a>

                     {/* post scope */}
                     <button
                        className="flex items-center gap-1 rounded-lg bg-secondary-btn px-2 py-1"
                        onClick={() => {
                           console.log("click");
                           context?.setIsChooseScope(true);
                        }}
                     >
                        {context?.scope.icon}
                        <strong className="text-tiny">
                           {context?.scope.title}
                        </strong>
                        <DownArrowSolidIcon />
                     </button>
                  </div>
               </div>
            </div>

            <div className="grid flex-auto items-start">
               <textarea
                  className="h-full resize-none rounded-none border-none p-0 text-big focus:outline-none"
                  placeholder="Thanh ơi, bạn đang nghĩ gì thế?"
               />
            </div>

            {/* footer */}
            <div>
               <button className="w-full rounded-lg border-[1px] border-solid border-hover-btn p-4 hover:bg-transparent">
                  <div className="flex items-center justify-between">
                     <strong>Thêm vào bài viết của bạn</strong>
                     <div className="circle-btn bg-transparent hover:bg-gray">
                        <Image
                           src={pictureIcon}
                           width={24}
                           height={24}
                           alt="picture"
                        />
                     </div>
                  </div>
               </button>
            </div>

            <button className="h-9 rounded-lg bg-secondary-btn">
               <strong className="text-light-gray-txt">Đăng</strong>
            </button>
         </div>
      </div>
   );
}

export default CreatePost;
