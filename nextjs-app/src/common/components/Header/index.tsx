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
} from "@public/svg-icon";
import TooltipButton from "@components/Button/TooltipButton";

function Header() {
   return (
      <div className="fixed top-0 z-50 w-full bg-white shadow-md">
         <div className="tablet:flex-row flex flex-col px-4">
            {/* Facebook logo */}
            <div className="flex flex-auto items-center justify-start">
               <button className="hover:bg-transparent">
                  {/* > tablet */}
                  <div className="tablet:block hidden">
                     <Image src={fbLogo} width={40} height={40} alt="logo" />
                  </div>

                  {/* mobile */}
                  <div className="tablet:hidden block">
                     <h1 className="text-huge text-primary">Mini Facebook</h1>
                  </div>
               </button>
            </div>
            {/* End Facebook logo */}

            {/* Feature  */}
            {/* > tablet responsive */}
            <div className="tablet:flex hidden flex-auto">
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
                           <NotificationIcon />
                        </button>
                     </TooltipButton>

                     <TooltipButton describe="Tài khoản">
                        <button className="circle-btn relative overflow-hidden">
                           <Image
                              src={avatar}
                              layout="fill"
                              alt="avatar logo"
                           />
                        </button>
                     </TooltipButton>
                  </div>
               </div>
               {/* End Notification  */}
            </div>
            {/* end tablet responsive */}

            {/* > mobile responsive */}
            <div className="tablet:hidden grid grid-cols-4 pb-4 pt-2">
               <TooltipButton describe="Trang chủ">
                  <button className="bg-transparent">
                     <HomepageIcon fill="var(--active-icon-color)" />
                  </button>
               </TooltipButton>

               <TooltipButton describe="Bạn bè">
                  <button className="bg-transparent">
                     <div className="tablet:block hidden">
                        <FriendSolidIcon />
                     </div>

                     <div className="tablet:hidden block">
                        <FriendIcon />
                     </div>
                  </button>
               </TooltipButton>

               {/* Messenger */}
               <TooltipButton describe="Messenger">
                  <button className="bg-transparent">
                     <div className="tablet:block hidden">
                        <MessengerSolidIcon />
                     </div>

                     <div className="tablet:hidden block">
                        <MessengerIcon />
                     </div>
                  </button>
               </TooltipButton>

               {/* Announcement */}
               <TooltipButton describe="Thông báo">
                  <button className="bg-transparent">
                     <div className="tablet:block hidden">
                        <NotificationSolidIcon />
                     </div>

                     <div className="tablet:hidden block">
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
