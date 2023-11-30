import React from "react";
import birthdayIcon from "@public/gift.png";
import Image from "next/image";

function BirthdayAnnounce() {
   return (
      <div className="px-2">
         <p className="text-regular pb-2 pt-5 font-bold text-gray-txt">
            Sinh nhật
         </p>
         <div className="flex items-center gap-2 py-2">
            <Image src={birthdayIcon} width={36} height={36} alt="birthday" />
            <p className="py-2">
               Hôm nay là sinh nhật của <strong>Tiến Quân</strong> và{" "}
               <strong>3 người khác</strong>
            </p>
         </div>
      </div>
   );
}

export default BirthdayAnnounce;
