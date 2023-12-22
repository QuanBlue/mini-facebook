import React, { useState } from "react";
import avatar from "@public/avt.jpg";
import Image from "next/image";
import { AboutUsIcon, LogOutIcon, RightArrowIcon } from "@public/svg-icon";
import Link from "next/link";
import { useDropDown } from "@contexts/DropDownContext";
import Modal from "@components/Modal";
import AboutUs from "@features/AboutUs";

function Account() {
   const dropDownContext = useDropDown();
   let [isModalOpen, setIsModalOpen] = useState(false);

   return (
      <div className="grid gap-3">
         <div className="m-2 grid gap-1 rounded-lg p-1 shadow-around">
            <Link
               href="/QuanBluee/"
               className=" flex items-center gap-2 rounded-lg p-4 no-underline hover:bg-gray"
               onClick={() => dropDownContext.setIsOpen(false)}
            >
               <Image
                  src={avatar}
                  height={36}
                  width={36}
                  alt="avatar"
                  className="rounded-full"
               />
               <strong className="text-regular">Thanh Quan</strong>
            </Link>

            <div className="grid gap-3 px-3 pb-3">
               {/* hr line */}
               <div className="border-0 border-t border-solid border-secondary-btn "></div>

               <button className="flex  items-center justify-center gap-3 rounded-lg bg-secondary-btn py-3 hover:bg-hover-btn">
                  <LogOutIcon />
                  <strong className="text-small">Đăng xuất</strong>
               </button>
            </div>
         </div>

         {/* functional button */}
         <div>
            <button
               className="flex w-full items-center justify-between rounded-lg hover:bg-gray"
               onClick={() => setIsModalOpen(true)}
            >
               <div className="flex items-center gap-3">
                  <div className="circle-btn">
                     <AboutUsIcon />
                  </div>
                  <p className="text-small">Về chúng tôi</p>
               </div>
               <RightArrowIcon />
            </button>

            {/* AboutUs modal */}
            {isModalOpen && (
               <Modal
                  header_title="Về chúng tôi"
                  body={<AboutUs />}
                  canBack={false}
                  setIsModalOpen={setIsModalOpen}
               />
            )}
         </div>
      </div>
   );
}

export default Account;
