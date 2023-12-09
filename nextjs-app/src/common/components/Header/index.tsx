import React from "react";
import Image from "next/image";
import fbLogo from "@public/facebook-logo.png";
import avatar from "@public/avt.jpg";
import {
   HomepageIcon,
   PlusIcon,
   MessengerIcon,
   MessengerSolidIcon,
   FriendIcon,
   FriendSolidIcon,
   NotificationIcon,
   NotificationSolidIcon,
   DownArrowIcon,
} from "@public/svg-icon";
import Tooltip from "@components/Button/Tooltip";
import Link from "next/link";
import DropDown from "@components/Button/DropDown";
import MessengerBody from "./Messenger";
import Create from "./Create";

function Header() {
   return (
      <div className="fixed top-0 z-50 w-full bg-white shadow-md">
         <div className="flex flex-col px-4 tablet:flex-row">
            {/* Facebook logo */}
            <div className="flex flex-auto items-center justify-start">
               <button className="hover:bg-transparent">
                  {/* > tablet */}
                  <div className="hidden tablet:block">
                     <Link href="/">
                        <Image src={fbLogo} width={40} height={40} alt="logo" />
                     </Link>
                  </div>

                  {/* mobile */}
                  <div className="block tablet:hidden">
                     <h1 className="text-huge text-primary">mini_facebook</h1>
                  </div>
               </button>
            </div>
            {/* End Facebook logo */}

            {/* Feature  */}
            {/* > tablet responsive */}
            <div className="hidden flex-auto tablet:flex">
               <div className="grid grid-cols-3 items-end justify-center ">
                  <div />

                  <Tooltip describe="Trang chủ">
                     <button className="mb-[1px] w-full border-0 border-b-[3px] border-solid border-primary-icon hover:bg-transparent">
                        <HomepageIcon fill="var(--active-icon-color)" />
                     </button>
                  </Tooltip>

                  <div />
               </div>
               {/* End Feature  */}

               {/* Setting and Control account  */}
               <div className="flex flex-auto items-center justify-end">
                  <div className="notification grid w-[184px] grid-cols-4 gap-1">
                     {/* Creation */}
                     <DropDown
                        title="Tạo"
                        tooltip="Tạo"
                        btn_className="circle-btn"
                        btn_icon={<PlusIcon />}
                        btn_icon_active={
                           <PlusIcon fill="var(--active-icon-color)" />
                        }
                        body={<Create />}
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

                     {/* Announcement */}
                     <Tooltip describe="Thông báo">
                        <button className="circle-btn">
                           <NotificationSolidIcon />
                        </button>
                     </Tooltip>

                     <Tooltip describe="Tài khoản">
                        <button className="circle-btn relative">
                           <Image
                              src={avatar}
                              layout="fill"
                              alt="avatar logo"
                              className="rounded-full"
                           />

                           <div className="absolute -right-1 bottom-0 flex h-4 w-4 items-center justify-center rounded-full bg-secondary-btn">
                              <DownArrowIcon height={8} width={8} />
                           </div>
                        </button>
                     </Tooltip>
                  </div>
               </div>
               {/* End Notification  */}
            </div>
            {/* end tablet responsive */}

            {/* > mobile responsive */}
            <div className="grid grid-cols-4 pb-4 pt-2 tablet:hidden">
               <Tooltip describe="Trang chủ">
                  <button className="bg-transparent">
                     <HomepageIcon fill="var(--active-icon-color)" />
                  </button>
               </Tooltip>

               <Tooltip describe="Bạn bè">
                  <button className="bg-transparent">
                     <div className="hidden tablet:block">
                        <FriendSolidIcon />
                     </div>

                     <div className="block tablet:hidden">
                        <FriendIcon />
                     </div>
                  </button>
               </Tooltip>

               {/* Messenger */}
               <Tooltip describe="Messenger">
                  <button className="bg-transparent">
                     <div className="hidden tablet:block">
                        <MessengerSolidIcon />
                     </div>

                     <div className="block tablet:hidden">
                        <MessengerIcon />
                     </div>
                  </button>
               </Tooltip>

               {/* Announcement */}
               <Tooltip describe="Thông báo">
                  <button className="bg-transparent">
                     <div className="hidden tablet:block">
                        <NotificationSolidIcon />
                     </div>

                     <div className="block tablet:hidden">
                        <NotificationIcon />
                     </div>
                  </button>
               </Tooltip>
            </div>
            {/* end mobile responsive */}
         </div>
      </div>
   );
}

export default Header;
