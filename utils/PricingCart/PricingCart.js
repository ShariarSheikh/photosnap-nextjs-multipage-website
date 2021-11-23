const PricingCart = ({ title, paragraph, time, price, btn }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-10">
      <div
        className="w-full flex flex-col items-center justify-center
       sm:flex-row sm:items-start sm:justify-between
        lg:justify-center lg:items-center lg:flex-col"
      >
        <div className="flex flex-col items-center justify-center sm:justify-start sm:items-start lg:justify-center lg:items-center">
          {title && title}
          {paragraph && paragraph}
        </div>

        <div>
          {price && price}
          {time && time}
        </div>
      </div>

      {btn && btn}
    </div>
  );
};

export default PricingCart;
