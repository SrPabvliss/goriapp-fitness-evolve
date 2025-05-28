import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Cómo se adapta GoriApp a mi gimnasio?",
      answer: "GoriApp se personaliza completamente a tus necesidades. Desde el branding y la interfaz hasta los módulos específicos que necesitas. Nuestro equipo trabaja contigo para entender tus procesos y adaptar la solución perfectamente a tu operación."
    },
    {
      question: "¿Qué incluye la implementación inicial?",
      answer: "La implementación incluye: configuración completa del sistema, personalización de marca, migración de datos existentes, capacitación del equipo, configuración de sucursales, y soporte técnico continuo. Todo esto se realiza con un equipo dedicado que te guía en cada paso."
    },
    {
      question: "¿Cómo funciona el sistema multi-sucursal?",
      answer: "El sistema multi-sucursal permite gestionar todas tus ubicaciones desde un solo panel. Puedes configurar equipamiento, personal, horarios y reportes por sucursal, mientras mantienes una visión consolidada del negocio. Ideal para cadenas de gimnasios en crecimiento."
    },
    {
      question: "¿Qué tan personalizable es la IA?",
      answer: "Nuestra IA se adapta a tu metodología de entrenamiento, equipamiento disponible y objetivos específicos. Puedes personalizar las rutinas, el estilo de coaching, y los parámetros de progreso. La IA aprende de tu operación para brindar recomendaciones cada vez más precisas."
    },
    {
      question: "¿Puedo integrar GoriApp con mis sistemas actuales?",
      answer: "Sí, ofrecemos APIs y herramientas de integración para conectar con sistemas de contabilidad, CRM, o cualquier otro software que uses. Nuestro equipo de desarrollo puede crear integraciones personalizadas según tus necesidades específicas."
    },
    {
      question: "¿Qué tipo de soporte y actualizaciones incluye?",
      answer: "Todos los planes incluyen soporte técnico prioritario, actualizaciones gratuitas, y capacitación continua. El plan Premium incluye soporte 24/7, implementación guiada, y un roadmap personalizado de mejoras. Además, ofrecemos sesiones de optimización periódicas."
    },
    {
      question: "¿Cómo se maneja la seguridad de los datos?",
      answer: "Implementamos las más altas medidas de seguridad: encriptación SSL, backups automáticos, autenticación de dos factores, y cumplimiento con normativas de protección de datos. Los datos se almacenan en servidores seguros y nunca se comparten con terceros."
    },
    {
      question: "¿Qué sucede si necesito funcionalidades adicionales?",
      answer: "Nuestro modelo modular permite agregar funcionalidades según crezcas. Puedes actualizar tu plan o solicitar desarrollo personalizado de características específicas. Trabajamos contigo para implementar las mejoras que necesites en tu roadmap."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resuelve tus dudas sobre nuestra solución personalizada
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-200 last:border-b-0 bg-white rounded-lg mb-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full text-left p-6 flex justify-between items-center hover:text-blue-600 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            ¿Tienes más preguntas? <a href="#contact" className="text-blue-600 font-semibold hover:underline">Contáctanos</a> para una consulta personalizada.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
