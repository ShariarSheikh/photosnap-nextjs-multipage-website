import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { BsArrowUp } from "react-icons/bs";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="min-h-[260px] bg-black flex items-center">
      <div className="max-w-[1366px] m-auto w-full flex flex-wrap justify-start sm:justify-evenly items-center px-10 sm:px-0">
        <div className="sm:px-10">
          <h1 className="font-bold text-gray-300 text-2xl cursor-pointer">
            Photonsnap
          </h1>
          <div className="flex items-center space-x-4 sm:mt-20 mt-7">
            <AiFillFacebook className="text-gray-300 text-xl cursor-pointer hover:scale-110 duration-200" />
            <AiFillYoutube className="text-gray-300 text-xl cursor-pointer hover:scale-110 duration-200" />
            <AiOutlineTwitter className="text-gray-300 text-xl cursor-pointer hover:scale-110 duration-200" />
            <FaPinterest className="text-gray-300 text-xl cursor-pointer hover:scale-110 duration-200" />
            <AiFillInstagram className="text-gray-300 text-xl cursor-pointer hover:scale-110 duration-200" />
          </div>
        </div>
        <div className="mt-3 pt-10 sm:pt-0 flex flex-col ml-10">
          <Link href="/" passHref>
            <a className="mb-3 cursor-pointer text-base hover:scale-125 duration-200 ease-out text-gray-300">
              Home
            </a>
          </Link>
          <Link href="/stories" passHref>
            <a className="mb-3 cursor-pointer text-base hover:scale-125 duration-200 ease-out text-gray-300">
              Stories
            </a>
          </Link>
          <Link href="/features" passHref>
            <a className="mb-3 cursor-pointer text-base hover:scale-125 duration-200 ease-out text-gray-300">
              Features
            </a>
          </Link>
          <Link href="/pricing" passHref>
            <a className="mb-3 cursor-pointer text-base hover:scale-125 duration-200 ease-out text-gray-300">
              Pricing
            </a>
          </Link>
        </div>
        <div className="flex-grow hidden sm:block"></div>
        <div className="w-full sm:w-auto pr-5">
          <button className="mt-8 sm:mt-0 text-gray-300 font-medium flex items-center group">
            <Link href="/get-invite" passHref>
              <a className="flex items-center group font-bold text-gray-300 text-xl cursor-pointer">
                Get An Invite
                <BsArrowUp className="text-gray-300 rotate-90 h-6 w-6 ml-6 group-hover:ml-10 duration-200" />
              </a>
            </Link>
          </button>
          <div className="sm:mt-20 mt-6 text-gray-400 text-sm pb-8 sm:pb-0">
            <p>Copyright 2022 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
