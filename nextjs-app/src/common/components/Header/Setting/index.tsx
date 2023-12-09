import React from "react";
import avatar from "@public/avt.jpg";
import Image from "next/image";
import { AboutUsIcon, LogOutIcon, RightArrowIcon } from "@public/svg-icon";

const functional_btn = [
   {
      title: "Về chúng tôi",
      icon: <AboutUsIcon />,
   },
];

const func_btn_element = functional_btn.map((btn, index) => {
   return (
      <button className="flex w-full items-center justify-between rounded-lg hover:bg-gray">
         <div className="flex items-center gap-3">
            <div className="circle-btn">{btn.icon}</div>
            <p className="text-small">{btn.title}</p>
         </div>
         <RightArrowIcon />
      </button>
   );
});

function Setting() {
   return (
      <div className="grid gap-3">
         <div className="m-2 grid gap-1 rounded-lg p-1 shadow-around">
            <button className=" flex w-full  items-center gap-2 rounded-lg p-4 hover:bg-gray">
               <Image
                  src={avatar}
                  height={36}
                  width={36}
                  alt="avatar"
                  className="rounded-full"
               />
               <strong className="text-regular">Thanh Quan</strong>
            </button>

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
         <div>{func_btn_element}</div>
      </div>
   );
}

export default Setting;
