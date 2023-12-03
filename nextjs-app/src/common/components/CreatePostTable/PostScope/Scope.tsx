import React from "react";

interface ScopeProps {
   title: string;
   description?: string;
   icon: React.ReactNode;
}

function Scope({ title, description, icon }: ScopeProps) {
   return (
      <label className="flex items-center justify-between">
         <div className="flex gap-4">
            <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-secondary-btn">
               {icon}
            </div>

            <div className="flex flex-col justify-center gap-1">
               <p className="text-regular">{title}</p>
               <p className="text-gray-txt">{description}</p>
            </div>
         </div>

         <input type="radio" name="public" className="h-[20px] w-[20px]" />
      </label>
   );
}

export default Scope;
