import Image from "next/image";

const ImageComponent = ({ img }) => {
  return (
    <div className={`w-full lg:w-[60%] h-full relative`}>
      <div className="w-full h-[380px] md:h-screen relative">
        <Image
          src={img}
          alt="hero section photo"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default ImageComponent;
