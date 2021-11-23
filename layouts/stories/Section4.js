import { BsArrowUp } from "react-icons/bs";
import PhotoCart from "../../utils/PhotoCart/PhotoCart";

const Section4 = () => {
  return (
    <section className="w-full flex justify-center flex-wrap">
      <div className="xl:w-[25%] sm:w-[50%] w-full h-[400px] xl:h-[540px] relative">
        <PhotoCart
          img={
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
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
            "https://images.unsplash.com/photo-1549492423-400259a2e574?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=621&q=80"
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
            "https://images.unsplash.com/photo-1620771429059-69010afc5264?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80"
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
            "https://images.unsplash.com/photo-1530554997056-2f35ff15599d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=694&q=80"
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

export default Section4;
