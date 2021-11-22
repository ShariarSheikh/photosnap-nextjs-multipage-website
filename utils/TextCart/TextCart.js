const TextCart = ({ icon, title, paragraph }) => {
  return (
    <div className="text-center w-full h-full flex flex-col items-center justify-center">
      {icon}
      {title}
      {paragraph}
    </div>
  );
};

export default TextCart;
