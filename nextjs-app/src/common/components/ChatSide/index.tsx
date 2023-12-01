import React from "react";
import BirthdayAnnounce from "./BirthdayAnnounce";
import BubbleChat from "./BubbleChat";

export interface TypeFriend {
   name: string;
   avatar: string;
   uid: string;
   isOnline: boolean;
}

function ChatSide() {
   var friends: TypeFriend[] = [
      {
         name: "Nguyễn Nhựt Linh",
         avatar:
            "https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.6435-1/90077922_2229195417390036_100352464921821184_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeEA_Ja8SsPeNioxu1gyrN_yNMd6_DY5zlY0x3r8NjnOVpoyBmURkTcif6yABuswtZZqxT2MPm8kViBWtAg0I2Wf&_nc_ohc=IzJmU3tEq6gAX8rHZoa&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBefcwkGInOKxb-lNMgGthJQ_GmdFvRf1HYF3IUMNN9NQ&oe=6590FEE8",
         uid: "1",
         isOnline: true,
      },
      {
         name: "Anh Ngo",
         avatar:
            "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/404990361_1663767724033114_7602431839291799030_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGMrB5OH74nw8lqEfqnXlzCxvFFkGpJHcTG8UWQakkdxEpp0pmvj1ow1vELAVtjJVnh68I_AD5nCogzHc7iwRTw&_nc_ohc=t0W2lu_K-KQAX_vLbDq&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDwRVs_hXP7coVTUzkQB1pnWU13P1i3Z9eNF052xUcrzw&oe=656DE567",
         uid: "2",
         isOnline: false,
      },
      {
         name: "Lương Kiếm Minh",
         avatar:
            "https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.18169-1/11182066_1414111905576576_6344189983619205513_n.jpg?stp=c54.0.177.177a_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeFRlkf3ThJ-bplQVUl91Ss41FErWQ6Kp2LUUStZDoqnYvCD8pw7nczpNNgooCWcm2BNgRx-1Vs9A_FyYiOnrVk2&_nc_ohc=wSWH5mrjbxoAX8yg6YL&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfAbr3ch5tJBIC2tBrnTIK2NG_VrqfSP66nkijF84avg7Q&oe=659111BF",
         uid: "3",
         isOnline: true,
      },
      {
         name: "Ngọc Liên",
         avatar:
            "https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-6/380586233_3516342678613844_4418564229143594242_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFxASsOFZMOz3cYehtKyA6CZi8y0kVHxC9mLzLSRUfEL94uBLq4XxiQETGY2x5ErjKRqi9J5R5JxFG7-dnKPkXw&_nc_ohc=0jv1sJz10ZcAX9VrTJj&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfCmS2bewlcgktONtMy42pEHeYWVkQbNfUYEowuBXRqXUQ&oe=656EC37B",
         uid: "4",
         isOnline: true,
      },
   ];

   let element_buublechat_friend = friends.map((friend, index) => {
      return (
         <BubbleChat
            key={index}
            name={friend.name}
            avatar={friend.avatar}
            uid={friend.uid}
            isOnline={friend.isOnline}
         />
      );
   });

   return (
      <div className="h-[calc(100vh-56px)] w-chat-side overflow-y-scroll">
         <div className="border-0 border-b border-solid border-hover-btn">
            <BirthdayAnnounce />
         </div>

         {/* Chat */}
         <div className="p-2">
            <p className="pb-2 pt-5 text-regular font-bold text-gray-txt">
               Người liên hệ
            </p>
            {element_buublechat_friend}
         </div>
      </div>
   );
}

export default ChatSide;
