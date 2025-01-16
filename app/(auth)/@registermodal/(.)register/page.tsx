"use client";

import Register from "@/components/register/Register";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter();

  const closeModal = () => {
    setIsModalOpen(false);
    router.back();
  };
  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="relative w-full max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              aria-label="Close Modal"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-center text-gray-800">
              Register
            </h2>
            <Register />
            {/* Additional Options */}
            <div className="mt-4 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link
                aria-label="go to login"
                href="/login"
                className="text-orange-500 hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
