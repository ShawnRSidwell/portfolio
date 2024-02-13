import Button from "../Button";
import Email from "./Email";

function Contact() {
  return (
    <>
      <section className=" md:bg-gradient-to-r from-blue-500 from-10%  to-blue-700 dark:bg-gray-900 md:py-24 md:mt-10">
        <div
          id="contact"
          className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-white rounded-md md:border-2 md:border-blue-900 shadow-xl"
        >
          <h2 className="text-xl md:text-4xl font-extrabold tracking-wider text-center p-5 text-blue-900 uppercase">
            Contact Me
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl md:size-3/4 md:mx-auto">
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
      </section>
    </>
  );
}

export default Contact;
