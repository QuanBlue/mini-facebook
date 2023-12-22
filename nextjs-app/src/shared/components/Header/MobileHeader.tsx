import React from "react";
import Tooltip from "@components/Button/Tooltip";
import Link from "next/link";
import { useRouter } from "next/router";
import { nav_button } from "./index";

function MobileHeader() {
   const router = useRouter();

   let nav_button_elements = nav_button.map((item, index) => {
      return router.pathname === item.link ? (
         // active button
         <Link
            key={index}
            href={item.link}
            className="flex h-full w-[80px] items-center justify-center hover:bg-transparent"
         >
            <Tooltip describe={item.name}>{item.active_icon}</Tooltip>
         </Link>
      ) : (
         // inactive button
         <div className="flex h-full items-center justify-center" key={index}>
            <Link
               href={item.link}
               className="h-5/6 w-[80px] rounded-lg hover:bg-secondary"
            >
               <Tooltip describe={item.name}>{item.inactive_icon}</Tooltip>
            </Link>
         </div>
      );
   });

   return (
      <div className="fixed top-0 z-50 w-full bg-white shadow-md">
         <div className="flex flex-col px-4 ">
            {/* Facebook logo */}
            <div className="flex items-center justify-start">
               <button className="hover:bg-transparent">
                  <h1 className="text-huge text-primary">mini facebook</h1>
               </button>
            </div>
            {/* End Facebook logo */}

            <div className="flex w-full items-end justify-center gap-2 py-3 tablet:hidden">
               {nav_button_elements}
            </div>
         </div>
      </div>
   );
}

export default MobileHeader;
