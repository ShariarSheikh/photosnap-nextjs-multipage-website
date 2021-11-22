import PhotoCart from "../../utils/PhotoCart/PhotoCart";
import { BsArrowUp } from "react-icons/bs";

const Section4 = () => {
  return (
    <div className="w-full flex justify-center flex-col sm:flex-row flex-wrap">
      <div className="xl:w-[25%] sm:w-[50%] h-[400px] xl:h-[540px] relative">
        <PhotoCart
          img={
            "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
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
      <div className="xl:w-[25%] sm:w-[50%] h-[400px] xl:h-[540px] relative">
        <PhotoCart
          img={
            "https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1518&q=80"
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

      <div className="xl:w-[25%] sm:w-[50%] h-[400px] xl:h-[540px] relative">
        <PhotoCart
          img={
            "https://images.unsplash.com/photo-1551737823-dfc8495904b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
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
      <div className="xl:w-[25%] sm:w-[50%] h-[400px] xl:h-[540px] relative">
        <PhotoCart
          img={
            "https://images.unsplash.com/photo-1481923387198-050ac1a2896e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80"
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
     
    </div>
  );
};

export default Section4;
