import { motion } from "framer-motion";

function Button({ onClick, type = "button", children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.9 }}
      type={type}
      className="text-white bg-blue-700  shadow-sm  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default Button;
