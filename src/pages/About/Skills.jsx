import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JavaScript from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import Node from "../../assets/node.png";
import FireBase from "../../assets/firebase.png";
import GitHub from "../../assets/github.png";
import Tailwind from "../../assets/tailwind.png";
import Mongo from "../../assets/mongo.png";
import CPP from  "../../assets/cpp.png";
import Linux from "../../assets/tux.png";
import Python from "../../assets/python.png";
import Git from "../../assets/git.png";

const Skills = () => {
  const skillImages = [
    { image: Linux, name: "Linux" },
    { image: JavaScript, name: "JavaScript" },
    { image: ReactImg, name: "React" },
    { image: Node, name: "Node" },
    // { image: FireBase, name: "FireBase" },
    { image: Git, name: "Git" },
    { image: GitHub, name: "GitHub" },
    { image: CPP, name: "C++" },
    { image: Python, name: "Python"},
    { image: Tailwind, name: "Tailwind" },
    { image: Mongo, name: "Mongo" },
    { image: HTML, name: "HTML" },
    { image: CSS, name: "CSS" },
  ];
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 mb-16">
      {skillImages.map((skill) => (
        <div key={skill.name} className="shadow-md shadow-[#041c16] hover:scale-110 duration-500">
          <img className="w-20 mx-auto" src={skill.image} alt="HTML icon" />
          <p className="my-4">{skill.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
