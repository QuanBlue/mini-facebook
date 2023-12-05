import React from "react";
import ChatSide from "@components/ChatSide";
import CreatePostForm from "@components/CreatePostForm";
import Post from "@components/Post";

function HomePage() {
   return (
      <div className="flex">
         {/* post side */}
         <div className="grid w-full flex-auto justify-center tablet:w-[calc(100vw-290px)]">
            <div className="my-5 grid w-full gap-1 tablet:w-[590px] tablet:gap-5">
               <CreatePostForm />
               <Post />
               <Post />
            </div>
         </div>

         {/* chat side */}
         <div className="hidden laptop:flex laptop:w-chat-side">
            <div className="fixed right-0 ">
               <ChatSide />
            </div>
         </div>
      </div>
   );
}

export default HomePage;
