import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Module {
  id: string;
  name: string;
  description: string;
  dependencies?: string[];
  category: string;
  price: number;
  includedIn?: string[];
}

const PlanDetailView = () => {
  const { planId } = useParams();
  const [selectedModules, setSelectedModules] = useState<string[]>([]);

  const navigate = useNavigate();

  // Mapeo de IDs de URL a IDs internos
  const planIdMapping: { [key: string]: string } = {
    basico: "basic",
    básico: "basic",
    premium: "premium",
    custom: "custom",
  };

  const [selectedPlan, setSelectedPlan] = useState<string>(
    planIdMapping[planId || ""] || "custom"
  );

  const modules: Module[] = [
    // Core del Sistema
    {
      id: "core-admin",
      name: "Panel de Administración",
      description:
        "Panel central para gestión de usuarios, roles y configuraciones",
      category: "Core del Sistema",
      price: 600,
      includedIn: ["basic", "premium"],
    },
    {
      id: "core-mobile",
      name: "App Móvil",
      description: "Aplicación móvil personalizada con tu marca",
      category: "Core del Sistema",
      price: 800,
      includedIn: ["basic", "premium"],
    },
    {
      id: "core-multi",
      name: "Multi-sucursal",
      description: "Gestión centralizada de múltiples sucursales",
      category: "Core del Sistema",
      price: 1000,
      includedIn: ["premium"],
    },

    // Gestión Inteligente
    {
      id: "gest-exercises",
      name: "Constructor de Ejercicios",
      description: "Creación y gestión de ejercicios personalizados",
      category: "Gestión Inteligente",
      price: 400,
      includedIn: ["basic", "premium"],
    },
    {
      id: "gest-equipment",
      name: "Mapeo de Equipamiento",
      description: "Gestión de equipamiento por sucursal",
      category: "Gestión Inteligente",
      price: 300,
      includedIn: ["basic", "premium"],
    },
    {
      id: "gest-tracking",
      name: "Tracking Avanzado",
      description: "Seguimiento detallado de progreso",
      category: "Gestión Inteligente",
      price: 500,
      includedIn: ["premium"],
    },

    // Inteligencia Artificial
    {
      id: "ai-coach",
      name: "Coach Personal IA",
      description: "Asistente IA personalizado para miembros",
      dependencies: ["core-mobile"],
      category: "Inteligencia Artificial",
      price: 1000,
      includedIn: ["premium"],
    },
    {
      id: "ai-routines",
      name: "Generación de Rutinas",
      description: "Creación automática de rutinas personalizadas",
      dependencies: ["gest-exercises", "gest-equipment"],
      category: "Inteligencia Artificial",
      price: 800,
      includedIn: ["premium"],
    },
    {
      id: "ai-analytics",
      name: "Análisis Predictivo",
      description: "Análisis avanzado de progreso y tendencias",
      dependencies: ["gest-tracking"],
      category: "Inteligencia Artificial",
      price: 900,
      includedIn: ["premium"],
    },

    // Portal Web
    {
      id: "web-landing",
      name: "Landing Page",
      description: "Página web personalizada para tu gimnasio",
      category: "Portal Web",
      price: 400,
      includedIn: ["basic", "premium"],
    },
    {
      id: "web-dashboard",
      name: "Dashboard Web",
      description: "Panel web para miembros",
      category: "Portal Web",
      price: 500,
      includedIn: ["premium"],
    },
    {
      id: "web-reservations",
      name: "Sistema de Reservas",
      description: "Gestión de reservas de clases y equipamiento",
      category: "Portal Web",
      price: 600,
      includedIn: ["premium"],
    },
  ];

  // Precios base de los planes
  const planPrices = {
    basic: 4500,
    premium: 5800,
    custom: 0,
  };

  // Inicializar módulos incluidos según el plan
  useEffect(() => {
    const includedModules = modules
      .filter((m) => m.includedIn?.includes(selectedPlan))
      .map((m) => m.id);
    setSelectedModules(includedModules);
  }, [selectedPlan]);

  const handleModuleToggle = (moduleId: string) => {
    if (selectedPlan !== "custom") {
      // Si no es plan custom, no permitir desmarcar módulos incluidos
      const module = modules.find((m) => m.id === moduleId);
      if (module?.includedIn?.includes(selectedPlan)) {
        return;
      }
    }

    setSelectedModules((prev) => {
      const module = modules.find((m) => m.id === moduleId);
      if (!module) return prev;

      if (prev.includes(moduleId)) {
        // Remover módulo y sus dependencias
        return prev.filter((id) => {
          const m = modules.find((mod) => mod.id === id);
          return m?.dependencies?.includes(moduleId) ? false : true;
        });
      } else {
        // Agregar módulo y sus dependencias requeridas
        const newSelection = [...prev, moduleId];
        if (module.dependencies) {
          module.dependencies.forEach((depId) => {
            if (!newSelection.includes(depId)) {
              newSelection.push(depId);
            }
          });
        }
        return newSelection;
      }
    });
  };

  const calculateTotal = () => {
    if (selectedPlan === "custom") {
      return selectedModules.reduce((total, moduleId) => {
        const module = modules.find((m) => m.id === moduleId);
        return total + (module?.price || 0);
      }, 0);
    }

    // Para planes básico y premium, solo calcular módulos adicionales
    return selectedModules
      .filter((moduleId) => {
        const module = modules.find((m) => m.id === moduleId);
        return !module?.includedIn?.includes(selectedPlan);
      })
      .reduce((total, moduleId) => {
        const module = modules.find((m) => m.id === moduleId);
        return total + (module?.price || 0);
      }, 0);
  };

  const getModuleDependencies = (moduleId: string) => {
    const module = modules.find((m) => m.id === moduleId);
    if (!module?.dependencies) return null;

    return (
      <div className="text-sm text-gray-500 mt-1">
        Requiere:{" "}
        {module.dependencies
          .map((depId) => {
            const dep = modules.find((m) => m.id === depId);
            return dep?.name;
          })
          .join(", ")}
      </div>
    );
  };

  const isModuleIncluded = (moduleId: string) => {
    const module = modules.find((m) => m.id === moduleId);
    return module?.includedIn?.includes(selectedPlan);
  };

  const getPlanDisplayName = (planId: string) => {
    const displayNames: { [key: string]: string } = {
      basic: "Básico",
      premium: "Premium",
      custom: "Personalizado",
    };
    return displayNames[planId] || planId;
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          {selectedPlan === "custom"
            ? "Construye tu Solución"
            : `Plan ${getPlanDisplayName(selectedPlan)}`}
        </h1>
        <p className="text-xl text-gray-600">
          {selectedPlan === "custom"
            ? "Selecciona los módulos que necesitas para tu gimnasio"
            : "Personaliza tu plan con módulos adicionales"}
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Selector de Plan Base */}
        <div className="lg:col-span-1">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-4">Plan Base</h2>
            <Select value={selectedPlan} onValueChange={setSelectedPlan}>
              <SelectTrigger>
                <SelectValue placeholder="Selecciona un plan base" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="basic">Básico ($4,500)</SelectItem>
                <SelectItem value="premium">Premium ($5,800)</SelectItem>
                <SelectItem value="custom">Personalizado</SelectItem>
              </SelectContent>
            </Select>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Resumen</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Plan Base:</span>
                  <span className="font-medium">
                    ${planPrices[selectedPlan as keyof typeof planPrices]}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Módulos Adicionales:</span>
                  <span className="font-medium">${calculateTotal()}</span>
                </div>
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total:</span>
                    <span>
                      $
                      {planPrices[selectedPlan as keyof typeof planPrices] +
                        calculateTotal()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <a href="/#contact">
              <Button className="w-full mt-6 gradient-bg text-white">
                Solicitar Cotización
              </Button>
            </a>
          </Card>
        </div>

        {/* Selector de Módulos */}
        <div className="lg:col-span-2">
          <div className="space-y-6">
            {Array.from(new Set(modules.map((m) => m.category))).map(
              (category) => (
                <div key={category} className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-xl font-bold mb-4">{category}</h3>
                  <div className="space-y-4">
                    {modules
                      .filter((m) => m.category === category)
                      .map((module) => (
                        <div key={module.id} className="flex items-start gap-4">
                          <Checkbox
                            id={module.id}
                            checked={selectedModules.includes(module.id)}
                            onCheckedChange={() =>
                              handleModuleToggle(module.id)
                            }
                            disabled={isModuleIncluded(module.id)}
                          />
                          <div className="flex-1">
                            <Label
                              htmlFor={module.id}
                              className="text-lg font-medium"
                            >
                              {module.name}
                              {isModuleIncluded(module.id) && (
                                <span className="ml-2 text-sm text-green-600">
                                  (Incluido)
                                </span>
                              )}
                            </Label>
                            <p className="text-gray-600">
                              {module.description}
                            </p>
                            {getModuleDependencies(module.id)}
                            <div className="text-sm font-medium text-blue-600 mt-1">
                              ${module.price}
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanDetailView;
