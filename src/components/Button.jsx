function Button({ onClick, type = "button", children }) {
  return (
    <button
      type={type}
      className="text-white bg-blue-800 hover:bg-blue-900 shadow-sm hover:shadow-md focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
