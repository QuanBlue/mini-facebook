import React from "react";
import avt from "@public/avt.jpg";
import Image from "next/image";

function QuickFriend() {
   return (
      <div className="grid gap-1">
         <Image
            src={avt}
            className="h-[100px] w-full rounded-lg object-cover"
            alt="Picture of the author"
         />
         <strong>
            <a href="#" className="no-underline hover:underline">
               Nguyễn Thị Thanh Tri
            </a>
         </strong>
      </div>
   );
}

export default QuickFriend;
