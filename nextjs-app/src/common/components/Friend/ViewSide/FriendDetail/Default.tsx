import { NullStatePeopleIcon } from "@public/svg-icon";
import React from "react";

function Default() {
   return (
      <div className="flex h-[calc(100vh-78px)] w-full justify-center">
         <div className="flex w-[400px] flex-col items-center justify-center">
            <NullStatePeopleIcon />
            <strong className="text-center text-regular-big text-dark-gray-txt">
               Chọn tên của người mà bạn muốn xem trước trang cá nhân.
            </strong>
         </div>
      </div>
   );
}

export default Default;
