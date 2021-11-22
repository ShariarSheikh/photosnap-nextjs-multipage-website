import { BsArrowUp } from "react-icons/bs";
import Link from "next/link";

import TextComponent from "../../utils/TextComponent/TextComponent";
import ImageComponent from "../../utils/ImageComponent/ImageComponent";

const Section2 = () => {
  return (
    <section className="w-full flex flex-col md:flex-row min-h-[94vh]">
      <ImageComponent
        img={
          "https://images.unsplash.com/photo-1579231513500-9e12d673b98a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
      />
      <TextComponent
        headerText={
          <h1 className="md:text-6xl text-4xl text-gray-600 tracking-wider uppercase font-medium">
            beautiful
            <br className="hidden md:block" />
            stories <br /> every time
          </h1>
        }
        paragraph={
          <p className="text-gray-400 mt-6">
            We provide design templates to ensure your stories <br />
            look terrific. Easily add photos, text, embed maps and <br />
            media from other networks.
            <br />
            Then share your story with everyone.
          </p>
        }
        componentBg={"white"}
        actionBtn={
          <button className="mt-8 text-gray-500 font-medium flex items-center group">
            <Link href="/get-invite" passHref>
              <a className="flex items-center group">
                View The Stories
                <BsArrowUp className="text-gray-500 rotate-90 h-6 w-6 ml-6 group-hover:ml-10 duration-200" />
              </a>
            </Link>
          </button>
        }
      />
    </section>
  );
};

export default Section2;
