import React from "react";
import Scope from "./Scope";
import { FriendSolidIcon, PrivateIcon, PublicIcon } from "@public/svg-icon";

function PostScope() {
   const scopes = [
      {
         title: "Công khai",
         description: "Bất kỳ ai ở trên hoặc ngoài Facebook",
         icon: <PublicIcon fill="#000000" width={24} height={24} />,
      },
      {
         title: "Bạn bè",
         description: "Bạn bè của bạn trên Facebook",
         icon: <FriendSolidIcon fill="#000000" width={24} height={24} />,
      },
      {
         title: "Chỉ mình tôi",
         description: "",
         icon: <PrivateIcon fill="#000000" width={24} height={24} />,
      },
   ];

   const scope_elements = scopes.map((scope, index) => {
      return (
         <Scope
            key={index}
            title={scope.title}
            description={scope.description}
            icon={scope.icon}
         />
      );
   });

   return (
      <div className="grid gap-4 p-4">
         {/* content */}
         <div className="grid gap-4">
            <strong className="text-regular">
               Ai có thể xem bài viết của bạn?
            </strong>

            <div className="grid gap-2">
               <p className="text-gray-txt ">
                  Bài viết của bạn sẽ hiển thị ở Bảng feed, trang cá nhân và kết
                  quả tìm kiếm.
               </p>
               <p className="text-gray-txt">
                  Tuy đối tượng mặc định là <b>Chỉ mình tôi</b>, nhưng bạn có
                  thể thay đổi đối tượng của riêng bài viết này.
               </p>
            </div>

            <div className="grid gap-3">{scope_elements}</div>
         </div>

         {/* footer */}
         <div className="flex justify-end gap-3 border-0 border-t border-solid border-hover-btn pt-5">
            <button className="rounded-lg px-3 hover:bg-gray ">
               <strong className="text-primary">Hủy</strong>
            </button>
            <button className="rounded-lg bg-primary px-10 hover:brightness-90">
               <strong className="text-white">Xong</strong>
            </button>
         </div>
      </div>
   );
}

export default PostScope;
