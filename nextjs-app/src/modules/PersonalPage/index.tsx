import React from "react";
import Image from "next/image";
import { CameraIcon } from "@public/svg-icon";
import QuickFriend from "./QuickFriend";
import Post from "@components/Post";
import avt from "@public/avt.jpg";
import CreatePostTable from "@components/CreatePostTable";

function PersonalPage() {
   return (
      <div className="grid gap-4">
         {/* header */}
         <div className="bg-white shadow-md">
            <div className="mx-2">
               {/* cover image */}
               <img
                  className=" h-[370px] w-full overflow-hidden rounded-b-2xl object-cover shadow-inner"
                  src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/311604683_1709386606110936_1645522471267294964_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeFlNcuiCsh7RpMGwxWgaeTjaPwKhb7uoS1o_AqFvu6hLRr9n7Hqq9qlClzg5zPpNM68BJw8nTvhH9_T1m1jQHsP&_nc_ohc=fQKTRRD2hdwAX9czRUr&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDUVdVQYN8BvPX25Qwhd_01I_o5gSPpZe3VEwJHjDCpuw&oe=656C6511"
               />

               {/* avatar - name*/}
               <div className="mx-10 -mt-16">
                  <div className="flex items-center gap-4">
                     {/* avatar */}
                     <div className="relative">
                        <Image
                           className="rounded-full border-4 border-solid border-white"
                           src={avt}
                           width={168}
                           height={168}
                           alt="Picture of the author"
                        />

                        <div className="absolute bottom-3 right-3">
                           <button className="circle-btn">
                              <CameraIcon />
                           </button>
                        </div>
                     </div>

                     {/* name */}
                     <div className="mt-16 grid gap-2">
                        <h1 className="text-[32px]">Thanh Quân </h1>
                        <strong className="text-gray-txt ">458 bạn bè</strong>
                     </div>
                  </div>
               </div>
            </div>

            {/* navbar */}
            <ul className="border-light-gray-txt mx-10 mt-4 flex border-0 border-t border-solid ">
               <li>
                  <button className="mb-1 w-full  border-0 border-b-[3px] border-solid border-primary-icon px-4 py-5">
                     <strong className="text-primary">Bài viết</strong>
                  </button>
               </li>
               <li>
                  <button className="mb-1 w-full rounded-lg px-4 py-5">
                     <strong className="text-gray-txt">Bạn bè</strong>
                  </button>
               </li>
               <li>
                  <button className="mb-1 w-full rounded-lg px-4 py-5">
                     <strong className="text-gray-txt">Ảnh</strong>
                  </button>
               </li>
            </ul>
         </div>

         {/* body */}
         <div className="flex justify-center gap-4">
            {/* left side */}
            <div className=" w-[360px]">
               <div className="grid gap-4">
                  {/* introduce */}
                  <div className="grid gap-4 rounded-lg bg-white px-4 py-5 shadow-md">
                     <h1 className="text-[20px]">Giới thiệu</h1>

                     <div className="grid items-center justify-center">
                        <div>💻 Ꮳ ⵀ ᗫ Ꭼ Ꮢ</div>
                     </div>

                     <button className="rounded-lg bg-secondary-btn hover:bg-hover-btn">
                        <strong>Chỉnh sửa tiểu sử</strong>
                     </button>
                  </div>

                  {/* picture */}
                  <div className="grid gap-4 rounded-lg bg-white px-4 py-5 shadow-md">
                     <div className="flex justify-between">
                        <h1 className="text-[20px]">Ảnh</h1>

                        <button className="rounded-lg text-primary">
                           Xem tất cả ảnh
                        </button>
                     </div>

                     <div className="grid grid-cols-3 gap-1 overflow-hidden rounded-lg">
                        <Image
                           src={avt}
                           className="h-[100px] w-full object-cover"
                           alt="avt"
                        />
                        <Image
                           src={avt}
                           className="h-[100px] w-full object-cover"
                           alt="avt"
                        />
                        <Image
                           src={avt}
                           className="h-[100px] w-full object-cover"
                           alt="avt"
                        />
                        <Image
                           src={avt}
                           className="h-[100px] w-full object-cover"
                           alt="avt"
                        />
                        <Image
                           src={avt}
                           className="h-[100px] w-full object-cover"
                           alt="avt"
                        />
                        <Image
                           src={avt}
                           className="h-[100px] w-full object-cover"
                           alt="avt"
                        />
                        <Image
                           src={avt}
                           className="h-[100px] w-full object-cover"
                           alt="avt"
                        />
                     </div>
                  </div>

                  {/* friend */}
                  <div className="grid gap-4 rounded-lg bg-white px-4 py-5 shadow-md">
                     <div>
                        <div className="flex justify-between">
                           <h1 className="text-[20px]">Bạn bè</h1>

                           <button className="rounded-lg text-primary">
                              Xem tất cả bạn bè
                           </button>
                        </div>

                        <p className="text-gray-txt">458 người bạn</p>
                     </div>

                     <div className="grid grid-cols-3 gap-3">
                        <QuickFriend />
                        <QuickFriend />
                        <QuickFriend />
                        <QuickFriend />
                        <QuickFriend />
                        <QuickFriend />
                        <QuickFriend />
                        <QuickFriend />
                        <QuickFriend />
                     </div>
                  </div>
               </div>
            </div>

            {/* right side */}
            <div className="grid max-w-[560px] gap-4">
               <CreatePostTable />
               <Post />
               <Post />
               <Post />
            </div>
         </div>
      </div>
   );
}

export default PersonalPage;
