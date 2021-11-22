import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import Link from "next/link";

const HumburgerMenu = () => {
  return (
    <div className="bg-white w-full h-auto fixed block md:hidden z-30">
      <div className="w-full h-auto overflow-y-scroll relative">
        <div className="flex flex-col justify-center items-center space-y-8 h-[70vh]">
          <Link href="/stories" passHref>
            <a className="text-gray-600 font-bold cursor-pointer uppercase text-3xl hover:text-text-4xl duration-200">
              Stories
            </a>
          </Link>
          <Link href="/features" passHref>
            <a className="text-gray-600 font-bold cursor-pointer uppercase text-3xl hover:text-text-4xl duration-200">
              Features
            </a>
          </Link>
          <Link href="/pricing" passHref>
            <a className="text-gray-600 font-bold cursor-pointer uppercase text-3xl hover:text-text-4xl duration-200">
              Pricing
            </a>
          </Link>
        </div>
        <div className="h-[30vh] bg-black flex justify-between items-center w-full">
          <div className="pl-3">
            <h1 className="font-bold text-white uppercase">Photosnnap</h1>
          </div>
          <div className="flex justify-center items-center space-x-3 pr-3">
            <AiFillFacebook className="text-gray-300" />
            <AiFillYoutube className="text-gray-300" />
            <AiOutlineTwitter className="text-gray-300" />
            <FaPinterest className="text-gray-300" />
            <AiFillInstagram className="text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumburgerMenu;
