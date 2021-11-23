import { BsArrowUp } from "react-icons/bs";
import PhotoCart from "../../utils/PhotoCart/PhotoCart";

const Section5 = () => {
  return (
    <section className="w-full flex justify-center flex-wrap">
      <div className="xl:w-[25%] sm:w-[50%] w-full h-[400px] xl:h-[540px] relative">
        <PhotoCart
          img={
            "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          }
          headerText={
            <h1 className="text-gray-200 mt-3 font-bold">Hello World</h1>
          }
          title={
            <p className="text-gray-300 mt-1 font-normal">
              Hello World sadfsad fsadf
            </p>
          }
          actionBtn={
            <button className="w-full flex justify-between items-center group mt-1">
              <p className="uppercase text-gray-300 font-medium">Read More</p>
              <BsArrowUp className="text-gray-300 rotate-90 h-6 w-6 group-hover:ml-10 duration-200" />
            </button>
          }
        />
      </div>
      <div className="xl:w-[25%] sm:w-[50%] w-full h-[400px] xl:h-[540px] relative">
        <PhotoCart
          img={
            "https://images.unsplash.com/photo-1434873740857-1bc5653afda8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=689&q=80"
          }
          headerText={
            <h1 className="text-gray-200 mt-3 font-bold">Hello World</h1>
          }
          title={
            <p className="text-gray-300 mt-1 font-normal">
              Hello World sadfsad fsadf
            </p>
          }
          actionBtn={
            <button className="w-full flex justify-between items-center group mt-1">
              <p className="uppercase text-gray-300 font-medium">Read More</p>
              <BsArrowUp className="text-gray-300 rotate-90 h-6 w-6 group-hover:ml-10 duration-200" />
            </button>
          }
        />
      </div>
      <div className="xl:w-[25%] sm:w-[50%] w-full h-[400px] xl:h-[540px] relative">
        <PhotoCart
          img={
            "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          headerText={
            <h1 className="text-gray-200 mt-3 font-bold">Hello World</h1>
          }
          title={
            <p className="text-gray-300 mt-1 font-normal">
              Hello World sadfsad fsadf
            </p>
          }
          actionBtn={
            <button className="w-full flex justify-between items-center group mt-1">
              <p className="uppercase text-gray-300 font-medium">Read More</p>
              <BsArrowUp className="text-gray-300 rotate-90 h-6 w-6 group-hover:ml-10 duration-200" />
            </button>
          }
        />
      </div>
      <div className="xl:w-[25%] sm:w-[50%] w-full h-[400px] xl:h-[540px] relative">
        <PhotoCart
          img={
            "https://images.unsplash.com/photo-1532883927742-50a3071f6926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          headerText={
            <h1 className="text-gray-200 mt-3 font-bold">Hello World</h1>
          }
          title={
            <p className="text-gray-300 mt-1 font-normal">
              Hello World sadfsad fsadf
            </p>
          }
          actionBtn={
            <button className="w-full flex justify-between items-center group mt-1">
              <p className="uppercase text-gray-300 font-medium">Read More</p>
              <BsArrowUp className="text-gray-300 rotate-90 h-6 w-6 group-hover:ml-10 duration-200" />
            </button>
          }
        />
      </div>
    </section>
  );
};

export default Section5;
