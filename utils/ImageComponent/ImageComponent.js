import Image from "next/image";

const ImageComponent = ({ img, width }) => {
  return (
    <div className={`w-full lg:w-[${width}] h-full relative`}>
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
