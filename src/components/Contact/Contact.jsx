import Email from "./Email";

const date = new Date().getFullYear();

function Contact() {
  return (
    <>
      <section className="gradientbackground p-3 md:pt-10 flex flex-col justify-center items-center">
        <div
          id="contact"
          className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-white rounded-md md:border-1 md:border-blue-900 shadow-xl"
        >
          <h2 className="text-xl md:text-4xl font-extrabold tracking-wider text-center p-5 text-blue-900 uppercase">
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl md:size-3/4 md:mx-auto">
            Feel free to reach out for any inquiries or potential opportunities!
            I&#39;m always open to connecting and discussing further. Whether
            you have questions, ideas to share, or opportunities to explore,
            I&#39;d love to hear from you. Let&#39;s connect and see how we can
            collaborate!
          </p>
          <div>
            <Email />
          </div>
        </div>
        <footer className="p-5 md:p-2 text-white text-center flex justify-center items-center mt-5">
          <div className="text-xs">Created by Shawn Sidwell</div>
          <div className="flex gap-5"></div>
          <div className="text-xs px-5">Copyright &copy; {date}</div>
        </footer>
      </section>
    </>
  );
}

export default Contact;
