import React from "react";
import Image from "next/image";
import { DownArrowSolidIcon, PrivateIcon } from "@public/svg-icon";
import avt from "@public/avt.jpg";
import pictureIcon from "@public/picture.png";
import { scopes, TypeScope } from "./PostScope";

interface CreatePostProps {
   setIsChooseScope: React.Dispatch<React.SetStateAction<boolean>>;
   scope: TypeScope;
}

function CreatePost({ setIsChooseScope, scope }: CreatePostProps) {
   return (
      <div className="grid gap-4 p-4">
         {/* content */}
         <div className="grid gap-4">
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
                        onClick={() => setIsChooseScope(true)}
                     >
                        {scope.icon}
                        <strong className="text-tiny">{scope.title}</strong>
                        <DownArrowSolidIcon />
                     </button>
                  </div>
               </div>
            </div>

            <div>
               <p className="text-left text-gray-txt ">
                  Thanh ơi, bạn đang nghĩ gì thế?
               </p>
            </div>

            <button className="rounded-lg border-[1px] border-solid border-hover-btn p-4 hover:bg-transparent">
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

         {/* footer */}
         <button className="rounded-lg bg-secondary-btn">
            <strong className="text-light-gray-txt">Đăng</strong>
         </button>
      </div>
   );
}

export default CreatePost;
