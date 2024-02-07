import kanbanboard from "../../assets/kanbanboardcropped.png";
import ReactiveButton from "reactive-button";

function Projects() {
  return (
    <div id="projects" className=" max-w-screen-xl mx-auto mb-12 mt-4">
      <div className="flex mx-auto">
        <div className="flex flex-col">
          <h2 className="text-4xl font-extrabold tracking-wider text-center p-4 text-blue-900 uppercase">
            Projects
          </h2>
          <img
            src={kanbanboard}
            alt="kanban board"
            className="w-1/2 rounded-lg mx-auto my-5 border-2 border-blue-900 shadow-md"
          />
          <p className="p-6 mb-5 text-center text-slate-500 text-lg ">
            My projects makes use of vast variety of latest technology tools. My
            best experience is to create Data Science projects and deploy them
            to web applications using cloud infrastructure.
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Default
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Default
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Default
            </button>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Default
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
