import React from "react";
import Image from "next/image";
import fbLogo from "@public/facebook-logo.png";
import avatar from "@public/avt.jpg";
import { PlusIcon, MessengerSolidIcon, DownArrowIcon } from "@public/svg-icon";
import Tooltip from "@components/Button/Tooltip";
import Link from "next/link";
import DropDown from "@components/Button/DropDown";
import MessengerBody from "./Messenger";
import Creation from "./Creation";
import Setting from "./Account";
import { useRouter } from "next/router";
import { nav_button } from "../index";

function DesktopHeader() {
   const router = useRouter();

   let nav_button_elements = nav_button.map((item, index) => {
      return router.pathname === item.link ? (
         // active button
         <Link
            key={index}
            href={item.link}
            className="-mb-[3px] flex h-full w-[80px] items-center justify-center border-0 border-b-[3px] border-solid border-primary-icon hover:bg-transparent"
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
         <div className="flex flex-row px-4">
            {/* Facebook logo */}
            <div className="flex items-center justify-start">
               <button className="hover:bg-transparent">
                  <Link href="/">
                     <Image src={fbLogo} width={40} height={40} alt="logo" />
                  </Link>
               </button>
            </div>
            {/* End Facebook logo */}

            {/* Feature  */}
            <div className="flex flex-auto">
               <div className="flex w-full items-end justify-center gap-2">
                  {nav_button_elements}
               </div>
               {/* End Feature  */}

               {/* Setting and Control account  */}
               <div className="flex flex-auto items-center justify-end">
                  <div className="notification grid w-[138px] grid-cols-3 gap-1">
                     {/* Creation */}
                     <DropDown
                        title="Tạo"
                        tooltip="Tạo"
                        btn_className="circle-btn"
                        btn_icon={<PlusIcon />}
                        btn_icon_active={
                           <PlusIcon fill="var(--active-icon-color)" />
                        }
                        body={<Creation />}
                     />

                     {/* Messenger */}
                     <DropDown
                        title="Đoạn chat"
                        tooltip="Messenger"
                        btn_className="circle-btn"
                        btn_icon={<MessengerSolidIcon />}
                        btn_icon_active={
                           <MessengerSolidIcon fill="var(--active-icon-color)" />
                        }
                        body={<MessengerBody />}
                        footer={
                           <a
                              href="/chat"
                              className="text-primary no-underline hover:underline"
                           >
                              <strong className="text-primary">
                                 Xem tất cả trong Messenger
                              </strong>
                           </a>
                        }
                     />

                     <DropDown
                        tooltip="Tài khoản"
                        btn_className="circle-btn p-0"
                        btn_icon={
                           <div className="circle-btn relative">
                              <Image
                                 src={avatar}
                                 layout="fill"
                                 alt="avatar logo"
                                 className="rounded-full "
                              />

                              <div className="absolute -right-1 bottom-0 flex h-4 w-4 items-center justify-center rounded-full bg-secondary-btn">
                                 <DownArrowIcon height={8} width={8} />
                              </div>
                           </div>
                        }
                        body={<Setting />}
                     />
                  </div>
               </div>
               {/* End Notification  */}
            </div>
         </div>
      </div>
   );
}

export default DesktopHeader;
