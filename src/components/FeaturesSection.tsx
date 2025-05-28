
const FeaturesSection = () => {
  const featureCategories = [
    {
      title: "Sistema de Administración",
      icon: "⚙️",
      features: [
        "Dashboard ejecutivo con métricas",
        "Gestión de usuarios y permisos",
        "Configuración por sucursal",
        "Reportes automáticos"
      ]
    },
    {
      title: "Inteligencia Artificial",
      icon: "🤖",
      features: [
        "Conversación natural en español",
        "Rutinas personalizadas",
        "Adaptación a equipamiento",
        "Análisis de progreso"
      ]
    },
    {
      title: "App Móvil",
      icon: "📱",
      features: [
        "Tracking en tiempo real",
        "Registro de pesos/repeticiones",
        "Historial de progreso",
        "Notificaciones inteligentes",
        "Branding personalizable"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Características <span className="text-gradient">Principales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnología de última generación diseñada específicamente para gimnasios ecuatorianos
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featureCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-500 mt-1">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
