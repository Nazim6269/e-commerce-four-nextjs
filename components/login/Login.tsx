const Login = () => {
  return (
    <form className="mt-6">
      {/* Email */}
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full mt-1 p-2 border  rounded-md focus:ring-orange-500 focus:outline-none focus:border-orange-500"
          placeholder="Enter your email"
          required
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full mt-1 p-2 border  rounded-md focus:ring-orange-500 focus:outline-none focus:border-orange-500"
          placeholder="Enter your password"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-2 mt-4 bg-orange-400 text-white font-medium rounded-lg hover:bg-orange-500"
      >
        Login
      </button>
    </form>
  );
};

export default Login;
