
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
    message: ""
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
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Solicita tu <span className="text-gradient">Demo Personalizada</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo GoriApp puede transformar tu gimnasio. Te contactamos en menos de 24 horas.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
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
                <Label htmlFor="phone">Teléfono</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  placeholder="+593 99 123 4567"
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
                <Label htmlFor="branches">Número de Sucursales</Label>
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
                <Label htmlFor="plan">Plan de Interés</Label>
                <Select onValueChange={(value) => handleInputChange("plan", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basico">Plan Básico</SelectItem>
                    <SelectItem value="premium">Plan Premium</SelectItem>
                    <SelectItem value="custom">Plan Custom</SelectItem>
                    <SelectItem value="consulta">Solo consulta</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="message">Mensaje Adicional</Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange("message", e.target.value)}
                placeholder="Cuéntanos más sobre tu gimnasio y necesidades específicas..."
                rows={4}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button type="submit" className="gradient-bg text-white flex-1" size="lg">
                Solicitar Demo Personalizada
              </Button>
              <Button type="button" variant="outline" className="flex-1" size="lg">
                Obtener Cotización
              </Button>
            </div>

            <p className="text-sm text-gray-500 text-center">
              * Campos obligatorios. Te contactaremos en menos de 24 horas.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
