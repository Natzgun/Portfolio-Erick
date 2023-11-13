import ProjectCard from "./ProjectCard.jsx";
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-9/12 ">
          {/* Gird Item */}
          {project.map((item, index) => (
            <ProjectCard item={item} index={index}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
