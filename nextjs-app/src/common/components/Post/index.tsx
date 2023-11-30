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
      <div className="grid w-full gap-3 rounded-lg bg-white py-3 shadow-md">
         {/* title + description */}
         <div className="grid gap-3 px-4">
            <div className="flex gap-3">
               {/* avatar */}
               <button className="tablet:h-[38px] tablet:w-[38px] relative h-[48px] w-[48px] overflow-hidden rounded-full">
                  <Image src={avt} layout="fill" alt="user-avatar" />
               </button>

               {/* Name, time */}
               <div className="flex flex-col justify-center">
                  <a href="#" className="no-underline hover:underline">
                     <strong className="text-regular">
                        Những con vật dễ thương nhất quả đất
                     </strong>
                  </a>

                  {/* time */}
                  <div className="flex items-center gap-1">
                     <p>
                        <a
                           href="#"
                           className="text-tiny my-1 text-gray-txt no-underline"
                        >
                           1 giờ
                        </a>
                     </p>
                     {/* dot */}
                     <div className="bg-header-text h-[2px] w-[2px] rounded-full" />
                     <PublicIcon />
                  </div>
               </div>
            </div>

            <div>
               <p className="text-regular">
                  Tròi oi năm 2024 rồi đừng có dùng mấy khay để bánh kẹo truyền
                  thống nữaaa Tết gòi sắm mới đi mấy keo ơi có 49 cành hoyyy
               </p>
            </div>
         </div>

         {/* image */}
         <div className="flex justify-center">
            <img
               src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/404689916_736093908551057_4164295816179904700_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEpkzrxfiOFObWrHDj1cyrxrMrpw7YThb6syunDthOFvnQooGsyebRcvz6Nsfyy0iW-jq9TgnTTktcO5p3pkL2P&_nc_ohc=QtIyN5lqsDkAX9UzU-Q&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfCaJ1rbJ6kUHyOK343JWTy5KD0dAfzm6Uy_gEn3gz5iYQ&oe=656B894F"
               alt="picture"
               className="tablet:h-auto h-[400px] max-w-[500px] object-fill"
            />
         </div>

         <div className="px-4">
            {/* reaction */}
            <div className=" mx-4 flex justify-between py-2">
               <div className="flex items-center gap-2">
                  <LikeReactionIcon />
                  <div className="tablet:block hidden">
                     <p className="text-gray-txt">200</p>
                  </div>
               </div>

               <div className="tablet:flex hidden gap-2">
                  <p className="text-gray-txt">20</p>
                  <Image src={commentIconSolid} alt="comment" />
               </div>
            </div>

            {/* interaction */}
            <div className="tablet:border-y my-2 flex justify-around gap-4 border-0 border-b border-solid border-hover-btn py-1">
               {/* Like */}
               <button className="tablet:bg-transparent flex flex-auto items-center justify-center gap-2 rounded-xl bg-secondary hover:bg-gray">
                  <Image src={likeIcon} alt="like icon" />

                  <div>
                     {/* > tablet */}
                     <strong className="tablet:block hidden text-gray-txt">
                        Thích
                     </strong>

                     {/* mobile */}
                     <p className="tablet:hidden block text-gray-txt">200</p>
                  </div>
               </button>

               {/* comment */}
               <button className="tablet:bg-transparent flex flex-auto items-center justify-center gap-2 rounded-xl bg-secondary hover:bg-gray">
                  <Image src={commentIcon} alt="comment icon" />

                  <div>
                     {/* > tablet */}
                     <strong className="tablet:block hidden text-gray-txt">
                        Bình luận
                     </strong>

                     {/* mobile */}
                     <p className="tablet:hidden block text-gray-txt">20</p>
                  </div>
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
