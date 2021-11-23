import TextComponent from "../../utils/TextComponent/TextComponent";
import ImageComponent from "../../utils/ImageComponent/ImageComponent";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row md:min-h-[94vh] sm:h-auto">
      <TextComponent
        headerText={
          <h1 className="md:text-6xl text-4xl text-gray-300 tracking-wider uppercase font-medium">
            Pricing
          </h1>
        }
        paragraph={
          <p className="text-gray-600 mt-6 text-2xl">
            Create a your stories.Photosnap is a platform <br />
            for photographers and visual storyteller. It's <br />
            the simple way to create and share your photos
          </p>
        }
        componentBg={"black"}
      />
      <ImageComponent
        img={
          "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        }
      />
    </section>
  );
};

export default HeroSection;
