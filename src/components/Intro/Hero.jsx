function Hero({ headline, image, children }) {
  return (
    <div className="flex">
      <div>
        <h2 className="text-xl py-5">{headline}</h2>
        <p>{children}</p>
      </div>
      {image && (
        <img
          className="m-4 mt-5 rounded-xl"
          src={image}
          alt="icon"
          height="240"
          width="240"
        />
      )}
    </div>
  );
}

export default Hero;
