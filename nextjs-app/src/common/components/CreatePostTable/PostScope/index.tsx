import React from "react";
import ScopeBadge from "./ScopeBadge";
import { scopes } from "../context";
import { useCreatePostContext } from "../context";

function PostScope() {
   const context = useCreatePostContext();

   const scope_elements = scopes.map((_scope, index) => {
      return <ScopeBadge key={index} props={_scope} />;
   });

   return (
      <div className="flex flex-col gap-4 overflow-auto ">
         {/* content */}
         <div className="scroll grid  gap-4 p-4">
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
         <div className="flex flex-auto justify-end border-0 border-t border-solid border-hover-btn px-4 py-6">
            <button
               className="rounded-lg bg-primary px-10 hover:brightness-90"
               onClick={() => context?.setIsChooseScope(false)}
            >
               <strong className="text-white">Xong</strong>
            </button>
         </div>
      </div>
   );
}

export default PostScope;
