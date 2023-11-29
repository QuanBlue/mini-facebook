import React from "react";

function BubbleChat() {
   return (
      <button className=" flex h-[44px] w-full items-center gap-2 rounded-lg ">
         {/* avatar */}
         <div className="relative">
            <img
               className="rounded-full"
               width={28}
               height={28}
               src="https://variety.com/wp-content/uploads/2021/04/Avatar.jpg"
               alt="avatar"
            />

            {/* status */}
            <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full border-[1px] border-solid border-white bg-active-status"></div>
         </div>

         {/* name */}
         <div>Ngoc Lien</div>
      </button>
   );
}

export default BubbleChat;
