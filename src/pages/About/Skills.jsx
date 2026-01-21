import JavaScript from "../../assets/javascript.png";
import ReactImg from "../../assets/react.png";
import Node from "../../assets/node.png";
import Tailwind from "../../assets/tailwind.png";
import Mongo from "../../assets/mongo.png";
import CPP from "../../assets/cpp.png";
import Linux from "../../assets/tux.png";
import Python from "../../assets/python.png";
import Git from "../../assets/git.png";
import GitHub from "../../assets/github.png";

const Skills = () => {
  const webSkills = [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", name: "Java" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", name: "Spring Boot" },
    { image: JavaScript, name: "JavaScript" },
    { image: ReactImg, name: "React" },
    { image: Node, name: "Node.js" },
    { image: Tailwind, name: "Tailwind" },
    { image: Mongo, name: "MongoDB" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg", name: "MariaDB" },
  ];

  const graphicsSkills = [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg", name: "C" },
    { image: CPP, name: "C++" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opengl/opengl-original.svg", name: "OpenGL" },
    { image: "https://upload.wikimedia.org/wikipedia/sco/2/21/Nvidia_logo.svg", name: "CUDA" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sfml/sfml-original.svg", name: "SFML" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", name: "Unity" },
    { image: Python, name: "Python" },
  ];

  const essentialSkills = [
    { image: Linux, name: "Linux" },
    { image: Git, name: "Git" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", name: "Docker" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", name: "Jenkins" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg", name: "SonarQube" },
    { image: GitHub, name: "GitHub" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/neovim/neovim-original.svg", name: "Neovim" },
  ];

  const SkillGroup = ({ title, skills }) => (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-pink-500 mb-4 text-center">{title}</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-col items-center p-2 hover:bg-slate-800/50 rounded-lg transition-all duration-300 w-16"
          >
            <img className="w-8 h-8 object-contain" src={skill.image} alt={skill.name} />
            <p className="text-xs text-gray-400 mt-1 text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="py-6 mb-12">
      <SkillGroup title="Web Development" skills={webSkills} />
      <SkillGroup title="Computer Graphics & Low Level" skills={graphicsSkills} />
      <SkillGroup title="Essential Tools" skills={essentialSkills} />
    </div>
  );
};

export default Skills;
