import Image from "next/image";

const ImageContainer = () => {
  return (
    <div className="w-full h-full relative">
      <Image
        src="https://images.unsplash.com/photo-1635752019785-6637044adea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        alt="login img"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default ImageContainer;
