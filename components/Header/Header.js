import Link from "next/link";
import { useState } from "react";
import MenuIcon from "../../utils/MenuIcon";
import HumburgerMenu from "../HumburgerMenu/HumbergerMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="h-[70px] w-full bg-white fixed top-0 z-50">
      <div className="max-w-[1366px] m-auto relative h-full">
        <div className="flex justify-between items-center w-full h-full px-6">
          {/* logo div */}
          <div className="h-full flex items-center">
            <h1 className="uppercase font-bold text-xl">Photonsnap</h1>
          </div>

          {/* link container */}
          <div className="hidden md:block">
            <div className="h-full flex items-center space-x-4">
              <Link href="/stories" passHref>
                <a className="text-gray-600 font-medium cursor-pointer uppercase hover:text-lg duration-200">
                  Stories
                </a>
              </Link>
              <Link href="/features" passHref>
                <a className="text-gray-600 font-medium cursor-pointer uppercase hover:text-lg duration-200">
                  Features
                </a>
              </Link>
              <Link href="/pricing" passHref>
                <a className="text-gray-600 font-medium cursor-pointer uppercase hover:text-lg duration-200">
                  Pricing
                </a>
              </Link>
            </div>
          </div>

          {/* right component btn */}
          <div className="hidden md:block">
            <div className="h-full flex items-center justify-center">
              <Link href="/get-invite" passHref>
                <a className="h-10 w-32 flex justify-center items-center text-white rounded-lg hover:text-lg active:text-lg duration-150 uppercase bg-black">
                  Get In Invite
                </a>
              </Link>
            </div>
          </div>

          {/* menu icon */}
          <MenuIcon openMenu={openMenu} setOpenMenu={setOpenMenu} />
        </div>
        {openMenu && <HumburgerMenu />}
      </div>
    </header>
  );
};

export default Header;
