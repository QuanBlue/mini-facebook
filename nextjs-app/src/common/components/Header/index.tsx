import React from "react";
import Image from "next/image";
import fbLogo from "@public/facebook-logo.png";
import createIcon from "@public/create-icon.svg";
import messengerIcon from "@public/messenger-icon.svg";
import notificationIcon from "@public/notification-icon.svg";
import avatar from "@public/avt.jpg";
import HomepageIcon from "@public/svg/homepage-icon";
import TooltipButton from "@components/Button/TooltipButton";

function Header() {
   return (
      <div className="fixed top-0 z-50 h-[56px] w-full bg-white shadow-md">
         <div className="flex px-4">
            {/* Facebook logo */}
            <div className="flex flex-auto items-center justify-start">
               <button className="hover:bg-transparent">
                  <Image src={fbLogo} width={40} height={40} alt="logo" />
               </button>
            </div>
            {/* End Facebook logo */}

            {/* Feature  */}
            <div className="grid flex-auto grid-cols-3 items-end justify-center ">
               <div />

               <TooltipButton describe="Trang chủ">
                  <button className="mb-1 w-full border-0 border-b-[3px] border-solid border-primary-icon hover:bg-transparent">
                     <HomepageIcon fill="var(--active-icon-color)" />
                  </button>
               </TooltipButton>

               <div />
            </div>
            {/* End Feature  */}

            {/* Notification  */}
            <div className="flex flex-auto items-center justify-end">
               <div className="notification grid w-[184px] grid-cols-4 gap-1">
                  <TooltipButton describe="Tạo">
                     <button className="circle-btn">
                        <Image src={createIcon} alt="home icon" />
                     </button>
                  </TooltipButton>
                  <TooltipButton describe="Messenger">
                     <button className="circle-btn">
                        <Image src={messengerIcon} alt="messenger icon" />
                     </button>
                  </TooltipButton>
                  <TooltipButton describe="Thông báo">
                     <button className="circle-btn">
                        <Image src={notificationIcon} alt="notification icon" />
                     </button>
                  </TooltipButton>

                  <TooltipButton describe="Tài khoản">
                     <button className="circle-btn relative overflow-hidden">
                        <Image src={avatar} layout="fill" alt="avatar logo" />
                     </button>
                  </TooltipButton>
               </div>
            </div>
            {/* End Notification  */}
         </div>
      </div>
   );
}

export default Header;
