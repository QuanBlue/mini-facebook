import React from "react";

function LoginPage() {
   return (
      <div className="mt-[50px] flex  items-center justify-center">
         <div className="flex w-screen items-center justify-around">
            {/* title */}
            <h1 className="text-[50px] text-primary">mini_facebook</h1>

            {/* login form */}
            <div className="w-login grid gap-5 rounded-lg  bg-white p-3 pb-5 shadow-lg">
               <div className="grid gap-3 border-0 border-b border-solid border-hover-btn pb-6">
                  <input placeholder="Email hoặc số điện thoại" />
                  <input placeholder="Mật khẩu" />

                  <button className="mt-2 w-full rounded-lg bg-primary">
                     <strong className="text-[20px] text-white">
                        Đăng nhập
                     </strong>
                  </button>
               </div>

               <div className="grid items-center justify-center">
                  <button className="bg-create-account rounded-lg px-6 py-4">
                     <strong className="text-regular text-white">
                        Tạo tài khoản mới
                     </strong>
                  </button>
               </div>
            </div>
         </div>
      </div>
   );
}

export default LoginPage;
