import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gymName: "",
    branches: "",
    plan: "",
    message: "",
    currentSystem: "",
    timeline: "",
    budget: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Aquí iría la lógica de envío del formulario
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Agenda tu <span className="text-gradient">Consulta Personalizada</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo podemos adaptar GoriApp a las necesidades específicas de tu gimnasio. 
            Te contactamos en menos de 24 horas para una propuesta detallada.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Nombre Completo *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="phone">Teléfono *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+593 99 123 4567"
                  required
                />
              </div>
              <div>
                <Label htmlFor="gymName">Nombre del Gimnasio *</Label>
                <Input
                  id="gymName"
                  value={formData.gymName}
                  onChange={(e) => handleInputChange("gymName", e.target.value)}
                  placeholder="Nombre de tu gimnasio"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="branches">Número de Sucursales *</Label>
                <Select onValueChange={(value) => handleInputChange("branches", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 sucursal</SelectItem>
                    <SelectItem value="2-3">2-3 sucursales</SelectItem>
                    <SelectItem value="4-10">4-10 sucursales</SelectItem>
                    <SelectItem value="10+">Más de 10 sucursales</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="currentSystem">Sistema Actual</Label>
                <Input
                  id="currentSystem"
                  value={formData.currentSystem}
                  onChange={(e) => handleInputChange("currentSystem", e.target.value)}
                  placeholder="¿Qué sistema usas actualmente?"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="timeline">Timeline de Implementación</Label>
                <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="inmediato">Inmediato</SelectItem>
                    <SelectItem value="1-3">1-3 meses</SelectItem>
                    <SelectItem value="3-6">3-6 meses</SelectItem>
                    <SelectItem value="6+">Más de 6 meses</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="budget">Presupuesto Estimado</Label>
                <Select onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basico">Plan Básico ($3,500)</SelectItem>
                    <SelectItem value="premium">Plan Premium ($4,800)</SelectItem>
                    <SelectItem value="custom">Personalizado</SelectItem>
                    <SelectItem value="consulta">Solo consulta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="message">Necesidades Específicas *</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Cuéntanos sobre tus necesidades específicas, procesos actuales, y objetivos a corto y largo plazo..."
                rows={4}
                required
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" className="gradient-bg text-white flex-1" size="lg">
                Solicitar Consulta Personalizada
              </Button>
              <Button type="button" variant="outline" className="flex-1" size="lg">
                Ver Propuesta Detallada
              </Button>
            </div>

            <div className="text-center space-y-2">
              <p className="text-sm text-gray-500">
                * Campos obligatorios. Te contactaremos en menos de 24 horas.
              </p>
              <p className="text-sm text-gray-500">
                Tu información está segura y nunca será compartida con terceros.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
