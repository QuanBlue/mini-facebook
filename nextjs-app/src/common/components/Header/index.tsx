import React from "react";
import Image from "next/image";
import fbLogo from "@public/facebook-logo.png";
import avatar from "@public/avt.jpg";
import {
   HomepageIcon,
   CreateIcon,
   MessengerIcon,
   MessengerSolidIcon,
   FriendIcon,
   FriendSolidIcon,
   NotificationIcon,
   NotificationSolidIcon,
   DownArrowSolidIcon,
   DownArrowIcon,
} from "@public/svg-icon";
import TooltipButton from "@components/Button/TooltipButton";
import Link from "next/link";

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

                  <TooltipButton describe="Trang chủ">
                     <button className="mb-[1px] w-full border-0 border-b-[3px] border-solid border-primary-icon hover:bg-transparent">
                        <HomepageIcon fill="var(--active-icon-color)" />
                     </button>
                  </TooltipButton>

                  <div />
               </div>
               {/* End Feature  */}

               {/* Setting and Control account  */}
               <div className="flex flex-auto items-center justify-end">
                  <div className="notification grid w-[184px] grid-cols-4 gap-1">
                     {/* Creation */}
                     <TooltipButton describe="Tạo">
                        <button className="circle-btn">
                           <CreateIcon />
                        </button>
                     </TooltipButton>

                     {/* Messenger */}
                     <TooltipButton describe="Messenger">
                        <button className="circle-btn">
                           <MessengerSolidIcon />
                        </button>
                     </TooltipButton>

                     {/* Announcement */}
                     <TooltipButton describe="Thông báo">
                        <button className="circle-btn">
                           <NotificationSolidIcon />
                        </button>
                     </TooltipButton>

                     <TooltipButton describe="Tài khoản">
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
                     </TooltipButton>
                  </div>
               </div>
               {/* End Notification  */}
            </div>
            {/* end tablet responsive */}

            {/* > mobile responsive */}
            <div className="grid grid-cols-4 pb-4 pt-2 tablet:hidden">
               <TooltipButton describe="Trang chủ">
                  <button className="bg-transparent">
                     <HomepageIcon fill="var(--active-icon-color)" />
                  </button>
               </TooltipButton>

               <TooltipButton describe="Bạn bè">
                  <button className="bg-transparent">
                     <div className="hidden tablet:block">
                        <FriendSolidIcon />
                     </div>

                     <div className="block tablet:hidden">
                        <FriendIcon />
                     </div>
                  </button>
               </TooltipButton>

               {/* Messenger */}
               <TooltipButton describe="Messenger">
                  <button className="bg-transparent">
                     <div className="hidden tablet:block">
                        <MessengerSolidIcon />
                     </div>

                     <div className="block tablet:hidden">
                        <MessengerIcon />
                     </div>
                  </button>
               </TooltipButton>

               {/* Announcement */}
               <TooltipButton describe="Thông báo">
                  <button className="bg-transparent">
                     <div className="hidden tablet:block">
                        <NotificationSolidIcon />
                     </div>

                     <div className="block tablet:hidden">
                        <NotificationIcon />
                     </div>
                  </button>
               </TooltipButton>
            </div>
            {/* end mobile responsive */}
         </div>
      </div>
   );
}

export default Header;
