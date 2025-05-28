const FeaturesSection = () => {
  const featureCategories = [
    {
      title: "Core del Sistema",
      icon: "⚡",
      features: [
        "Panel de administración personalizado",
        "Sistema multi-tenant seguro",
        "Gestión de usuarios y roles",
        "Sistema de suscripciones",
        "App móvil con tu marca",
        "Navegación adaptativa"
      ]
    },
    {
      title: "Gestión Inteligente",
      icon: "📊",
      features: [
        "Constructor de ejercicios personalizado",
        "Mapeo de equipamiento por sucursal",
        "Tracking avanzado de progreso",
        "Gestión multi-sucursal",
        "Reportes ejecutivos",
        "Autogestión de contenido"
      ]
    },
    {
      title: "Inteligencia Artificial",
      icon: "🤖",
      features: [
        "Coach personal IA",
        "Generación de rutinas inteligentes",
        "Análisis predictivo de progreso",
        "Chat conversacional en español",
        "Adaptación a equipamiento",
        "Recomendaciones personalizadas"
      ]
    },
    {
      title: "Portal Web",
      icon: "🌐",
      features: [
        "Landing page personalizada",
        "Dashboard web para usuarios",
        "Sincronización con app móvil",
        "Sistema de reservas",
        "Branding personalizado",
        "SEO optimizado"
      ]
    },
    {
      title: "Soporte y Seguridad",
      icon: "🛡️",
      features: [
        "Soporte técnico prioritario",
        "Actualizaciones gratuitas",
        "Backup automático",
        "Seguridad de datos",
        "Capacitación incluida",
        "SLA garantizado"
      ]
    },
    {
      title: "Integración y Escalabilidad",
      icon: "🔄",
      features: [
        "APIs disponibles",
        "Integración con sistemas existentes",
        "Escalable según necesidades",
        "Personalización avanzada",
        "Módulos adicionales",
        "Roadmap personalizado"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Módulos <span className="text-gradient">Personalizables</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Construye la solución perfecta para tu gimnasio con nuestros módulos integrados
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {featureCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{category.title}</h3>
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

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            ¿Necesitas más información sobre algún módulo específico? 
            <a href="#contact" className="text-blue-600 font-semibold hover:underline ml-1">
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
