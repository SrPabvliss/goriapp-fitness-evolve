// src/components/FeaturesGridSection.tsx
import { 
  Settings, 
  Smartphone, 
  Users, 
  Dumbbell, 
  Building2, 
  Bot, 
  BarChart3, 
  Globe, 
  Shield, 
  Zap,
  Database,
  Headphones
} from "lucide-react";

const FeaturesGridSection = () => {
  const features = [
    {
      title: "Panel de Administración Completo",
      description: "Gestiona usuarios, membresías, roles y configuraciones desde un dashboard intuitivo y moderno.",
      icon: <Settings className="w-8 h-8" />,
      mockup: "dashboard",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "App Móvil Personalizada",
      description: "Aplicación móvil con tu marca, diseño personalizado y experiencia nativa para iOS y Android.",
      icon: <Smartphone className="w-8 h-8" />,
      mockup: "mobile",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Gestión Multi-sucursal",
      description: "Administra múltiples ubicaciones, personal por sucursal y reportes consolidados desde un solo lugar.",
      icon: <Building2 className="w-8 h-8" />,
      mockup: "branches",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Constructor de Ejercicios",
      description: "Crea y gestiona tu propio catálogo de ejercicios con imágenes, videos y descripciones personalizadas.",
      icon: <Dumbbell className="w-8 h-8" />,
      mockup: "exercises",
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Coach Personal IA",
      description: "Asistente de inteligencia artificial que genera rutinas personalizadas y acompaña a tus miembros 24/7.",
      icon: <Bot className="w-8 h-8" />,
      mockup: "ai-coach",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Análisis y Reportes",
      description: "Visualiza métricas clave, progreso de miembros y tendencias de tu negocio con reportes en tiempo real.",
      icon: <BarChart3 className="w-8 h-8" />,
      mockup: "analytics",
      color: "from-teal-500 to-teal-600"
    },
    {
      title: "Portal Web Integrado",
      description: "Sitio web personalizado que se sincroniza con tu app, perfecto para marketing y captación de clientes.",
      icon: <Globe className="w-8 h-8" />,
      mockup: "website",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Autogestión de Contenido",
      description: "Tú tienes el control total: sube ejercicios, mapea equipamiento y personaliza todo sin depender de nadie.",
      icon: <Database className="w-8 h-8" />,
      mockup: "content-management",
      color: "from-amber-500 to-amber-600"
    },
    {
      title: "Tracking Avanzado",
      description: "Seguimiento detallado de progreso, pesos, repeticiones y evolución de cada miembro de tu gimnasio.",
      icon: <Zap className="w-8 h-8" />,
      mockup: "tracking",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      title: "Gestión de Usuarios",
      description: "Administra membresías, perfiles, estados de suscripción y comunicación con tus miembros de forma eficiente.",
      icon: <Users className="w-8 h-8" />,
      mockup: "user-management",
      color: "from-rose-500 to-rose-600"
    },
    {
      title: "Seguridad Empresarial",
      description: "Encriptación de datos, backups automáticos y cumplimiento de normativas de protección de información.",
      icon: <Shield className="w-8 h-8" />,
      mockup: "security",
      color: "from-slate-500 to-slate-600"
    },
    {
      title: "Soporte Dedicado",
      description: "Equipo de soporte técnico, actualizaciones continuas y capacitación para maximizar el uso de tu plataforma.",
      icon: <Headphones className="w-8 h-8" />,
      mockup: "support",
      color: "from-violet-500 to-violet-600"
    }
  ];

  const getMockupContent = (type: string) => {
    switch (type) {
      case "dashboard":
        return (
          <div className="bg-white rounded-lg shadow-sm p-4 h-48">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Dashboard Principal</span>
            </div>
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-blue-100 rounded p-2 text-center">
                <div className="text-lg font-bold text-blue-600">247</div>
                <div className="text-xs text-gray-600">Miembros</div>
              </div>
              <div className="bg-green-100 rounded p-2 text-center">
                <div className="text-lg font-bold text-green-600">89%</div>
                <div className="text-xs text-gray-600">Activos</div>
              </div>
              <div className="bg-purple-100 rounded p-2 text-center">
                <div className="text-lg font-bold text-purple-600">3</div>
                <div className="text-xs text-gray-600">Sucursales</div>
              </div>
            </div>
            <div className="space-y-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-200 rounded-full"></div>
                  <div className="h-2 bg-gray-200 rounded flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case "mobile":
        return (
          <div className="bg-gray-900 rounded-2xl p-2 h-48 mx-auto w-32">
            <div className="bg-white rounded-xl h-full p-3 relative overflow-hidden">
              <div className="text-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-1"></div>
                <div className="text-xs font-bold">Mi Gimnasio</div>
              </div>
              <div className="space-y-2">
                <div className="bg-blue-50 rounded p-2 text-center">
                  <div className="text-xs font-medium">Rutina de Hoy</div>
                </div>
                <div className="bg-green-50 rounded p-2 text-center">
                  <div className="text-xs font-medium">Mi Progreso</div>
                </div>
                <div className="bg-purple-50 rounded p-2 text-center">
                  <div className="text-xs font-medium">Coach IA</div>
                </div>
              </div>
            </div>
          </div>
        );

      case "ai-coach":
        return (
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-4 h-48">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-sm">🤖</span>
              </div>
              <div>
                <div className="font-medium text-sm">Coach IA</div>
                <div className="text-xs text-green-600 flex items-center gap-1">
                  <div className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></div>
                  En línea
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-3 mb-2">
              <div className="text-sm text-gray-800 mb-2">
                "He creado una rutina personalizada basada en tus objetivos..."
              </div>
              <div className="flex gap-1">
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">Pecho</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Espalda</span>
              </div>
            </div>
          </div>
        );

      case "analytics":
        return (
          <div className="bg-white rounded-lg p-4 h-48">
            <div className="text-sm font-medium mb-3">Análisis Mensual</div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Nuevos Miembros</span>
                  <span>+23%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Retención</span>
                  <span>87%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '87%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Uso IA Coach</span>
                  <span>91%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '91%'}}></div>
                </div>
              </div>
            </div>
          </div>
        );

      case "branches":
        return (
          <div className="bg-white rounded-lg p-4 h-48">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Sucursales</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-2 bg-purple-50 rounded">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xs">🏋️</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium">Sucursal Principal</div>
                  <div className="text-xs text-gray-500">120 miembros activos</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-purple-50 rounded">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 text-xs">💪</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium">Sucursal Norte</div>
                  <div className="text-xs text-gray-500">85 miembros activos</div>
                </div>
              </div>
            </div>
          </div>
        );

      case "exercises":
        return (
          <div className="bg-white rounded-lg p-4 h-48">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Ejercicios</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-orange-50 rounded p-2">
                <div className="w-full h-16 bg-orange-100 rounded mb-1"></div>
                <div className="text-xs font-medium">Press de Banca</div>
                <div className="text-xs text-gray-500">Pecho</div>
              </div>
              <div className="bg-orange-50 rounded p-2">
                <div className="w-full h-16 bg-orange-100 rounded mb-1"></div>
                <div className="text-xs font-medium">Sentadillas</div>
                <div className="text-xs text-gray-500">Piernas</div>
              </div>
            </div>
          </div>
        );

      case "website":
        return (
          <div className="bg-white rounded-lg p-4 h-48">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Portal Web</span>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-pink-100 rounded w-3/4"></div>
              <div className="h-2 bg-pink-100 rounded w-1/2"></div>
              <div className="h-2 bg-pink-100 rounded w-2/3"></div>
              <div className="grid grid-cols-3 gap-2 mt-3">
                <div className="h-16 bg-pink-50 rounded"></div>
                <div className="h-16 bg-pink-50 rounded"></div>
                <div className="h-16 bg-pink-50 rounded"></div>
              </div>
            </div>
          </div>
        );

      case "content-management":
        return (
          <div className="bg-white rounded-lg p-4 h-48">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Gestión de Contenido</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-amber-50 rounded">
                <span className="text-amber-600">📝</span>
                <div className="text-xs">Editar Ejercicios</div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-amber-50 rounded">
                <span className="text-amber-600">📸</span>
                <div className="text-xs">Subir Imágenes</div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-amber-50 rounded">
                <span className="text-amber-600">🎥</span>
                <div className="text-xs">Gestionar Videos</div>
              </div>
            </div>
          </div>
        );

      case "tracking":
        return (
          <div className="bg-white rounded-lg p-4 h-48">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Seguimiento</span>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Peso Actual</span>
                  <span>75kg</span>
                </div>
                <div className="w-full bg-cyan-100 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span>Repeticiones</span>
                  <span>12x3</span>
                </div>
                <div className="w-full bg-cyan-100 rounded-full h-2">
                  <div className="bg-cyan-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>
          </div>
        );

      case "user-management":
        return (
          <div className="bg-white rounded-lg p-4 h-48">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Usuarios</span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 p-2 bg-rose-50 rounded">
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                  <span className="text-rose-600 text-xs">👤</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium">Juan Pérez</div>
                  <div className="text-xs text-gray-500">Membresía Premium</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-rose-50 rounded">
                <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                  <span className="text-rose-600 text-xs">👤</span>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-medium">María García</div>
                  <div className="text-xs text-gray-500">Membresía Básica</div>
                </div>
              </div>
            </div>
          </div>
        );

      case "security":
        return (
          <div className="bg-white rounded-lg p-4 h-48">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-slate-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Seguridad</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded">
                <span className="text-slate-600">🔒</span>
                <div className="text-xs">Encriptación de Datos</div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded">
                <span className="text-slate-600">💾</span>
                <div className="text-xs">Backups Automáticos</div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-slate-50 rounded">
                <span className="text-slate-600">🛡️</span>
                <div className="text-xs">Protección Avanzada</div>
              </div>
            </div>
          </div>
        );

      case "support":
        return (
          <div className="bg-white rounded-lg p-4 h-48">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              <span className="text-xs text-gray-600">Soporte</span>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 p-2 bg-violet-50 rounded">
                <span className="text-violet-600">💬</span>
                <div className="text-xs">Chat en Vivo</div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-violet-50 rounded">
                <span className="text-violet-600">📞</span>
                <div className="text-xs">Soporte 24/7</div>
              </div>
              <div className="flex items-center gap-2 p-2 bg-violet-50 rounded">
                <span className="text-violet-600">📚</span>
                <div className="text-xs">Base de Conocimientos</div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-gray-500 text-xl">📱</span>
              </div>
              <div className="text-sm text-gray-600">Funcionalidad disponible</div>
            </div>
          </div>
        );
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Todo lo que necesitas <span className="text-gradient">en una plataforma</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una solución completa que se adapta a tu gimnasio, crece contigo y te da control total sobre tu operación digital.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="group hover:shadow-xl transition-all duration-300 bg-white rounded-2xl border border-gray-100 overflow-hidden">
              {/* Mockup visual */}
              <div className="h-48 p-4 bg-gradient-to-br from-gray-50 to-gray-100">
                {getMockupContent(feature.mockup)}
              </div>
              
              {/* Contenido */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            ¿Necesitas algo específico que no está aquí?
          </p>
          <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Hablemos sobre tu proyecto personalizado →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGridSection;