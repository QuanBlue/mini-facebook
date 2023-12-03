import React from "react";
import { scopes, TypeScope } from ".";

interface ScopeProps {
   title: string;
   id: string;
   description?: string;
   icon: React.ReactNode;
   current_scope: TypeScope;
   setScope: React.Dispatch<React.SetStateAction<TypeScope>>;
}

function Scope({
   title,
   id,
   description,
   icon,
   current_scope,
   setScope,
}: ScopeProps) {
   console.log(current_scope.id, id);
   return (
      <label className="flex items-center justify-between">
         <div className="flex gap-4">
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-secondary-btn">
               <div className="scale-[2]">{icon}</div>
            </div>

            <div className="flex flex-col justify-center gap-1">
               <p className="text-regular">{title}</p>
               <p className="text-gray-txt">{description}</p>
            </div>
         </div>
         <input
            type="radio"
            name="public"
            className="h-[20px] w-[20px]"
            checked={current_scope.id === id}
            onChange={() =>
               setScope({
                  title,
                  id,
                  description,
                  icon,
               })
            }
         />
      </label>
   );
}

export default Scope;
