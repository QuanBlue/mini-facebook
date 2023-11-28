import * as React from "react";
import ChatSide from "@components/ChatSide";
import CreatePostTable from "@components/CreatePostTable";
import Post from "@components/Post";

function HomePage() {
   return (
      <div className="flex">
         {/* post side */}
         <div className="ms-3 grid w-[calc(100vw-290px)] justify-center">
            <div className="w-[590px]">
               <CreatePostTable />
               <Post />
            </div>
         </div>

         {/* chat side */}
         <div className="">
            <div className="fixed right-0">
               <ChatSide />
            </div>
         </div>
      </div>
   );
}

export default HomePage;
