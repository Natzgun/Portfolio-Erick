const About = () => {
  /*Aqui mi contenido centrado esta al minimo y puede reutilizarse*/
  return (
    <section
      name="about-me"
      className="bg-gray-800 w-full h-full text-gray-300"
    >
      <div className="max-w-[1250px] mx-auto flex flex-col justify-center items-center">
        <h2 className="text-3xl py-8 font-bold">About me</h2>
        <div className="bg-yellow-200 grid sm:grid-cols-2 grid-rows-3 w-9/12">
          <div className="bg-indigo-500 items-center">
            <img
              src="https://grunt.ar/img/programming.jpg"
              className="p-4"
              alt="Foto de erick"
            />
          </div>
          <div className="bg-pink-500">
            <div className="flex flex-col items-center">
              <div className="text-center p-2">
                <h1>IM, Erick</h1>
                <p>
                  Im a Computer Science student in Peru, I currently work as a
                  software developer. My areas of interest are:
                </p>
                <ul className="text-start list-disc px-8 py-4">
                  <li>Graphic Computing</li>
                  <li>Computer Vision</li>
                  <li>IA</li>
                  <li>Software Enginering</li>
                </ul>
              </div>
              <section className="flex gap-4">
                <div>Github</div>
                <div>LinkedIn</div>
              </section>
            </div>
          </div>
          <div className="bg-pink-500 sm:col-span-2">Skills</div>
          <div className="bg-pink-500">
            Imagenes de los skills
            <img
              src="https://i.ytimg.com/vi/KEkrWRHCDQU/maxresdefault.jpg"
              alt=""
              className="p-4"
            />
          </div>
          <div className="bg-pink-400">Mas skills</div>
        </div>
      </div>
    </section>
  );
};

export default About;
