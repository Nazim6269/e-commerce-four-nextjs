const NavSearch = () => {
  return (
    <div className="flex select-none items-center justify-center">
      <div className="w-full flex space-x-1">
        <input
          type="text"
          placeholder="Search your products..."
          className="w-full px-4 py-2 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:ring-orange-300 focus:outline-none focus:border-orange-400"
        />
        <button
          type="submit"
          className="top-0 right-0 px-4 py-2 text-white bg-orange-400 rounded-md hover:bg-orange-500  focus:outline-none"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default NavSearch;
