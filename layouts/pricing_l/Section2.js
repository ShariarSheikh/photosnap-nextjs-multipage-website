import { useState } from "react";
import PricingCart from "../../utils/PricingCart/PricingCart";

const Section2 = () => {
  const [btn, setBtn] = useState(false);

  return (
    <section className="w-full min-h-[80vh]">
      <div className="w-[350px] flex items-center justify-evenly m-auto mt-20">
        <p className="font-medium">Mandy</p>
        <button className="h-10 w-[100px] rounded-3xl bg-gray-200 px-2 cursor-default">
          <div
            className={`h-8 w-8 rounded-full bg-black overflow-hidden cursor-pointer duration-200 ease-out ${
              btn === true ? "ml-[53px]" : "ml-0"
            }`}
            onClick={() => setBtn((pervState) => !pervState)}
          />
        </button>
        <p className="font-medium">Friday</p>
      </div>

      {/* container */}
      <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-4 mt-10 px-3 space-y-4">
        <div className="h-[500px] w-full px-2 lg:w-[400px] relative bg-gray-100">
          <PricingCart
            title={<h1 className="text-black font-bold text-3xl">Basic</h1>}
            paragraph={
              <p className="text-gray-700 font-medium mt-7 text-center sm:text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                laudantium!
              </p>
            }
            price={
              <h1 className="font-medium text-black text-3xl mt-5"> $19.00 </h1>
            }
            time={<p className="font-medium mt-2">Per Month</p>}
            btn={
              <button className="bg-black uppercase font-medium w-full mt-9 text-white h-10 flex justify-center items-center active:scale-110 duration-200">
                Pick Plan
              </button>
            }
          />
        </div>

        <div className="h-[570px] w-full px-2 lg:w-[400px] relative bg-black">
          <PricingCart
            title={<h1 className="text-gray-300 font-medium text-3xl">Pro</h1>}
            paragraph={
              <p className="text-gray-300 font-normal text-center sm:text-left mt-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                laudantium!
              </p>
            }
            price={
              <h1 className="font-medium text-gray-300 text-3xl mt-5">
                $39.00
              </h1>
            }
            time={<p className="font-medium mt-2 text-gray-300">Per Month</p>}
            btn={
              <button className="bg-white uppercase font-medium w-full mt-9 text-black h-10 flex justify-center items-center active:scale-110 duration-200">
                Pick Plan
              </button>
            }
          />
        </div>

        <div className="h-[500px] w-full px-2 lg:w-[400px] relative bg-gray-100">
          <PricingCart
            title={<h1 className="text-black font-bold text-3xl">Business</h1>}
            paragraph={
              <p className="text-gray-700 font-medium text-center sm:text-left mt-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                laudantium!
              </p>
            }
            price={
              <h1 className="font-medium text-black text-3xl mt-5"> $99.00 </h1>
            }
            time={<p className="font-medium mt-2">Per Month</p>}
            btn={
              <button className="bg-black w-full mt-9 font-medium uppercase text-white h-10 flex justify-center items-center active:scale-110 duration-200">
                Pick Plan
              </button>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Section2;
