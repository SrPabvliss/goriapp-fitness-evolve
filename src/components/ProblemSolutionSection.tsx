
const ProblemSolutionSection = () => {
  const problems = [
    "Falta de personalización en rutinas",
    "Dependencia total de entrenadores",
    "Baja retención de usuarios",
    "Competencia tecnológica desventajosa",
    "Gestión manual y poco eficiente"
  ];

  const solutions = [
    "Coach de IA 24/7 personalizado",
    "Tracking avanzado automático",
    "Sistema multi-sucursal integrado",
    "Autogestión de contenido inteligente",
    "ROI medible y reportes ejecutivos"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problema */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              El Desafío de los
              <span className="text-red-500 block">Gimnasios Modernos</span>
            </h2>
            <div className="space-y-4">
              {problems.map((problem, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-500 text-sm">✗</span>
                  </div>
                  <p className="text-gray-700 text-lg">{problem}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solución */}
          <div>
            <h2 className="text-4xl font-bold mb-8 text-gray-900">
              GoriApp:
              <span className="text-gradient block">La Solución Inteligente</span>
            </h2>
            <div className="space-y-4">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-500 text-sm">✓</span>
                  </div>
                  <p className="text-gray-700 text-lg">{solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
