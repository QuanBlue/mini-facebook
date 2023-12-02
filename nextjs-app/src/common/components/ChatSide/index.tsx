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
         name: "Trần Minh Thức",
         avatar:
            "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/368228838_1042276327150131_8322883676712050572_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFbqsU0q4zSG5gHZeqWTRxE4zQd1NONszLjNB3U042zMkKcv3D-8mauSCnMO20YfUbK_dKcXF4mLLe3pdu2gX09&_nc_ohc=eXpSi2psfeAAX8EyKAo&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAStKdScJUlfLyGpMkEnUKiUjwkGQl83DlFbhS5GAbdbw&oe=65705407",
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
      {
         name: "Trần Minh Thức",
         avatar:
            "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/368228838_1042276327150131_8322883676712050572_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFbqsU0q4zSG5gHZeqWTRxE4zQd1NONszLjNB3U042zMkKcv3D-8mauSCnMO20YfUbK_dKcXF4mLLe3pdu2gX09&_nc_ohc=eXpSi2psfeAAX8EyKAo&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAStKdScJUlfLyGpMkEnUKiUjwkGQl83DlFbhS5GAbdbw&oe=65705407",
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
      {
         name: "Trần Minh Thức",
         avatar:
            "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/368228838_1042276327150131_8322883676712050572_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFbqsU0q4zSG5gHZeqWTRxE4zQd1NONszLjNB3U042zMkKcv3D-8mauSCnMO20YfUbK_dKcXF4mLLe3pdu2gX09&_nc_ohc=eXpSi2psfeAAX8EyKAo&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAStKdScJUlfLyGpMkEnUKiUjwkGQl83DlFbhS5GAbdbw&oe=65705407",
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
      {
         name: "Trần Minh Thức",
         avatar:
            "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/368228838_1042276327150131_8322883676712050572_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFbqsU0q4zSG5gHZeqWTRxE4zQd1NONszLjNB3U042zMkKcv3D-8mauSCnMO20YfUbK_dKcXF4mLLe3pdu2gX09&_nc_ohc=eXpSi2psfeAAX8EyKAo&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAStKdScJUlfLyGpMkEnUKiUjwkGQl83DlFbhS5GAbdbw&oe=65705407",
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
      {
         name: "Trần Minh Thức",
         avatar:
            "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/368228838_1042276327150131_8322883676712050572_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFbqsU0q4zSG5gHZeqWTRxE4zQd1NONszLjNB3U042zMkKcv3D-8mauSCnMO20YfUbK_dKcXF4mLLe3pdu2gX09&_nc_ohc=eXpSi2psfeAAX8EyKAo&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAStKdScJUlfLyGpMkEnUKiUjwkGQl83DlFbhS5GAbdbw&oe=65705407",
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
      {
         name: "Trần Minh Thức",
         avatar:
            "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/368228838_1042276327150131_8322883676712050572_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeFbqsU0q4zSG5gHZeqWTRxE4zQd1NONszLjNB3U042zMkKcv3D-8mauSCnMO20YfUbK_dKcXF4mLLe3pdu2gX09&_nc_ohc=eXpSi2psfeAAX8EyKAo&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfAStKdScJUlfLyGpMkEnUKiUjwkGQl83DlFbhS5GAbdbw&oe=65705407",
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
      <div className="o scroll me-2 h-[calc(100vh-56px)] w-chat-side">
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
