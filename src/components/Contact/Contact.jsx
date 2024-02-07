import profilePic from "../../assets/LinkedInPhoto Final.jpg";

function Contact() {
  return (
    <div id="about" className="my-12">
      <div className="flex flex-col items-center md:flex-row md:justify-center bg-gradient-to-r from-blue-500 from-10%  to-blue-900">
        <div className=" p-12">
          <div className="flex justify-evenly items-center text-slate-500 font-medium bg-white rounded-xl p-6 m-5">
            <div className="mx-12">
              <h2 className="text-4xl font-extrabold tracking-wider text-center p-5 text-blue-900 uppercase">
                About Me
              </h2>
              <div className="mx-24">
                I fell in love with programming and I have at least learnt
                something, I think… 🤷‍♂️ My field of interest includes building
                new web technologies and products, as well as areas related to
                blockchain. Whenever possible, I apply my passion for developing
                products with Node.js and modern JavaScript libraries and
                frameworks I am fluent in classics like C++, JavaScript, and Go.
              </div>
              <div className="p-5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
