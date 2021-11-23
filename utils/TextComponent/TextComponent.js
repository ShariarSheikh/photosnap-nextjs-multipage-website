const TextComponent = ({
  headerText,
  paragraph,
  componentBg,
  actionBtn,
}) => {
  return (
    <div
      className={`lg:w-[40%] px-7 py-7 2xl:px-0 2xl:py-0 w-full bg-${componentBg} flex justify-center items-center`}
    >
      <div className="w-[500px]">
        {headerText && headerText}
        {paragraph && paragraph}
        {actionBtn && actionBtn}
      </div>
    </div>
  );
};

export default TextComponent;
