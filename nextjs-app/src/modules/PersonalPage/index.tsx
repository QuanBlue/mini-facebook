import React from "react";
import Image from "next/image";
import { CameraIcon } from "@public/svg-icon";
import QuickFriend from "./QuickFriend";
import Post from "@components/Post";
import avt from "@public/avt.jpg";
import CreatePostTable from "@components/CreatePostTable";

function PersonalPage() {
   return (
      <div className="grid tablet:gap-4">
         {/* header */}
         <div className="bg-white shadow-md">
            <div className="mx-2">
               {/* cover image */}
               <img
                  className="h-[200px] w-full overflow-hidden rounded-b-2xl object-cover shadow-inner tablet:h-[370px]"
                  src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/311604683_1709386606110936_1645522471267294964_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeFlNcuiCsh7RpMGwxWgaeTjaPwKhb7uoS1o_AqFvu6hLRr9n7Hqq9qlClzg5zPpNM68BJw8nTvhH9_T1m1jQHsP&_nc_ohc=fQKTRRD2hdwAX9czRUr&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDUVdVQYN8BvPX25Qwhd_01I_o5gSPpZe3VEwJHjDCpuw&oe=656C6511"
               />

               {/* avatar - name*/}
               <div className="mx-3 -mt-40 tablet:mx-10 tablet:-mt-20">
                  <div className="items-center gap-4 tablet:flex">
                     <div>
                        {/* avatar */}
                        <div className="relative w-[190px] tablet:w-full">
                           <Image
                              className="h-[190px] w-[190px] rounded-full border-4 border-solid border-white tablet:h-[168px] tablet:w-[168px]"
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
                     </div>

                     {/* name */}
                     <div className="mt-5 grid gap-2 tablet:mt-20">
                        <h1 className="text-big tablet:text-huge">
                           Thanh Quân{" "}
                        </h1>
                        <div>
                           {/* > tablet responsive */}
                           <div className="hidden tablet:block">
                              <strong className="text-gray-txt ">
                                 458 bạn bè
                              </strong>
                           </div>

                           {/* mobile responsive */}
                           <div className="block tablet:hidden">
                              <div className="text-regular">💻 Ꮳ ⵀ ᗫ Ꭼ Ꮢ</div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="hidden tablet:block">
               <ul className="mx-10 mt-4 flex border-0 border-t border-solid border-light-gray-txt">
                  {/* navbar */}
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
         </div>

         {/* body */}
         <div className="flex flex-col items-center gap-4 laptop:flex-row laptop:items-start laptop:justify-center">
            {/* left side */}
            <div className="w-personal-page-side laptop:w-personal-page-left-side">
               <div className="grid gap-4">
                  {/* introduce */}
                  <div className="hidden tablet:block">
                     <div className="grid gap-4 rounded-lg bg-white px-4 py-5 shadow-md">
                        <h1 className="text-big">Giới thiệu</h1>

                        <div className="grid items-center justify-center">
                           <div>💻 Ꮳ ⵀ ᗫ Ꭼ Ꮢ</div>
                        </div>

                        <button className="rounded-lg bg-secondary-btn hover:bg-hover-btn">
                           <strong>Chỉnh sửa tiểu sử</strong>
                        </button>
                     </div>
                  </div>

                  {/* picture */}
                  <div className="hidden tablet:block">
                     <div className="grid gap-4 rounded-lg bg-white px-4 py-5 shadow-md">
                        <div className="flex justify-between">
                           <h1 className="text-big">Ảnh</h1>

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
                  </div>

                  {/* friend */}
                  <div className="grid gap-1 rounded-lg bg-white px-4 py-5 shadow-md tablet:gap-4">
                     <div>
                        <div className="flex justify-between">
                           <h1 className="text-regular tablet:text-big">
                              Bạn bè
                           </h1>

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
            <div className="w-personal-page-side laptop:w-personal-page-right-side">
               <div className="grid gap-4">
                  <CreatePostTable />
                  <Post />
                  <Post />
                  <Post />
               </div>
            </div>
         </div>
      </div>
   );
}

export default PersonalPage;
