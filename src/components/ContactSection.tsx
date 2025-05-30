import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription } from "@/components/ui/alert";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const EMAILJS_CONFIG = {
  SERVICE_ID: "service_mblylbq",
  TEMPLATE_ID: "template_sbnw8iv",
  PUBLIC_KEY: "kmqERqS1dAwfv1_jZ",
};

interface FormData {
  name: string;
  email: string;
  phone: string;
  gymName: string;
  branches: string;
  plan: string;
  message: string;
  currentSystem: string;
  timeline: string;
  budget: string;
}

interface FormStatus {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const ContactSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    gymName: "",
    branches: "",
    plan: "",
    message: "",
    currentSystem: "",
    timeline: "",
    budget: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    loading: false,
    success: false,
    error: null,
  });

  const resetFormStatus = () => {
    setFormStatus({
      loading: false,
      success: false,
      error: null,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      "name",
      "email",
      "phone",
      "gymName",
      "branches",
      "message",
    ];
    const missingFields = requiredFields.filter(
      (field) => !formData[field as keyof FormData]
    );

    if (missingFields.length > 0) {
      setFormStatus({
        loading: false,
        success: false,
        error:
          "Por favor completa todos los campos obligatorios marcados con *",
      });
      return;
    }

    setFormStatus({ loading: true, success: false, error: null });

    try {
      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_phone: formData.phone,
        gym_name: formData.gymName,
        branches: formData.branches,
        plan: formData.plan || "No especificado",
        message: formData.message,
        current_system: formData.currentSystem || "No especificado",
        timeline: formData.timeline || "No especificado",
        date: new Date().toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setFormStatus({
        loading: false,
        success: true,
        error: null,
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        gymName: "",
        branches: "",
        plan: "",
        message: "",
        currentSystem: "",
        timeline: "",
        budget: "",
      });

      setFormStatus((prev) => ({ ...prev, success: false }));
    } catch (error) {
      console.error("Error enviando email:", error);
      setFormStatus({
        loading: false,
        success: false,
        error:
          "Hubo un problema al enviar tu solicitud. Por favor intenta nuevamente o contáctanos directamente.",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (formStatus.error) {
      resetFormStatus();
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Agenda tu{" "}
            <span className="text-gradient">Consulta Personalizada</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre cómo podemos adaptar GoriApp a las necesidades específicas
            de tu gimnasio. Te contactamos en menos de 24 horas para una
            propuesta detallada.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Mensajes de estado */}
          {formStatus.success && (
            <Alert className="mb-6 bg-green-50 border-green-200">
              <AlertDescription className="text-green-800">
                ¡Excelente! Tu solicitud ha sido enviada correctamente. Te
                contactaremos en menos de 24 horas. Revisa tu email para la
                confirmación.
              </AlertDescription>
            </Alert>
          )}

          {formStatus.error && (
            <Alert className="mb-6 bg-red-50 border-red-200">
              <AlertDescription className="text-red-800">
                {formStatus.error}
              </AlertDescription>
            </Alert>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name">Nombre Completo *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  placeholder="Tu nombre"
                  required
                  disabled={formStatus.loading}
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
                  disabled={formStatus.loading}
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
                  disabled={formStatus.loading}
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
                  disabled={formStatus.loading}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="branches">Número de Sucursales *</Label>
                <Select
                  value={formData.branches}
                  onValueChange={(value) =>
                    handleInputChange("branches", value)
                  }
                  disabled={formStatus.loading}
                >
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
                  onChange={(e) =>
                    handleInputChange("currentSystem", e.target.value)
                  }
                  placeholder="¿Qué sistema usas actualmente?"
                  disabled={formStatus.loading}
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="timeline">Timeline de Implementación</Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) =>
                    handleInputChange("timeline", value)
                  }
                  disabled={formStatus.loading}
                >
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
                <Select
                  value={formData.plan}
                  onValueChange={(value) => handleInputChange("plan", value)}
                  disabled={formStatus.loading}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basico">Plan Básico ($4,500)</SelectItem>
                    <SelectItem value="premium">
                      Plan Premium ($5,800)
                    </SelectItem>
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
                disabled={formStatus.loading}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                type="submit"
                className="gradient-bg text-white flex-1"
                size="lg"
                disabled={formStatus.loading}
              >
                {formStatus.loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  "Solicitar Consulta Personalizada"
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                size="lg"
                disabled={formStatus.loading}
                onClick={() => {
                  navigate(`/plans/goriapp-ai`);
                }}
              >
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
