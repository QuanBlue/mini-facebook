import React from "react";
import Image from "next/image";
import { CloseIcon, DownArrowIcon, LockIcon } from "@public/svg-icon";
import avt from "@public/avt.jpg";
import pictureIcon from "@public/picture.png";

interface ModalProps {
   setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({ setIsModalOpen }: ModalProps) {
   return (
      <div className="fixed left-0 top-0 z-50 h-screen w-screen">
         {/* Background */}
         <div
            className=" h-full w-full bg-white opacity-60"
            onClick={() => setIsModalOpen(false)}
         />

         {/* Foreground - Modal */}
         <div className="flex justify-center">
            <div className="absolute top-1/4 w-1/2 rounded-2xl bg-white shadow-modal">
               {/* header */}
               <div className=" flex border-0 border-b border-solid border-hover-btn px-4 py-2">
                  <div className="flex flex-auto items-center justify-center">
                     <h1>Tạo bài viết</h1>
                  </div>

                  {/* close modal */}
                  <button
                     className="circle-btn h-[36px] w-[36px]"
                     onClick={() => setIsModalOpen(false)}
                  >
                     <CloseIcon />
                  </button>
               </div>

               <div className="grid gap-4 p-4">
                  {/* content */}
                  <div className="grid gap-4">
                     <div>
                        <div className="flex gap-3">
                           {/* avatar */}
                           <button className="relative h-[38px] w-[38px] overflow-hidden rounded-full">
                              <Image
                                 src={avt}
                                 layout="fill"
                                 alt="user-avatar"
                              />
                           </button>

                           {/* Name */}
                           <div className="grid gap-1">
                              <a
                                 href="#"
                                 className="no-underline hover:underline"
                              >
                                 <strong>Thanh Quân</strong>
                              </a>

                              {/* post scope */}
                              <button className="flex items-center gap-1 rounded-lg bg-secondary-btn px-2 py-1">
                                 <LockIcon />
                                 <strong className="text-tiny">
                                    Chỉ mình tôi
                                 </strong>
                                 <DownArrowIcon />
                              </button>
                           </div>
                        </div>
                     </div>

                     <div>
                        <p className="text-left text-gray-txt ">
                           Thanh ơi, bạn đang nghĩ gì thế?
                        </p>
                     </div>

                     <button className="rounded-lg border-[1px] border-solid border-hover-btn p-4 hover:bg-transparent">
                        <div className="flex items-center justify-between">
                           <strong>Thêm vào bài viết của bạn</strong>
                           <button className="circle-btn bg-transparent hover:bg-gray">
                              <Image
                                 src={pictureIcon}
                                 width={24}
                                 height={24}
                                 alt="picture"
                              />
                           </button>
                        </div>
                     </button>
                  </div>

                  {/* footer */}
                  <button className="rounded-lg bg-secondary-btn">
                     <strong className="text-light-gray-txt">Đăng</strong>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Modal;
