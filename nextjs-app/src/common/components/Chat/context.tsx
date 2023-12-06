import React, { useContext, createContext, useState, useEffect } from "react";

export interface TypeMessage {
   time: string;
   content: string;
   isOwn: boolean;
}

export interface TypeFriend {
   name: string;
   avatar: string;
   uid: string;
   isOnline: boolean;
   isOpenChatBox: boolean;
   isChatBoxExpand: boolean;
}

export interface TypeChat {
   friend: TypeFriend;
   messages: TypeMessage[];
}

interface ChatContextProps {
   friends: TypeFriend[];
   setFriends: React.Dispatch<React.SetStateAction<TypeFriend[]>>;
   friendOnChatBox: TypeChat[];
   setFriendOnChatBox: React.Dispatch<React.SetStateAction<TypeChat[]>>;
}

const ChatContext = createContext<ChatContextProps | null>(null);

export function useChat() {
   const context = useContext(ChatContext);
   if (!context) {
      throw new Error("useChat must be used within a ChatProvider");
   }
   return context;
}

function ChatProvider({ children }: React.PropsWithChildren<{}>) {
   let [friends, setFriends] = useState<TypeFriend[]>([
      {
         name: "Trần Minh Thức",
         avatar:
            "https://media.istockphoto.com/id/886636648/photo/young-man-is-taking-pictures-with-an-old-camera.jpg?s=612x612&w=0&k=20&c=xhNzBup3llLNBJjj4wU6kO8gmK8xiXIbxKX6cpveUhI=",
         uid: "1",
         isOnline: true,
         isOpenChatBox: true,
         isChatBoxExpand: true,
      },
      {
         name: "Anh Ngo",
         avatar:
            "https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-1/404990361_1663767724033114_7602431839291799030_n.jpg?stp=c0.0.200.200a_dst-jpg_p200x200&_nc_cat=111&ccb=1-7&_nc_sid=5740b7&_nc_eui2=AeGMrB5OH74nw8lqEfqnXlzCxvFFkGpJHcTG8UWQakkdxEpp0pmvj1ow1vELAVtjJVnh68I_AD5nCogzHc7iwRTw&_nc_ohc=t0W2lu_K-KQAX_vLbDq&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDwRVs_hXP7coVTUzkQB1pnWU13P1i3Z9eNF052xUcrzw&oe=656DE567",
         uid: "2",
         isOnline: false,
         isOpenChatBox: true,
         isChatBoxExpand: true,
      },
      {
         name: "Lương Kiếm Minh",
         avatar:
            "https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.18169-1/11182066_1414111905576576_6344189983619205513_n.jpg?stp=c54.0.177.177a_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=2b6aad&_nc_eui2=AeFRlkf3ThJ-bplQVUl91Ss41FErWQ6Kp2LUUStZDoqnYvCD8pw7nczpNNgooCWcm2BNgRx-1Vs9A_FyYiOnrVk2&_nc_ohc=wSWH5mrjbxoAX8yg6YL&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfAbr3ch5tJBIC2tBrnTIK2NG_VrqfSP66nkijF84avg7Q&oe=659111BF",
         uid: "3",
         isOnline: true,
         isOpenChatBox: true,
         isChatBoxExpand: true,
      },
      {
         name: "Ngọc Liên",
         avatar:
            "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
         uid: "4",
         isOnline: true,
         isOpenChatBox: true,
         isChatBoxExpand: true,
      },
   ]);

   // friendOnChatBox: friend has isOpenChatBox = true
   let [friendOnChatBox, setFriendOnChatBox] = useState<TypeChat[]>([]);

   useEffect(() => {
      let f: TypeChat[] = [];

      for (let i = 0; i < friends.length; i++) {
         if (friends[i].isOpenChatBox) {
            f.push({
               friend: friends[i],
               messages: [
                  {
                     time: "10:01",
                     content: "uk",
                     isOwn: false,
                  },
                  {
                     time: "10:01",
                     content: "mai vô đi chơi với ny hay ở chỗ ngta",
                     isOwn: true,
                  },
                  {
                     time: "10:02",
                     content: "Đi chơi",
                     isOwn: false,
                  },
                  {
                     time: "10:02",
                     content: "Ảnh đặt a",
                     isOwn: false,
                  },
                  {
                     time: "10:15",
                     content: "uh",
                     isOwn: true,
                  },
                  {
                     time: "10:15",
                     content: "Dep khong",
                     isOwn: true,
                  },
                  {
                     time: "10:01",
                     content: "mai vô đi chơi với ny hay ở chỗ ngta",
                     isOwn: false,
                  },
                  {
                     time: "10:00",
                     content: "uk",
                     isOwn: false,
                  },
                  {
                     time: "10:01",
                     content: "mai vô đi chơi với ny hay ở chỗ ngta",
                     isOwn: true,
                  },
                  {
                     time: "10:02",
                     content: "Đi chơi",
                     isOwn: false,
                  },
                  {
                     time: "10:02",
                     content: "Ảnh đặt a",
                     isOwn: false,
                  },
                  {
                     time: "10:15",
                     content: "uh",
                     isOwn: true,
                  },
                  {
                     time: "10:15",
                     content: "Dep khong",
                     isOwn: true,
                  },
                  {
                     time: "10:01",
                     content: "mai vô đi chơi với ny hay ở chỗ ngta",
                     isOwn: false,
                  },
               ],
            });

            setFriendOnChatBox(f);
         }
      }

      console.log(friendOnChatBox);
   }, [friends]);

   const contextValue: ChatContextProps = {
      friends,
      setFriends,
      friendOnChatBox,
      setFriendOnChatBox,
   };

   return (
      <ChatContext.Provider value={contextValue}>
         {children}
      </ChatContext.Provider>
   );
}

export default ChatProvider;
