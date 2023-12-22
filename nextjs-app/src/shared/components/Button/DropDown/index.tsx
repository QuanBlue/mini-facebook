import React, { useEffect, useRef, useState } from "react";
import DropDownComponent from "./DropDown";
import DropDownProvider from "../../../contexts/DropDownContext";

export interface DropDownProps {
   title?: string;
   tooltip?: string;
   btn_className?: string;
   btn_icon?: React.ReactNode;
   btn_icon_active?: React.ReactNode;
   body?: React.ReactNode;
   footer?: React.ReactNode;
}

function DropDown({
   title,
   tooltip,
   btn_className,
   btn_icon,
   btn_icon_active,
   body,
   footer,
}: DropDownProps) {
   return (
      <DropDownProvider>
         <DropDownComponent
            title={title}
            tooltip={tooltip}
            btn_className={btn_className}
            btn_icon={btn_icon}
            btn_icon_active={btn_icon_active}
            body={body}
            footer={footer}
         />
      </DropDownProvider>
   );
}

export default DropDown;
