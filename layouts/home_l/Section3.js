import { BsArrowUp } from "react-icons/bs";
import Link from "next/link";

import TextComponent from "../../utils/TextComponent/TextComponent";
import ImageComponent from "../../utils/ImageComponent/ImageComponent";

const Section3 = () => {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[94vh]">
      <TextComponent
        headerText={
          <h1 className="md:text-6xl text-4xl text-gray-300 tracking-wider uppercase font-medium">
            Designed for
            <br className="hidden md:block" />
            everyone
          </h1>
        }
        paragraph={
          <p className="text-gray-600 mt-6">
            Photonsnap can hello you to create sotries that resonancewith your
            audience. <br /> Our tool is designed for platform for <br />
            paragraphers of all levels, brands,business you name it
          </p>
        }
        componentBg={"black"}
        actionBtn={
          <button className="mt-8 text-gray-300 font-medium flex items-center group">
            <Link href="/get-invite" passHref>
              <a className="flex items-center group">
                View The Stories
                <BsArrowUp className="text-gray-300 rotate-90 h-6 w-6 ml-6 group-hover:ml-10 duration-200" />
              </a>
            </Link>
          </button>
        }
      />
      <ImageComponent
        img={
          "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
        }
      />
    </section>
  );
};

export default Section3;
