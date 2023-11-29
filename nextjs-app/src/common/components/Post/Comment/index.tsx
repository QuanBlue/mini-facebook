import React from "react";
import avt from "@public/avt.jpg";
import Image from "next/image";

function Comment() {
   return (
      <div className="grid gap-3 px-4">
         <div className="flex gap-3">
            {/* owner avatar */}
            <button className="relative h-[32px] w-[32px] overflow-hidden rounded-full">
               <Image src={avt} layout="fill" alt="user-avatar" />
            </button>

            {/* content */}
            <div className="grid gap-1">
               {/* owner name */}
               <div className="rounded-2xl bg-secondary px-3 py-2">
                  <a href="#" className="no-underline hover:underline">
                     <strong>Những con vật dễ thương nhất quả đất</strong>
                  </a>

                  {/* comment */}
                  <p>
                     Ord ẻm giường này ở đây nha mí bà, zá chưa đến 1 củ khoai
                     lun ó
                  </p>
               </div>

               {/* image */}
               <img
                  src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/404753542_736094285217686_475287699370600680_n.jpg?stp=cp6_dst-jpg&_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFAOrNQBS6Z3ZQq87gUWgRea_97a_HwAthr_3tr8fAC2IZ9LnU9FwVZ069DBoO3EPfIIgnpeKto5Oo2dTzw8PZa&_nc_ohc=BB8ND2g4FnMAX-_fBXU&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDInPt1ox7ffROBpsSSsqpbaNQ8g_W36MLc6XeOgzuLVQ&oe=656B8B0A"
                  alt="picture"
                  className="max-h-[210px] rounded-2xl object-fill"
               />

               {/* time */}
               <div className="flex items-center gap-4 ps-1 pt-2">
                  <p className="text-gray-txt text-[12px]">1 giờ</p>
                  <button className="text-btn text-[12px]">Thích</button>
                  <button className="text-btn text-[12px]">Phản hồi</button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Comment;
