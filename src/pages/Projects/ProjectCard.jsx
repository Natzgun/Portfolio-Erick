import { BsGithub } from "react-icons/bs";
import { BiWorld} from "react-icons/bi";

const ProjectCard = ({item,index}) => {
  return (
    <div
      key={index}
      className="pb-4 my-4 rounded-lg shadow-lg shadow-[#134232] dark:shadow-gray-900 bg-[#020B17] dark:bg-gray-800 duration-300 hover:-translate-y-1"
    >
      {/* Clickable Area */}
      <a _href="link" className="cursor-pointer">
        <figure>
          {/* Image */}
          <img
            src={item.image}
            className="rounded-t h-72 w-full object-cover"
          />
          <figcaption className="p-4">
            <p className="text-lg mb-4 font-bold leading-relaxed text-white dark:text-gray-300">
              <h1 className="text-bold text-xl m-2">{item.name}</h1>
            </p>
            {/* Description */}
            <small className="leading-5 text-gray-500 dark:text-gray-400">
              {/* Post Description */}
            </small>
          </figcaption>
          <div className="flex justify-evenly">
            <a href={item.github} target="_blank">
              <button
                className="flex text-center rounded-lg px-4 py-1 m-2
                       bg-pink-500 text-white font-bold text-md hover:bg-pink-700"
              >
                <BsGithub size={20} className="hover:text-slate-950 mr-2" />
                Code
              </button>
            </a>
            {/* eslint-disable-next-line */}
            <a href={item.live} target="_blank">
              <button
                className="flex text-center rounded-lg px-4 py-1 m-2
                       bg-white text-gray-700 font-bold text-md hover:sm:bg-gray-300 hover:text-gray-900"
              >
                <BiWorld size={20} className="hover:text-slate-950 mr-2" />
                Demo
              </button>
            </a>
          </div>
        </figure>
      </a>
    </div>
  );
};

export default ProjectCard;
