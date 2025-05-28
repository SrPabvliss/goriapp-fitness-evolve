
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            🇪🇨 Hecho en Ecuador
            <span className="bg-blue-200 px-2 py-1 rounded-full text-xs">Nueva IA</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            Transforma tu
            <span className="text-gradient block">Gimnasio con IA</span>
            Personalizada
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            La primera plataforma SaaS de Ecuador que combina inteligencia artificial 
            con gestión integral de gimnasios
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="gradient-bg hover:shadow-lg transition-all duration-300 text-white px-8 py-4 text-lg font-semibold"
            >
              Ver Planes y Precios
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-200 hover:border-blue-300 px-8 py-4 text-lg font-semibold"
            >
              Solicitar Demo
            </Button>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="bg-gray-100 rounded-lg p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-500 ml-auto">Dashboard GoriApp</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-blue-500 rounded p-3 text-white text-sm">
                    <div className="font-semibold">542</div>
                    <div className="opacity-80">Usuarios Activos</div>
                  </div>
                  <div className="bg-green-500 rounded p-3 text-white text-sm">
                    <div className="font-semibold">89%</div>
                    <div className="opacity-80">Retención</div>
                  </div>
                  <div className="bg-purple-500 rounded p-3 text-white text-sm">
                    <div className="font-semibold">1,247</div>
                    <div className="opacity-80">Rutinas IA</div>
                  </div>
                </div>
                <div className="bg-white rounded p-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Coach IA: "María, hoy aumentemos el peso en sentadillas..."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
