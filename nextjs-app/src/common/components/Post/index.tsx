import React from "react";
import avt from "@public/avt.jpg";
import Image from "next/image";
import { PublicIcon, LikeReactionIcon } from "@public/svg-icon";
import commentIconSolid from "@public/commentIconSolid.png";
import commentIcon from "@public/commentIcon.png";
import likeIcon from "@public/likeIcon.png";
import Comment from "./Comment";

function Post() {
   return (
      <div className="grid w-full gap-3 rounded-lg  bg-white py-3 shadow-md">
         {/* title + description */}
         <div className="grid gap-3 px-4">
            <div className="flex gap-3">
               {/* avatar */}
               <button className="relative h-[38px] w-[38px] overflow-hidden rounded-full">
                  <Image src={avt} layout="fill" alt="user-avatar" />
               </button>

               {/* Name, time */}
               <div>
                  <a href="#" className="no-underline hover:underline">
                     <strong>Những con vật dễ thương nhất quả đất</strong>
                  </a>

                  {/* time */}
                  <div className="flex items-center gap-1">
                     <p>
                        <a
                           href="#"
                           className="text-gray-txt my-1 text-[12px] no-underline"
                        >
                           1 giờ
                        </a>
                     </p>
                     {/* dot */}
                     <div className="h-[2px] w-[2px] rounded-full bg-header-text" />
                     <PublicIcon />
                  </div>
               </div>
            </div>

            <div>
               Tròi oi năm 2024 rồi đừng có dùng mấy khay để bánh kẹo truyền
               thống nữaaa Tết gòi sắm mới đi mấy keo ơi có 49 cành hoyyy
            </div>
         </div>

         {/* image */}
         <img
            src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/404689916_736093908551057_4164295816179904700_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEpkzrxfiOFObWrHDj1cyrxrMrpw7YThb6syunDthOFvnQooGsyebRcvz6Nsfyy0iW-jq9TgnTTktcO5p3pkL2P&_nc_ohc=QtIyN5lqsDkAX9UzU-Q&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfCaJ1rbJ6kUHyOK343JWTy5KD0dAfzm6Uy_gEn3gz5iYQ&oe=656B894F"
            alt="picture"
            className="w-full object-fill"
         />

         <div className="px-4">
            {/* reaction */}
            <div className=" mx-4 flex justify-between py-2">
               <div className="flex items-center gap-2">
                  <LikeReactionIcon />
                  <p className="text-gray-txt">200</p>
               </div>

               <div className="flex gap-2">
                  <p className="text-gray-txt">20</p>
                  <Image src={commentIconSolid} alt="comment" />
               </div>
            </div>

            {/* interaction */}
            <div className="my-2 flex justify-around border-0 border-y border-solid border-hover-btn py-1">
               {/* Like */}
               <button className="hover:bg-gray flex flex-auto items-center justify-center gap-2 rounded-xl">
                  <Image src={likeIcon} alt="like icon" />
                  <strong className="text-gray-txt">Thích</strong>
               </button>

               {/* comment */}
               <button className="hover:bg-gray flex flex-auto items-center justify-center gap-2 rounded-xl">
                  <Image src={commentIcon} alt="comment icon" />
                  <strong className="text-gray-txt">Bình luận</strong>
               </button>
            </div>

            {/* comment */}
            <div className="mt-6">
               <Comment />
            </div>
            {/* Write comment */}
         </div>
      </div>
   );
}

export default Post;
