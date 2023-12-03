import React from "react";
import Scope from "./Scope";
import { FriendSolidIcon, PrivateIcon, PublicIcon } from "@public/svg-icon";

export interface TypeScope {
   title: string;
   id: string;
   description?: string;
   icon: React.ReactNode;
}

export const scopes = [
   {
      title: "Công khai",
      id: "public",
      description: "Bất kỳ ai ở trên hoặc ngoài Facebook",
      icon: <PublicIcon fill="#000000" width={12} height={12} />,
   },
   {
      title: "Bạn bè",
      id: "friend",
      description: "Bạn bè của bạn trên Facebook",
      icon: <FriendSolidIcon fill="#000000" width={12} height={12} />,
   },
   {
      title: "Chỉ mình tôi",
      id: "private",
      description: "",
      icon: <PrivateIcon fill="#000000" width={12} height={12} />,
   },
];

interface PostScopeProps {
   setIsChooseScope: React.Dispatch<React.SetStateAction<boolean>>;
   scope: TypeScope;
   setScope: React.Dispatch<React.SetStateAction<TypeScope>>;
}

function PostScope({ setIsChooseScope, scope, setScope }: PostScopeProps) {
   const scope_elements = scopes.map((_scope, index) => {
      return (
         <Scope
            key={index}
            title={_scope.title}
            id={_scope.id}
            description={_scope.description}
            icon={_scope.icon}
            current_scope={scope}
            setScope={setScope}
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
         <div className="flex justify-end border-0 border-t border-solid border-hover-btn pt-6">
            <button
               className="rounded-lg bg-primary px-10 hover:brightness-90"
               onClick={() => setIsChooseScope(false)}
            >
               <strong className="text-white">Xong</strong>
            </button>
         </div>
      </div>
   );
}

export default PostScope;
