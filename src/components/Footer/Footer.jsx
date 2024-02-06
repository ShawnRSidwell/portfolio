function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className=" p-2 text-white text-center flex justify-center items-center bg-blue-900  border-gray-300 border-t">
      <div className="text-xs">Created by Shawn Sidwell</div>
      <div className="flex gap-5"></div>
      <div className="text-xs px-5">Copyright &copy; {date}</div>
    </footer>
  );
}

export default Footer;
