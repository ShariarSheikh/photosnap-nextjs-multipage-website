import Image from "next/image";

const PhotoCart = ({ img, headerText, title, actionBtn }) => {
  return (
    <div className="w-full h-full relative">
      <Image src={img} alt="photo" layout="fill" objectFit="cover" />
      <div className="absolute bottom-0 w-full h-[30%] bg-black bg-opacity-50 px-8">
        <div>
          {headerText}
          {title}
        </div>
        <div className="h-[1px] w-full bg-[#9f9f9f] mt-5" />
        {actionBtn}
      </div>
    </div>
  );
};

export default PhotoCart;
