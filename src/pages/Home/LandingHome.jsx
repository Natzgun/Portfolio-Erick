import { TypeAnimation } from "react-type-animation";
import { HiArrowNarrowRight } from "react-icons/hi";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from "react-scroll";

// Color palette #0a192f
// New color palette #040F1E

const LandingHome = () => {
  return (
    <section name="home" className="w-full h-screen bg-[#040F1E] ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-10 md:px-40 lg:px-20 flex flex-col justify-center h-full">
        <div className="">
          
        <span className=" text-pink-400 py-2">Hi, my name is</span>
        <div className="mb-2">
          <h1 className="text-slate-100 text-4xl sm:text-7xl font-bold">
            Erick Malcoaccha
          </h1>
        </div>
        <div className="text-3xl sm:text-5xl">
          <span className=" mr-4 font-bold text-[#8892b0]">I'm a</span>
          <TypeAnimation
            sequence={[
              "Computer Scientist",
              2000,
              "Developer",
              2000,
              // 'Youtuber',
              // 2000
            ]}
            speed={50}
            className="text-green-500"
            wrapper="span"
            repeat={Infinity}
          />
        </div>
        {/* <p className="py-4 text-[#8892b0] max-w-[700px]"> */}
        {/*   "If you can imagine it you can program it" <br /> -{" "} */}
        {/*   <span>Alejandro Toboada</span> */}
        {/* </p> */}
        <div className="text-white flex gap-4 my-4 cursor-pointer">
          <a href="https://linkedin.com/in/erick-rmd" target="_blank">
            <BsLinkedin size={20} className="hover:text-green-500" />
          </a>
          <a href="https://github.com/Natzgun" target="_blank">
            <BsGithub size={20} className="hover:text-green-500" />
          </a>
          <a href="https://github.com/Natzgun" target="_blank">
            <BsInstagram size={20} className="hover:text-green-500" />
          </a>
        </div>
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="border-2 group text-white px-12 py-3 my-4 flex items-center hover:bg-green-600">
              Works
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
        {/* <div className="bg-slate-300 hidden sm:block">logo personal</div> */}
        </div>
      </div>
    </section>
  );
};

export default LandingHome;
