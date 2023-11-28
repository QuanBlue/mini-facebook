import * as React from "react";
import Image from "next/image";
import fbLogo from "@public/facebook-logo.png";
import homepageIcon from "@public/homepage-icon.svg";
import createIcon from "@public/create-icon.svg";
import messengerIcon from "@public/messenger-icon.svg";
import notificationIcon from "@public/notification-icon.svg";
import avatar from "@public/avt.jpg";

function Header() {
   return (
      <div className="fixed top-0 z-50 grid h-[56px] w-full  grid-cols-3 bg-white px-4 shadow-md">
         {/* Facebook logo */}
         <div className="flex items-center justify-start">
            <button>
               <Image src={fbLogo} width={40} height={40} alt="logo" />
            </button>
         </div>
         {/* End Facebook logo */}

         {/* Feature  */}
         <div className="flex items-center justify-center">
            <div className="flex w-full justify-center">
               <button>
                  <Image src={homepageIcon} alt="home icon" />
               </button>
            </div>
         </div>
         {/* End Feature  */}

         {/* Notification  */}
         <div className="flex items-center justify-end">
            <div className="notification grid w-[184px] grid-cols-4 gap-1">
               <button className="circle-btn">
                  <Image src={createIcon} alt="home icon" />
               </button>
               <button className="circle-btn">
                  <Image src={messengerIcon} alt="messenger icon" />
               </button>
               <button className="circle-btn">
                  <Image src={notificationIcon} alt="notification icon" />
               </button>
               <button className="circle-btn relative overflow-hidden">
                  <Image src={avatar} layout="fill" alt="avatar logo" />
               </button>
            </div>
         </div>
         {/* End Notification  */}
      </div>
   );
}

export default Header;
