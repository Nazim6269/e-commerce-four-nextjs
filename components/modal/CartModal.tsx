"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const CartModal = () => {
  const router = useRouter();

  return (
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

        {/* Modal Content */}
        <div className="relative  mx-auto max-w-sm w-full space-y-4 overflow-hidden rounded-lg bg-white py-6 antialiased dark:bg-gray-800">
          {/* Item 1 */}
          <div className="grid grid-cols-2">
            <div>
              <Link
                href="#"
                className="truncate text-sm font-semibold text-gray-900 dark:text-white hover:underline"
                aria-label="go to Apple iPhone 15"
              >
                Apple iPhone 15
              </Link>
              <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                $599
              </p>
            </div>
            <div className="flex items-center justify-end gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Qty: 1</p>
              <button
                className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                aria-label="Remove item"
              >
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Repeat for other items */}
          <div className="grid grid-cols-2">
            <div>
              <Link
                href="#"
                className="truncate text-sm font-semibold text-gray-900 dark:text-white hover:underline"
                aria-label="go to Apple iPad Air"
              >
                Apple iPad Air
              </Link>
              <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                $499
              </p>
            </div>
            <div className="flex items-center justify-end gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">Qty: 1</p>
              <button
                className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-600"
                aria-label="Remove item"
              >
                <svg
                  className="h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm7.7-3.7a1 1 0 0 0-1.4 1.4l2.3 2.3-2.3 2.3a1 1 0 1 0 1.4 1.4l2.3-2.3 2.3 2.3a1 1 0 0 0 1.4-1.4L13.4 12l2.3-2.3a1 1 0 0 0-1.4-1.4L12 10.6 9.7 8.3Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Checkout Button */}
          <Link
            href="/checkout"
            className="block w-full rounded-lg bg-orange-400 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-orange-500"
            aria-label="Proceed to Checkout"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
