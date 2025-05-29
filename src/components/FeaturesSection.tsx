import { ShieldCheck, Smartphone, BarChart2, Settings, Bot, LayoutDashboard } from "lucide-react";

const features = [
  {
    title: "Gestión centralizada",
    description:
      "Administra todo tu gimnasio, usuarios y sucursales desde un panel intuitivo y moderno. Simplifica la operación diaria y mantén el control total en un solo lugar.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80", // TODO: Reemplazar por mockup de dashboard propio
    alt: "Panel de gestión centralizada"
  },
  {
    title: "Entrenamiento inteligente",
    description:
      "Ofrece rutinas y planes personalizados generados por IA, adaptados a los objetivos y preferencias de cada usuario. El coach virtual motiva y guía a tus miembros en todo momento.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80", // TODO: Reemplazar por mockup de IA/coach
    alt: "Entrenamiento inteligente con IA"
  },
  {
    title: "App móvil de marca",
    description:
      "Tus miembros acceden a su progreso, rutinas y comunidad desde una app intuitiva, personalizada con la imagen de tu gimnasio.",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80", // TODO: Reemplazar por mockup de app móvil
    alt: "App móvil personalizada"
  },
  {
    title: "Analítica visual",
    description:
      "Visualiza el avance de tu negocio y de tus miembros con reportes claros y métricas clave en tiempo real. Toma decisiones informadas y detecta oportunidades de mejora.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80", // TODO: Reemplazar por mockup de analítica
    alt: "Analítica visual y reportes"
  },
  {
    title: "Personalización flexible",
    description:
      "Adapta la plataforma a las necesidades de tu gimnasio: crea tu propio catálogo de ejercicios, mapea tus máquinas y personaliza la experiencia visual.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80", // TODO: Reemplazar por mockup de personalización
    alt: "Personalización flexible"
  },
  {
    title: "Soporte y seguridad profesional",
    description:
      "Disfruta de soporte dedicado y actualizaciones constantes, con la tranquilidad de que tus datos están siempre protegidos.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80", // TODO: Reemplazar por mockup de seguridad/soporte
    alt: "Soporte y seguridad"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col gap-20">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className={`flex flex-col-reverse lg:flex-row items-center gap-10 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Imagen o mockup */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={feature.image}
                alt={feature.alt}
                className="rounded-xl shadow-lg max-w-xs w-full object-contain"
              />
            </div>
            {/* Texto */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900">{feature.title}</h3>
              <p className="text-lg text-gray-600 mb-2">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
