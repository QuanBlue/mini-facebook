import React from "react";
import ChatSide from "@components/ChatSide";
import CreatePostTable from "@components/CreatePostTable";
import Post from "@components/Post";

function HomePage() {
   return (
      <div className="flex">
         {/* post side */}
         <div className="tablet:w-[calc(100vw-290px)] grid w-full flex-auto justify-center">
            <div className="tablet:w-[590px] tablet:gap-5 my-5 grid w-full gap-1">
               <CreatePostTable />
               <Post />
               <Post />
            </div>
         </div>

         {/* chat side */}
         <div className="laptop:w-chat-side laptop:flex hidden">
            <div className="fixed right-0 ">
               <ChatSide />
            </div>
         </div>
      </div>
   );
}

export default HomePage;
