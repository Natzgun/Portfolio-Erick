const About = () => {
  /*Aqui mi contenido centrado esta al minimo y puede reutilizarse*/
  return (
    <section
      name="about-me"
      className="bg-gray-800 w-full h-screen text-gray-300"
    >
      <div className="max-w-[1250px] mx-auto flex flex-col justify-center items-center h-full">
        <div className="bg-yellow-200 grid grid-cols-2 grid-rows-2 w-9/12">
          <div className="bg-red-300 col-span-2">
            titulo
          </div>
          <div className="bg-indigo-400">
            izquierda
          </div>
          <div className="bg-pink-500">
            derecha
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
