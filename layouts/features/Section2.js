import TextCart from "../../utils/TextCart/TextCart";
import { MdOutlineImportantDevices } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { ImEmbed2 } from "react-icons/im";

const Section2 = () => {
  return (
    <section className="w-full flex justify-center items-center h-auto flex-wrap">
      <div className="w-full md:w-[40%] px-2 h-[350px] md:h-[400px] overflow-hidden relative hover:shadow-md">
        <TextCart
          icon={
            <MdOutlineImportantDevices className="w-16 h-16 text-gray-600" />
          }
          title={
            <h1 className="font-bold text-gray-600 mt-10 text-2xl">
              100% Responsive
            </h1>
          }
          paragraph={
            <p className="font-medium mt-2 text-gray-600">
              Not matter which device {"you'r"} are on,our site is
              <br className="hidden sm:block" /> fully responsive and stories
              look beautiful on any <br className="hidden sm:block" /> screen.
            </p>
          }
        />
      </div>
      <div className="w-full md:w-[40%] px-2 h-[350px] md:h-[400px] overflow-hidden relative hover:shadow-md">
        <TextCart
          icon={<AiOutlineCloudUpload className="w-16 h-16 text-gray-600" />}
          title={
            <h1 className="font-bold text-gray-600 mt-10 text-2xl">
              No Photo Upload Limit
            </h1>
          }
          paragraph={
            <p className="font-medium mt-2 text-gray-600">
              Not matter which device {"you'r"} are on,our site is
              <br className="hidden sm:block" /> fully responsive and stories
              look beautiful on any <br className="hidden sm:block" /> screen.
            </p>
          }
        />
      </div>
      <div className="w-full md:w-[40%] px-2 h-[350px] md:h-[400px] overflow-hidden relative hover:shadow-md">
        <TextCart
          icon={<ImEmbed2 className="w-16 h-16 text-gray-600" />}
          title={
            <h1 className="font-bold text-gray-600 mt-10 text-2xl">
              Available To Embed
            </h1>
          }
          paragraph={
            <p className="font-medium mt-2 text-gray-600">
              Not matter which device {"you'r"} are on,our site is
              <br className="hidden sm:block" /> fully responsive and stories
              look beautiful on any <br className="hidden sm:block" /> screen.
            </p>
          }
        />
      </div>

      <div className="w-full md:w-[40%] px-2 h-[350px] md:h-[400px] overflow-hidden relative hover:shadow-md">
        <TextCart
          icon={
            <MdOutlineImportantDevices className="w-16 h-16 text-gray-600" />
          }
          title={
            <h1 className="font-bold text-gray-600 mt-10 text-2xl">
              100% Responsive
            </h1>
          }
          paragraph={
            <p className="font-medium mt-2 text-gray-600">
              Not matter which device {"you'r"} are on,our site is
              <br className="hidden sm:block" /> fully responsive and stories
              look beautiful on any <br className="hidden sm:block" /> screen.
            </p>
          }
        />
      </div>
      <div className="w-full md:w-[40%] px-2 h-[350px] md:h-[400px] overflow-hidden relative hover:shadow-md">
        <TextCart
          icon={<AiOutlineCloudUpload className="w-16 h-16 text-gray-600" />}
          title={
            <h1 className="font-bold text-gray-600 mt-10 text-2xl">
              No Photo Upload Limit
            </h1>
          }
          paragraph={
            <p className="font-medium mt-2 text-gray-600">
              Not matter which device {"you'r"} are on,our site is
              <br className="hidden sm:block" /> fully responsive and stories
              look beautiful on any <br className="hidden sm:block" /> screen.
            </p>
          }
        />
      </div>
      <div className="w-full md:w-[40%] px-2 h-[350px] md:h-[400px] overflow-hidden relative hover:shadow-md">
        <TextCart
          icon={<ImEmbed2 className="w-16 h-16 text-gray-600" />}
          title={
            <h1 className="font-bold text-gray-600 mt-10 text-2xl">
              Available To Embed
            </h1>
          }
          paragraph={
            <p className="font-medium mt-2 text-gray-600">
              Not matter which device {"you'r"} are on,our site is
              <br className="hidden sm:block" /> fully responsive and stories
              look beautiful on any <br className="hidden sm:block" /> screen.
            </p>
          }
        />
      </div>
    </section>
  );
};

export default Section2;
