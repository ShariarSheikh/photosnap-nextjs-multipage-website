import { BsArrowUp } from "react-icons/bs";
import PhotoCart from "../../utils/PhotoCart/PhotoCart";

const Section3 = () => {
  return (
    <section className="w-full flex justify-center flex-wrap">
      <div className="xl:w-[25%] sm:w-[50%] w-full h-[400px] xl:h-[540px] relative">
        <PhotoCart
          img={
            "https://images.unsplash.com/photo-1609857071682-cb9b5e1dbbfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
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
            "https://images.unsplash.com/photo-1484589065579-248aad0d8b13?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=759&q=80"
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
            "https://images.unsplash.com/photo-1629095057157-d1e9a30427c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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
            "https://images.unsplash.com/photo-1541411438265-4cb4687110f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
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

export default Section3;
