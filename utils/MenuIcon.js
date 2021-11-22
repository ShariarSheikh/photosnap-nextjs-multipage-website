const MenuIcon = ({ openMenu, setOpenMenu }) => {
  return (
    <div className="block md:hidden">
      {!openMenu && (
        <svg
          onClick={() => setOpenMenu((pervState) => (pervState = true))}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 8h16M4 16h16"
          />
        </svg>
      )}

      {openMenu && (
        <svg
          onClick={() => setOpenMenu((pervState) => (pervState = false))}
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </div>
  );
};

export default MenuIcon;
