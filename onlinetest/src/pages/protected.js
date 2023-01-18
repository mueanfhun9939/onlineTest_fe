import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";

const Protected = () => {
  const { status, data } = useSession();

  console.log('status > ', status);
  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/auth/signin");
  }, [status]);

  if (status === "authenticated")
    Router.push('/');

  return <div>loading</div>;
};

export default Protected;