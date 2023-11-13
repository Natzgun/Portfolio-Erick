import { BsLinkedin, BsGithub } from "react-icons/bs";
import Skills from "./Skills";

// Bg color #020B17

const About = () => {
  /*Aqui mi contenido centrado esta al minimo y puede reutilizarse*/
  return (
    <section
      name="about-me"
      className="bg-[#020B17] w-full h-full text-gray-300"
    >
      <div className="max-w-[1250px] mx-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl py-2 my-4 font-bold border-t-4 border-pink-600">ABOUT ME</h2>
        <div className=" grid sm:grid-cols-2 grid-rows-2 w-9/12 gap-2">
          <div className="">
            <section className="flex flex-col justify-center h-full items-center">
              <div className="">
                <img
                  src="https://i1.sndcdn.com/artworks-000599808744-91k9x2-t500x500.jpg"
                  className=" mt-auto"
                  alt="Foto de erick"
                />
              </div>
            </section>
          </div>
          <div className="">
            <div className="flex flex-col items-center">
              <div className="text-center p-2">
                <h2 className="font-bold my-4 text-xl">Devrick</h2>
                <p>
                  Im a Computer Science student in Peru 🇵🇪, I currently work as a
                  software developer. My areas of interest are:
                </p>
                <ul className="text-start list-disc px-8 py-4">
                  <li>Graphic Computing</li>
                  <li>Computer Vision</li>
                  <li>IA</li>
                  <li>Software Enginering</li>
                </ul>
              </div>
              <section className="w-full flex justify-center gap-4">
                <a href="https://github.com/Natzgun" target="_blank">
                  <div className="bg-slate-800 w-auto hover:bg-slate-900 cursor-pointer">
                    <div className="p-4">
                      <BsGithub size={20} className="text-green-500 mb-1" />
                      <h4 className="text-lg">
                        <strong>Github</strong>
                      </h4>
                      <p className="text-sm">
                        View my all projects and activity here
                      </p>
                    </div>
                  </div>
                </a>
                <a href="https://www.linkedin.com/in/erick-rmd" target="_blank">
                  <div className="bg-slate-800 w-auto hover:bg-slate-900 cursor-pointer">
                    <div className="p-4">
                      <BsLinkedin size={20} className="text-green-500 mb-1" />
                      <h4 className="text-lg">
                        <strong>LinkedIn</strong>
                      </h4>
                      <p className="text-sm">
                        View my profile and contact with me here
                      </p>
                    </div>
                  </div>
                </a>
              </section>
            </div>
          </div>
          <div className="sm:col-span-2">
            <h2 className="font-bold my-4 text-center mt-12">
              <strong className="border-t-4 py-2 border-pink-600 text-3xl font-bold">SKILLS</strong>
            </h2>
            <Skills/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
