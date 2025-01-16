import Register from "@/components/register/Register";
import Link from "next/link";

const page = () => {
  return (
    <div className="w-full max-w-md mx-auto mt-10 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800">Register</h2>
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
  );
};

export default page;
