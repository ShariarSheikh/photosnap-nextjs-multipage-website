import { BsArrowUp } from "react-icons/bs";
import PhotoCart from "../../utils/PhotoCart/PhotoCart";

const Section2 = () => {
  return (
    <section className="w-full flex justify-center flex-wrap">
      <div className="xl:w-[25%] sm:w-[50%] w-full h-[400px] xl:h-[540px] relative">
        <PhotoCart
          img={
            "https://images.unsplash.com/photo-1611316185995-9624c94487d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
            "https://images.unsplash.com/photo-1615275938220-ad06697d32ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
            "https://images.unsplash.com/photo-1530555144580-18acc0ff779b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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

export default Section2;
