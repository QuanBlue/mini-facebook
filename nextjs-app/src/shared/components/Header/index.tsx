import React from "react";
import {
   HomepageIcon,
   FriendSolidIcon,
   HomepageSolidIcon,
   FriendIcon,
} from "@public/svg-icon";

import DesktopHeader from "./DesktopHeader";
import MobileHeader from "./MobileHeader";

export const nav_button = [
   {
      name: "Trang chủ",
      active_icon: (
         <HomepageSolidIcon
            width={24}
            height={24}
            fill="var(--active-icon-color)"
         />
      ),
      inactive_icon: (
         <HomepageIcon width={24} height={24} fill="var(--text-gray)" />
      ),
      link: "/",
   },
   {
      name: "Bạn bè",
      active_icon: (
         <FriendSolidIcon
            width={24}
            height={24}
            fill="var(--active-icon-color)"
         />
      ),
      inactive_icon: (
         <FriendIcon width={24} height={24} fill="var(--text-gray)" />
      ),
      link: "/friends",
   },
];

function Header() {
   return (
      <div>
         {/* Desktop header */}
         <div className="hidden tablet:block">
            <DesktopHeader />
         </div>

         {/* Mobile header */}
         <div className="block tablet:hidden">
            <MobileHeader />
         </div>
      </div>
   );
}

export default Header;
