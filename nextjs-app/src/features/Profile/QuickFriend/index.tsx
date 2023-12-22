import React from "react";
import avt from "@public/avt.jpg";
import Image from "next/image";

function QuickFriend() {
   return (
      <div className="grid gap-1">
         <Image
            src={avt}
            className="rounded-lg"
            layout="responsive"
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
