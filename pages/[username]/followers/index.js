import React from "react";
import Head from "next/head";

import { useRouter } from "next/dist/client/router";

import FollowComp from "../../../components/profile/followStatus/FollowComp";
import UserFollowerListContextProvider from "../../../context/userContexts/UserFollowerListContext";
import UserFollowingListContextProvider from "../../../context/userContexts/UserFollowingList";

export default function Followers() {
  console.log("running followers page");
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Socialogram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserFollowerListContextProvider>
        <div className="flex justify-center my-40">
          <FollowComp title="followers" />
        </div>
      </UserFollowerListContextProvider>
    </>
  );
}
