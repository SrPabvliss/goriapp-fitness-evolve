// src/components/VisualProblemSolutionSection.tsx
import { Zap, Shield, TrendingUp, Settings, Smartphone, BarChart3, Users, Bot } from "lucide-react";

const beneficios = [
  {
    icon: <Settings className="w-8 h-8 text-blue-500" />, 
    title: "Personalización Total",
    subtitle: "Hecho a tu medida",
    desc: "Adapta la plataforma a tu metodología y procesos únicos."
  },
  {
    icon: <Zap className="w-8 h-8 text-green-500" />, 
    title: "Autogestión Completa",
    subtitle: "Tú tienes el control",
    desc: "Gestiona todo sin depender de terceros ni desarrolladores."
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-purple-500" />, 
    title: "ROI Predecible",
    subtitle: "Costos fijos",
    desc: "Actualiza y personaliza sin costos extra ni sorpresas."
  },
  {
    icon: <Shield className="w-8 h-8 text-indigo-500" />, 
    title: "Escalabilidad Ilimitada",
    subtitle: "Crece sin límites",
    desc: "Multi-sucursal y expansión desde el día uno."
  },
  {
    icon: <Smartphone className="w-8 h-8 text-cyan-500" />, 
    title: "App Móvil de Marca",
    subtitle: "Tu imagen, tu app",
    desc: "Tus miembros acceden a todo desde una app personalizada."
  },
  {
    icon: <Bot className="w-8 h-8 text-green-600" />, 
    title: "Coach IA 24/7",
    subtitle: "Inteligencia Artificial",
    desc: "Rutinas y seguimiento personalizado para cada usuario."
  },
  {
    icon: <Users className="w-8 h-8 text-pink-500" />, 
    title: "Gestión Integral",
    subtitle: "Todo en un solo lugar",
    desc: "Administra usuarios, membresías y sucursales fácilmente."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-orange-500" />, 
    title: "Analítica Visual",
    subtitle: "Decisiones inteligentes",
    desc: "Visualiza métricas clave y haz crecer tu negocio."
  }
];

const VisualProblemSolutionSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transforma tu <span className="text-gradient">Operación</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre los beneficios que solo nuestra plataforma puede ofrecerte
          </p>
        </div>

        {/* Beneficios visuales */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {beneficios.map((item, index) => (
            <div key={index} className="bg-white border border-blue-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center">
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-blue-600 font-medium mb-2">{item.subtitle}</p>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisualProblemSolutionSection;