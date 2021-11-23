import { BsArrowUp } from "react-icons/bs";
import Link from "next/link";

import TextComponent from "../../utils/TextComponent/TextComponent";
import ImageComponent from "../../utils/ImageComponent/ImageComponent";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row min-h-[94vh]">
      <TextComponent
        headerText={
          <h1 className="md:text-6xl text-4xl text-gray-300 tracking-wider uppercase font-medium">
            Create and <br className="hidden md:block" />
            share your <br /> phots stories
          </h1>
        }
        paragraph={
          <p className="text-gray-600 mt-6">
            Photosnap is platform for photographersand visual <br />
            storyteller. We make it easy to share photos,
            <br />
            stories storytellers. We make it easy to share photos,tell <br />
            stories and content with others.
          </p>
        }
        componentBg={"black"}
        actionBtn={
          <button className="mt-8 text-gray-300 font-medium flex items-center group">
            <Link href="/get-invite" passHref>
              <a className="flex items-center group">
                Get An Invite
                <BsArrowUp className="text-gray-300 rotate-90 h-6 w-6 ml-6 group-hover:ml-10 duration-200" />
              </a>
            </Link>
          </button>
        }
      />
      <ImageComponent
        img={
          "https://images.unsplash.com/photo-1599044368810-238581bb322b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=757&q=80"
        }
      />
    </section>
  );
};

export default HeroSection;
