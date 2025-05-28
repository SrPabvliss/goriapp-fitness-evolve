
import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "¿Qué incluye la configuración inicial?",
      answer: "Incluye la personalización completa de tu app móvil, configuración del dashboard administrativo, migración de datos existentes, capacitación del equipo y soporte técnico durante los primeros 3 meses."
    },
    {
      question: "¿Cómo funciona la IA de GoriApp?",
      answer: "Nuestra IA conversacional en español analiza el perfil del usuario, su historial de entrenamientos, equipamiento disponible y objetivos para generar rutinas personalizadas y brindar coaching en tiempo real."
    },
    {
      question: "¿Puedo cambiar de plan más adelante?",
      answer: "Sí, puedes actualizar tu plan en cualquier momento. Si cambias de Básico a Premium, se activan inmediatamente todas las funciones adicionales sin pérdida de datos."
    },
    {
      question: "¿Qué tipo de soporte técnico incluye?",
      answer: "Todos los planes incluyen soporte técnico vía WhatsApp y email. El plan Premium incluye soporte prioritario con respuesta en menos de 2 horas hábiles."
    },
    {
      question: "¿Los datos de mis usuarios están seguros?",
      answer: "Absolutamente. Cumplimos con todas las normativas de protección de datos, usamos encriptación SSL y almacenamiento seguro en la nube. Los datos nunca se comparten con terceros."
    },
    {
      question: "¿Cuánto tiempo toma la implementación?",
      answer: "La implementación típica toma entre 2-4 semanas dependiendo del plan. Esto incluye configuración, migración de datos, personalización y capacitación del equipo."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resuelve tus dudas sobre GoriApp y nuestros planes
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full text-left py-6 flex justify-between items-center hover:text-blue-600 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ↓
                </span>
              </button>
              
              {openIndex === index && (
                <div className="pb-6 pr-12">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
