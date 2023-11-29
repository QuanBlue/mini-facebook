import React from "react";
import { useRouter } from "next/router";
import PersonalPage from "@modules/PersonalPage";

function Page() {
   const router = useRouter();

   // <p>Post: {router.query.username}</p>
   return <PersonalPage />;
}

export default Page;
