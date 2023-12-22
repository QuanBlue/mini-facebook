import React from "react";
import { SearchIcon } from "@public/svg-icon";

function SearchBar() {
   return (
      <div className="flex items-center justify-between rounded-3xl bg-secondary px-3">
         <SearchIcon />
         <input
            className="w-full border-none  bg-transparent outline-none"
            placeholder="Tìm kiếm Bạn bè"
         />
      </div>
   );
}

export default SearchBar;
