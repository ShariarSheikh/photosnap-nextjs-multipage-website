import Image from "next/image";

const Section3 = () => {
  return (
    <div className="w-full relative">
      <div className="h-[300px] w-full relative mt-20">
        <Image
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="pictures"
          layout="fill"
          objectFit="cover"
        />
        <div className="w-full h-full bg-black flex justify-center items-center bg-opacity-50 z-30 absolute">
          <h1 className="font-medium text-4xl md:text-5xl text-gray-100 leading-tight uppercase">
            We'are in beta.
            <br /> Get your invite <br /> today!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Section3;
