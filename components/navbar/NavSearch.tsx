const NavSearch = () => {
  return (
    <div className="flex select-none items-center justify-center">
      <div className="w-full flex space-x-1">
        <input
          type="text"
          placeholder="Search your products..."
          className="w-full px-4 py-2 text-sm border border-orange-300 rounded-md shadow-sm focus:ring-1 focus:ring-orange-300 focus:outline-none focus:border-orange-400"
        />
      </div>
    </div>
  );
};

export default NavSearch;
