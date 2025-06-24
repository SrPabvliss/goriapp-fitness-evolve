// src/components/ComparisonSection.tsx
import { Check } from "lucide-react";

const ComparisonSection = () => {
  const features = [
    {
      category: "🏢 Gestión del Gimnasio",
      items: [
        {
          name: "Número de sucursales",
          goriapp: "1 sucursal",
          goriappai: "Ilimitadas"
        },
        {
          name: "Usuarios activos",
          goriapp: "200 usuarios",
          goriappai: "Ilimitados"
        },
        {
          name: "Panel de administración",
          goriapp: true,
          goriappai: true
        },
        {
          name: "Gestión de membresías",
          goriapp: true,
          goriappai: true
        },
        {
          name: "Reportes ejecutivos",
          goriapp: false,
          goriappai: true
        }
      ]
    },
    {
      category: "📱 Aplicación Móvil",
      items: [
        {
          name: "App con tu marca",
          goriapp: true,
          goriappai: true
        },
        {
          name: "Tracking básico",
          goriapp: true,
          goriappai: true
        },
        {
          name: "Tracking avanzado",
          goriapp: false,
          goriappai: true
        },
        {
          name: "Branding personalizado",
          goriapp: "Básico",
          goriappai: "Completo"
        }
      ]
    },
    {
      category: "🤖 Inteligencia Artificial",
      items: [
        {
          name: "Chat IA conversacional",
          goriapp: "Básico",
          goriappai: "Avanzado"
        },
        {
          name: "Generación de rutinas IA",
          goriapp: false,
          goriappai: true
        },
        {
          name: "Coach personal IA",
          goriapp: false,
          goriappai: true
        },
        // {
        //   name: "Análisis predictivo",
        //   goriapp: false,
        //   goriappai: true
        // }
      ]
    },
    {
      category: "💪 Contenido y Ejercicios",
      items: [
        {
          name: "Constructor de ejercicios",
          goriapp: "50 ejercicios máx",
          goriappai: "Ilimitados"
        },
        {
          name: "Mapeo de equipamiento",
          goriapp: "20 máquinas máx",
          goriappai: "Ilimitado"
        },
        {
          name: "Biblioteca multimedia",
          goriapp: true,
          goriappai: true
        }
      ]
    },
    {
      category: "🌐 Portal Web",
      items: [
        {
          name: "Landing page",
          goriapp: true,
          goriappai: true
        },
        {
          name: "Portal web completo",
          goriapp: false,
          goriappai: true
        },
        {
          name: "Integración con app",
          goriapp: "Básica",
          goriappai: "Completa"
        }
      ]
    },
    {
      category: "🛠️ Soporte y Servicios",
      items: [
        {
          name: "Soporte técnico",
          goriapp: "Email (48h)",
          goriappai: "24/7 Prioritario"
        },
        {
          name: "Implementación",
          goriapp: "Estándar",
          goriappai: "Guiada personalizada"
        },
        {
          name: "Actualizaciones",
          goriapp: true,
          goriappai: true
        },
        {
          name: "Capacitación",
          goriapp: "Básica",
          goriappai: "Completa"
        }
      ]
    }
  ];

  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-800">
          <Check className="w-4 h-4 text-white" />
        </span>
      ) : (
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gray-200">
          <Check className="w-4 h-4 text-gray-300" />
        </span>
      );
    }
    return <span className="text-base font-medium">{value}</span>;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Compara <span className="text-gradient">nuestros planes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra la solución perfecta para tu gimnasio con esta comparación detallada
          </p>
        </div>

        <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-100">
          {/* Header de planes */}
          <div className="grid grid-cols-3 gap-px bg-gray-200">
            <div className="bg-white p-6"></div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-3">GoriApp</h4>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <span className="text-base font-medium text-gray-700">Solución Esencial</span>
              </div>
            </div>
            <div className="relative bg-gradient-to-br from-blue-200 to-purple-200 p-8 text-center border-2 border-blue-500 shadow-lg">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow">IA Avanzada</span>
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-3">GoriApp AI</h4>
              <div className="bg-white rounded-lg px-6 py-3 shadow-sm">
                <span className="text-base font-medium text-gray-700">Solución Empresarial</span>
              </div>
            </div>
          </div>

          {/* Contenido de la tabla */}
          <div className="divide-y divide-gray-100">
            {features.map((category, categoryIdx) => (
              <div key={categoryIdx}>
                {/* Header de categoría */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6">
                  <div className="flex items-center gap-2">
                    <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-base font-medium">
                      {category.category}
                    </span>
                  </div>
                </div>

                {/* Items de la categoría */}
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="grid grid-cols-3 gap-px bg-gray-100">
                    <div className="bg-white p-6 flex items-center">
                      <span className="text-base font-medium text-gray-900">{item.name}</span>
                    </div>
                    <div className="bg-white p-6 text-center flex items-center justify-center">
                      {renderCell(item.goriapp)}
                    </div>
                    <div className="bg-white p-6 text-center flex items-center justify-center">
                      {renderCell(item.goriappai)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {/* Footer con precios */}
          <div className="grid grid-cols-3 gap-px bg-gray-200">
            <div className="bg-white p-8 flex items-center justify-center">
              <span className="text-xl font-semibold text-gray-900">Precio total</span>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">$4,500</div>
              {/* <div className="text-base text-gray-600 mb-4">+ $89/mes mantenimiento</div> */}
              <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                Elegir GoriApp
              </button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 text-center border-2 border-blue-500 shadow-lg">
              <div className="text-3xl font-bold text-gray-900 mb-2">$5,800</div>
              {/* <div className="text-base text-gray-600 mb-4">+ $189/mes mantenimiento</div> */}
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
                Elegir GoriApp AI
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            ¿Necesitas algo específico que no aparece aquí? 
            <a href="#contact" className="text-blue-600 font-semibold hover:underline ml-1">
              Hablemos sobre tu proyecto personalizado
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;