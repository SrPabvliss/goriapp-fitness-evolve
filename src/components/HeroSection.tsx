// src/components/HeroSection.tsx
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className=" overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className=" inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda - Mensaje inicial */}
          <div className="text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
              🇪🇨 Solución Personalizada
              <span className="bg-blue-200 px-2 py-1 rounded-full text-xs font-semibold">IA Avanzada</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Tu gimnasio
              <span className="text-gradient block">potenciado por IA</span>
              a tu medida
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed">
              La primera plataforma integral que combina inteligencia artificial con gestión 
              personalizada de gimnasios. <strong>Diseñada para crecer contigo.</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="gradient-bg hover:shadow-lg transition-all duration-300 text-white px-8 py-4 text-lg font-semibold"
                onClick={() => scrollToSection('solutions')}
              >
                Explorar Soluciones
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-200 hover:border-blue-300 px-8 py-4 text-lg font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                Agenda una Consulta
              </Button>
            </div>
          </div>

          {/* Columna derecha - Chat IA */}
          <div className="relative">
            <div className="relative mx-auto w-[340px] h-[700px] bg-gray-900 rounded-[3rem] shadow-2xl border-[14px] border-gray-900 overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[140px] h-[30px] bg-gray-900 rounded-b-2xl z-10"></div>
              
              {/* Screen */}
              <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                {/* Status Bar */}
                <div className="h-12   bg-gradient-to-r from-blue-500 to-purple-600 px-4 flex items-center justify-between text-white text-xs">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                  </div>
                </div>

                {/* Chat Content */}
                <div className="h-[calc(100%-2rem)] bg-gray-50 p-4 flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-200">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🤖</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-gray-900">Coach IA GoriApp</h3>
                      <p className="text-xs text-green-600 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        En línea
                      </p>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl p-4 mb-4 shadow-md">
                      <p className="text-sm font-medium mb-2">¡Hola! Soy el Coach IA de tu gimnasio 👋</p>
                      <p className="text-sm opacity-90">
                        He analizado tus datos y estoy listo para crear rutinas personalizadas y acompañarte en tu progreso fitness.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 justify-center mb-4">
                      <span className="bg-blue-100 text-blue-700 px-6 py-3 rounded-full text-xs font-medium">
                        Rutinas Personalizadas
                      </span>
                      <span className="bg-purple-100 text-purple-700 px-8 py-3 rounded-full text-xs font-medium">
                        Seguimiento 24/7
                      </span>
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="mt-auto pt-3 border-t border-gray-200 mb-4">
                    <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm">
                      <span className="text-gray-400">💬</span>
                      <input 
                        type="text" 
                        placeholder="Escribe un mensaje..." 
                        className="flex-1 bg-transparent text-sm outline-none"
                      />
                      <button className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                        ➤
                      </button>
                    </div>
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