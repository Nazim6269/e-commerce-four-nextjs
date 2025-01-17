"use client";

import Login from "@/components/login/Login";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const router = useRouter();

  return (
    <>
      {
        <div className="fixed z-10 inset-0 flex justify-center items-center bg-black bg-opacity-50">
          {/* Modal Content */}
          <div className="relative w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-6">
            {/* Close Button */}
            <button
              onClick={() => router.back()}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close Modal"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Login
            </h2>
            <Login />
            {/* Additional Options */}
            <div className="mt-4 text-sm text-center text-gray-600">
              Don't have an account?{" "}
              <Link
                aria-label="go to register"
                href="/register"
                className="text-orange-500 hover:underline"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Page;
