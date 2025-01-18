"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

const SocialLogin = () => {
  const handleLogin = async (provider: string) => {
    try {
      await signIn(provider, {
        callbackUrl: "http://localhost:3000/",
        redirect: false,
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button
      onClick={() => handleLogin("google")}
      type="submit"
      className="w-full mt-4 py-2 flex justify-center items-center space-x-1 text-black font-medium rounded-lg border "
    >
      <Image src={"/googleWithoutBg.png"} width={26} height={10} alt="google" />
      Login with Google
    </button>
  );
};

export default SocialLogin;
