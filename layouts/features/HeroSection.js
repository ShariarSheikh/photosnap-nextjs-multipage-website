import TextComponent from "../../utils/TextComponent/TextComponent";
import ImageComponent from "../../utils/ImageComponent/ImageComponent";

const HeroSection = () => {
  return (
    <section className="w-full flex flex-col-reverse md:flex-row md:min-h-[94vh] sm:h-auto">
      <TextComponent
        headerText={
          <h1 className="md:text-6xl text-4xl text-gray-300 tracking-wider uppercase font-medium">
            Features
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
          "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        }
      />
    </section>
  );
};

export default HeroSection;
