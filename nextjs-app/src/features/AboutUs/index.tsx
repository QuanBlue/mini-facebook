import React from "react";
import Image from "next/image";
import fbLogo from "@public/facebook-logo.png";
import author from "@public/author.jpeg";
import { FacebookIcon, GithubIcon, LinkedInIcon } from "@public/svg-icon";
import Tooltip from "@components/Button/Tooltip";
import Link from "next/link";

const contacts = [
   {
      social: "Facebook",
      href: "https://www.facebook.com/QuanBlueee/",
      icon: <FacebookIcon height={16} width={16} />,
   },
   {
      social: "LinkedIn",
      href: "https://www.linkedin.com/in/quanblue/",
      icon: <LinkedInIcon height={16} width={16} />,
   },

   {
      social: "Github",
      href: "https://github.com/QuanBlue",
      icon: <GithubIcon height={18} width={18} />,
   },
];
function AboutUs() {
   const contact_elements = contacts.map((contact, index) => {
      return (
         <Tooltip describe={contact.social}>
            <Link
               href={contact.href}
               target="blank"
               className="rounded-lg bg-secondary p-2 hover:brightness-95"
            >
               {contact.icon}
            </Link>
         </Tooltip>
      );
   });

   return (
      <div className="flex flex-col justify-around gap-10 p-4">
         {/* description */}
         <div className="flex flex-col gap-3 rounded-lg p-4 shadow-modal">
            <div className="flex items-center justify-center gap-2">
               <Image src={fbLogo} width={28} height={28} alt="logo" />
               <h1 className="pt-1 text-regular-big text-primary">
                  Mini Facebook
               </h1>
            </div>

            <div className="flex flex-col gap-2">
               <p>
                  Mini Facebook Đây là một dự án clone Facebook@2023 với mục
                  đích luyện tập, rèn luyện kĩ năng lập trình
               </p>
            </div>
         </div>

         {/* author */}
         <div className="flex flex-col gap-2">
            <strong className="text-regular-big">Tác giả:</strong>

            <div className="flex gap-3">
               <Image
                  src={author}
                  width={75}
                  height={75}
                  alt="author"
                  className="rounded-lg "
               />
               <div className="flex flex-col gap-2">
                  <p>
                     <strong className="text-regular">
                        Nguyễn Thanh Quân &nbsp;
                     </strong>
                     <span className="text-gray-txt">(Quan Blue)</span>
                  </p>

                  {/* contact */}
                  <div className="flex items-center gap-2">
                     {contact_elements}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default AboutUs;
