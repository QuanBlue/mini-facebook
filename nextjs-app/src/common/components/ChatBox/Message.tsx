import React, { useState } from "react";
import { TypeMessage } from "./index";

function Message({ time, content, isOwn }: TypeMessage) {
   let [isHover, setIsHover] = useState(false);

   return (
      <div
         className={`my-3 flex items-center  ${
            isOwn ? "flex-row-reverse" : "flex-row"
         }`}
      >
         <div className="flex max-w-[75%] items-center gap-2">
            {!isOwn && (
               <img
                  className="rounded-full object-cover"
                  width={28}
                  height={28}
                  src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/404990361_1663767724033114_7602431839291799030_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGMrB5OH74nw8lqEfqnXlzCxvFFkGpJHcTG8UWQakkdxEpp0pmvj1ow1vELAVtjJVnh68I_AD5nCogzHc7iwRTw&_nc_ohc=t0W2lu_K-KQAX_vLbDq&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfC947S0PtcTZ4c-cD8MawPul-0VSk3uudVelR1e3_flEQ&oe=656E15E5"
               />
            )}

            {/* content */}
            <div
               className={`rounded-3xl px-4 py-2  ${
                  isOwn ? "bg-primary" : "bg-secondary"
               }`}
               onMouseEnter={() => setIsHover(true)}
               onMouseLeave={() => setIsHover(false)}
            >
               <p className={isOwn ? "text-white" : "text-black"}>{content}</p>
            </div>
         </div>

         {/* time */}
         <div
            className={`max-w-screen  rounded-xl bg-black px-3 py-2 ${
               isHover ? "opacity-70 delay-300" : "opacity-0"
            } transition-opacity  duration-150`}
         >
            <p className="text-tiny text-white"> {time}</p>
         </div>
      </div>
   );
}

export default Message;
