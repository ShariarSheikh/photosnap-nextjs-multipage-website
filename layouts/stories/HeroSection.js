import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="w-full h-auto bg-gray-900 relative">
      <div className="bg-black bg-opacity-40 absolute top-0 left-0 right-0 bottom-0 w-full h-full z-30" />

      <div className="w-full min-h-[80vh] flex justify-start items-center relative">
        <div className="absolute z-40 w-full md:w-[50%] px-10 max-w-[700px] flex flex-col justify-center items-start">
          <p className="uppercase text-sm text-gray-300">
            Last month's featured story
          </p>
          <h1 className="uppercase text-4xl md:text-6xl text-gray-200 font-bold mt-4 leading-tight">
            Hazy Fool <br /> Moon of <br />
            Appalachia.
          </h1>
          <p className="text-gray-200 text-[12px] mt-4">March 2022 by ABCDEF</p>
          <p className="text-gray-300 mt-10 text-xl">
            The dissected plateau, area while not actually made up <br />
            of geological mountains, is popularly called "mountains" <br />
            <p className="hidden md:block">
              expecially in eastern kentucky and West Virginia, and <br />
              while the ridges not high, the terrain is extremely rugged.
            </p>
          </p>
          <button className="md:mt-10 mt-5 cursor-pointer py-3 px-4 text-white border border-gray-200 rounded-lg hover:bg-white hover:text-black font-medium">
            Read The Stories
          </button>
        </div>

        <Image
          src="https://images.unsplash.com/photo-1524654458049-e36be0721fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="stories photo"
          objectFit="cover"
          layout="fill"
        />
      </div>
    </section>
  );
};

export default HeroSection;
