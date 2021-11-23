import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuIcon from "../../utils/MenuIcon";
import HumburgerMenu from "../HumburgerMenu/HumbergerMenu";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [windowSize, setWindowSize] = useState({
    height: undefined,
  });

  const router = useRouter();

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    function handleResize() {
      setWindowSize({
        height: window.scrollY,
      });
    }
    window.addEventListener("scroll", handleResize);
    handleResize();
    return () => window.removeEventListener("scroll", handleResize);
  }, [openMenu]);

  useEffect(() => {
    setOpenMenu((pervState) => (pervState = false));
  }, [router]);

  return (
    <header
      className={`h-[70px] w-full bg-white transition-all duration-200 ease-out ${
        windowSize.height >= 200 ? "fixed top-0" : "relative"
      }  z-50`}
    >
      <div className="max-w-[1366px] m-auto relative h-full">
        <div className="flex justify-between items-center w-full h-full px-6">
          {/* logo div */}
          <div className="h-full flex items-center">
            <h1 className="uppercase font-bold text-xl cursor-pointer">
              <Link href="/" passHref>
                <a>Photosnnap</a>
              </Link>
            </h1>
          </div>

          {/* link container */}
          <div className="hidden md:block">
            <div className="h-full flex items-center space-x-3 lg:space-x-8">
              <Link href="/stories" passHref>
                <a className="text-gray-600 w-[100px] overflow-hidden font-medium cursor-pointer uppercase hover:text-lg duration-200">
                  Stories
                </a>
              </Link>
              <Link href="/features" passHref>
                <a className="text-gray-600 w-[100px] overflow-hidden font-medium cursor-pointer uppercase hover:text-lg duration-200">
                  Features
                </a>
              </Link>
              <Link href="/pricing" passHref>
                <a className="text-gray-600 w-[100px] overflow-hidden font-medium cursor-pointer uppercase hover:text-lg duration-200">
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
                  Get An Invite
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
