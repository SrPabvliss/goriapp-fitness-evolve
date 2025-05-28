
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  const plans = [
    {
      name: "Básico",
      price: "$3,500",
      monthly: "$89/mes",
      tagline: "Perfecto para empezar",
      description: "Ideal para gimnasios con 1 sucursal que buscan digitalizarse",
      popular: false,
      features: [
        "App móvil personalizada",
        "Panel de administración",
        "Hasta 50 ejercicios",
        "Hasta 20 máquinas",
        "1 sucursal",
        "Tracking básico",
        "Chat IA conversacional",
        "Landing page",
        "Gestión manual de usuarios",
        "Soporte por 3 meses"
      ],
      limitations: [
        "Sin rutinas generadas por IA",
        "Sin tracking avanzado (pesos/repeticiones)",
        "Sin gestión multi-sucursal",
        "Sin análisis inteligente de progreso"
      ],
      cta: "Empezar con Básico"
    },
    {
      name: "Premium",
      price: "$4,800",
      monthly: "$189/mes",
      tagline: "La solución completa",
      description: "Para gimnasios en crecimiento que quieren tecnología de punta",
      popular: true,
      features: [
        "Ejercicios ilimitados",
        "Máquinas ilimitadas",
        "Sucursales ilimitadas",
        "Portal web completo",
        "Tracking avanzado completo",
        "Generación de rutinas por IA",
        "Coach personal IA",
        "Análisis inteligente de progreso",
        "Gestión multi-sucursal",
        "Reportes ejecutivos",
        "Soporte prioritario",
        "Branding personalizado"
      ],
      limitations: [],
      cta: "Elegir Premium"
    },
    {
      name: "Custom",
      price: "Variable",
      monthly: "Personalizado",
      tagline: "Construye tu solución perfecta",
      description: "Selecciona exactamente las características que necesitas",
      popular: false,
      features: [
        "Calculadora Interactiva disponible",
        "Características a la medida",
        "Integración personalizada",
        "Soporte dedicado",
        "Implementación guiada"
      ],
      limitations: [],
      cta: "Personalizar mi GoriApp"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Planes y <span className="text-gradient">Precios</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan perfecto para tu gimnasio. Todos incluyen configuración inicial y migración de datos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${plan.popular ? 'border-blue-500 border-2 shadow-xl scale-105' : 'border-gray-200'} hover:shadow-lg transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription className="text-sm text-blue-600 font-medium">
                  {plan.tagline}
                </CardDescription>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                  <div className="text-sm text-gray-500">{plan.monthly}</div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Features */}
                <div>
                  <h4 className="font-semibold text-green-700 mb-3">✓ Incluido:</h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <span className="text-green-500 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3">✗ Limitaciones:</h4>
                    <ul className="space-y-2">
                      {plan.limitations.map((limitation, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                          <span className="text-red-400 mt-1">✗</span>
                          <span>{limitation}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button 
                  className={`w-full ${plan.popular ? 'gradient-bg text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
                  size="lg"
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
