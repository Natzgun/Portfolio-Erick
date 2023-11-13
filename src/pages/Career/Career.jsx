import { AiOutlineCalendar } from "react-icons/ai";
import { FaGraduationCap } from "react-icons/fa";
import { BsBriefcaseFill } from "react-icons/bs";

const Career = () => {
  return (
    <section
      name="career"
      className="bg-[#040F1E] w-full h-screen text-gray-300"
    >
      <div className="max-w-[1250px] mx-auto flex flex-col justify-center items-center h-full">
        <h2 className="text-3xl py-2 my-4 font-bold border-t-4 border-pink-600">
          MY CAREER
        </h2>
        <div className="flex flex-col sm:flex-row w-9/12">
          {/* Grid Education*/}
          <div className="sm:w-[50%]">
            <h2 className="flex py-6 text-white items-center justify-center font-bold text-xl">
              <FaGraduationCap size={25} className="text-pink-500 mr-2" />
              Education
            </h2>

            <div className="flex-col">
              <div className="mb-6">
                <div class="w-4 h-4 bg-green-500 rounded-full absolute"></div>
                <div className="border-l-2 border-green-500 px-8 ml-1.5">
                  <h3 className="font-extrabold text-lg text-white">
                    <strong>Computer Science</strong>
                  </h3>
                  <p className="text-sm mt-1">
                    Universidad Nacional de San Agustin
                  </p>
                  <span className="flex text-green-500 mt-2">
                    <AiOutlineCalendar size={20} className=" mb-1 mr-2" />
                    2022 - Present
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Grid Work Experience*/}
          <div className="sm:w-[50%]">
            <h2 className="flex py-6 text-white items-center justify-center font-bold text-xl">
              <BsBriefcaseFill size={25} className="text-pink-500 mr-2" />
              Work Experience
            </h2>

            <div className="flex-col">
              <div className="mb-6">
                <div class="w-4 h-4 bg-green-500 rounded-full absolute"></div>
                <div className="border-l-2 border-green-500 px-8 ml-1.5">
                  <h3 className="font-extrabold text-lg text-white">
                    <strong>Developer Frontend</strong>
                  </h3>
                  <p className="text-sm mt-1">
                    Hackathon NASA Space Apps Challenge
                  </p>
                  <span className="flex text-green-500 mt-2">
                    <AiOutlineCalendar size={20} className=" mb-1 mr-2" />
                    October 2023
                  </span>
                </div>
              </div>
            </div>

                        <div className="flex-col">
              <div className="mb-6">
                <div class="w-4 h-4 bg-green-500 rounded-full absolute"></div>
                <div className="border-l-2 border-green-500 px-8 ml-1.5">
                  <h3 className="font-extrabold text-lg text-white">
                    <strong>Fullstack WebApp development</strong>
                  </h3>
                  <p className="text-sm mt-1">
                    Project TI for Hamuk WebAPP
                  </p>
                  <span className="flex text-green-500 mt-2">
                    <AiOutlineCalendar size={20} className=" mb-1 mr-2" />
                    October 2023
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Career;
