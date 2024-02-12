const date = new Date().getFullYear();
function Footer() {
  return (
    <footer className=" p-2 text-white text-center flex justify-center items-center bg-gradient-to-r from-blue-500 from-10%  to-blue-700  ">
      <div className="text-xs">Created by Shawn Sidwell</div>
      <div className="flex gap-5"></div>
      <div className="text-xs px-5">Copyright &copy; {date}</div>
    </footer>
  );
}

export default Footer;
