const ProblemSolutionSection = () => {
  const problems = [
    "Soluciones genéricas que no se adaptan a tu metodología",
    "Alta dependencia de proveedores externos",
    "Falta de control sobre tu propia plataforma",
    "Costos operativos elevados por personalización",
    "Limitaciones para escalar tu negocio"
  ];

  const solutions = [
    "Solución personalizada a tu metodología y procesos",
    "Autogestión completa de contenido y operaciones",
    "Control total sobre tu plataforma y datos",
    "ROI optimizado con costos operativos reducidos",
    "Escalabilidad garantizada para tu crecimiento"
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transforma tu <span className="text-gradient">Operación</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deja atrás las soluciones genéricas y adopta una plataforma diseñada específicamente para tu gimnasio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problema */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              El Problema de las
              <span className="text-red-500 block">Soluciones Genéricas</span>
            </h2>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 text-lg">✗</span>
                  </div>
                  <div>
                    <p className="text-gray-800 text-lg font-medium">{problem}</p>
                    <p className="text-gray-600 mt-1">
                      {getProblemDescription(index)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solución */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">
              GoriApp:
              <span className="text-gradient block">Solución Personalizada</span>
            </h2>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-gray-800 text-lg font-medium">{solution}</p>
                    <p className="text-gray-600 mt-1">
                      {getSolutionDescription(index)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            ¿Listo para transformar tu gimnasio? <a href="#contact" className="text-blue-600 font-semibold hover:underline">Agenda una consulta personalizada</a>
          </p>
        </div>
      </div>
    </section>
  );
};

const getProblemDescription = (index: number) => {
  const descriptions = [
    "Las soluciones estándar no se adaptan a tu metodología única de entrenamiento y procesos específicos.",
    "Dependes de terceros para cada cambio o personalización, aumentando costos y tiempos de espera.",
    "No tienes control total sobre tu plataforma, limitando tu capacidad de innovación y adaptación.",
    "Los costos operativos se elevan por la necesidad constante de personalización externa.",
    "Las soluciones genéricas limitan tu capacidad de crecimiento y expansión a nuevas sucursales."
  ];
  return descriptions[index];
};

const getSolutionDescription = (index: number) => {
  const descriptions = [
    "Adaptamos la plataforma a tu metodología, procesos y necesidades específicas desde el inicio.",
    "Tienes control total para gestionar contenido, usuarios y operaciones sin depender de terceros.",
    "Accede a todas las herramientas y datos de tu plataforma para tomar decisiones informadas.",
    "Reduce costos operativos con autogestión y automatización inteligente de procesos.",
    "Escala tu operación sin límites, agregando sucursales y funcionalidades según crezcas."
  ];
  return descriptions[index];
};

export default ProblemSolutionSection;
