import React from "react";
import ChatSide from "@components/ChatSide";
import CreatePostTable from "@components/CreatePostTable";
import Post from "@components/Post";
import ChatBox from "@components/ChatBox";

function HomePage() {
   return (
      <div className="flex">
         {/* post side */}
         <div className="grid w-full flex-auto justify-center tablet:w-[calc(100vw-290px)]">
            <div className="my-5 grid w-full gap-1 tablet:w-[590px] tablet:gap-5">
               <CreatePostTable />
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

         {/* Chat box */}
         <div className="fixed bottom-0 right-0">
            <ChatBox />
         </div>
      </div>
   );
}

export default HomePage;
