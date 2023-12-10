import React from "react";
import { TypeScope } from "../../index";
import { useCreatePostContext } from "../context";

interface ScopeProps {
   props: TypeScope;
}

function ScopeBadge({ props }: ScopeProps) {
   const context = useCreatePostContext();

   return (
      <label className="flex items-center justify-between">
         <div className="flex gap-4">
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-secondary-btn">
               <div className="scale-[2]">{props.icon}</div>
            </div>

            <div className="flex flex-col justify-center gap-1">
               <p className="text-regular">{props.title}</p>
               <p className="text-gray-txt">{props.description}</p>
            </div>
         </div>
         <input
            type="radio"
            name="public"
            className="h-[20px] w-[20px]"
            checked={context?.scope.id === props.id}
            onChange={() => context?.setScope(props)}
         />
      </label>
   );
}

export default ScopeBadge;
