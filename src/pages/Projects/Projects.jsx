import { data } from "./data/dataWorks.js";

const Projects = () => {
  const project = data;
  return (
    <section
      name="projects"
      className="bg-[#020B17] w-full h-full text-gray-300"
    >
      <div className=" max-w-[1250px] mx-auto flex flex-col justify-center items-center">
        <div className="pb-8 mt-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            WORKS
          </p>
        </div>

        {/* container for projects */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 w-9/12 ">
            {/* Gird Item */}
        {project.map((item, index) => (
            <div key={index} className="shadow-lg shadow-[#040c16] rounded-lg">
              <img
                src={item.image}
                alt=""
                className="rounded-md duration-200 hover:scale-110"
              />
              <span className="text-xl font bold text-white tracking-wider ">
                {item.name}
              </span>
              {/* Hover effect for images */}
              <div className="pt-8 text-center flex items-center justify-center">
                {/* eslint-disable-next-line */}
                <a href={item.github} target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Code
                  </button>
                </a>
                {/* eslint-disable-next-line */}
                <a href={item.live} target="_blank">
                  <button
                    className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                  >
                    Live
                  </button>
                </a>
              </div>
            </div>
        ))}
          </div>
        {/* <div className="bg-yellow-200 grid grid-cols-2 sm:grid-cols-3 grid-rows-2 w-9/12"> */}
        {/*   <div className="bg-red-300 col-span-3">My projects</div> */}
        {/*   <div className="bg-indigo-400">izquierda</div> */}
        {/*   <div className="bg-pink-500">derecha</div> */}
        {/*   <div className="bg-pink-400">derecha</div> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Projects;
