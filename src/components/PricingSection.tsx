import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const PricingSection = () => {
  const navigate = useNavigate();

  const handlePlanSelect = (plan: string) => {
    navigate(`/plans/${plan}`);
  };

  const plans = [
    {
      name: "Básico",
      price: "$4,500",
      monthly: "$149/mes",
      tagline: "Solución Esencial",
      description: "Ideal para gimnasios que buscan digitalización inteligente",
      popular: false,
      features: [
        "Panel de administración personalizado",
        "App móvil con tu marca",
        "Gestión de usuarios y membresías",
        "Catálogo de 50 ejercicios",
        "Mapeo de 20 máquinas",
        "Tracking de entrenamientos",
        "Chat IA conversacional",
        "Landing page personalizada",
        "Soporte técnico prioritario",
        "Actualizaciones gratuitas"
      ],
      limitations: [
        "Sin generación de rutinas por IA",
        "Sin análisis avanzado de progreso",
        "Sin gestión multi-sucursal",
        "Sin coach personal IA"
      ],
      cta: "Ver Detalles"
    },
    {
      name: "Premium",
      price: "$5,800",
      monthly: "$249/mes",
      tagline: "Solución Empresarial",
      description: "Para gimnasios que buscan liderar con tecnología",
      popular: true,
      features: [
        "Todo lo del plan Básico",
        "Ejercicios y máquinas ilimitados",
        "Sucursales ilimitadas",
        "Portal web completo",
        "Generación de rutinas por IA",
        "Coach personal IA",
        "Análisis de progreso",
        "Gestión multi-sucursal",
        "Reportes ejecutivos avanzados",
        "Branding personalizado",
        "Soporte 24/7",
        "Implementación guiada"
      ],
      limitations: [],
      cta: "Ver Detalles"
    },
    {
      name: "Custom",
      price: "Personalizado",
      monthly: "A medida",
      tagline: "Solución a tu medida",
      description: "Construye la solución perfecta para tu negocio",
      popular: false,
      features: [
        "Selección de módulos personalizada",
        "Integración con sistemas existentes",
        "Desarrollo de características únicas",
        "Soporte dedicado",
        "Implementación personalizada",
        "Capacitación in-house",
        "SLA garantizado",
        "Roadmap personalizado"
      ],
      limitations: [],
      cta: "Construir Solución"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Soluciones <span className="text-gradient">Personalizadas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige la solución que mejor se adapte a tu gimnasio. Todas incluyen configuración inicial, 
            migración de datos y soporte continuo.
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
                    Recomendado
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
                  onClick={() => handlePlanSelect(plan.name.toLowerCase())}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            ¿Necesitas una solución específica? <a href="#contact" className="text-blue-600 font-semibold hover:underline">Contáctanos</a> para una propuesta personalizada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
