//Next.
import Link from "next/link";
//Components.
import { ThemeSwitcher } from "@/core/components/theme/ThemeSwitcher";
import { Button } from "@/core/components/ui/Button";
//Supabase.
import { createClient } from "@/core/lib/supabase/server";
import { signOutAction } from "@/auth/lib/actions";
//Lucide-react.
import { Puzzle, Lock, Settings, Rocket, Folder } from "lucide-react";

//Docs Page.
export default async function DocsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen max-w-5xl mx-auto flex flex-col bg-background">
      {/* Header */}
      <header className="pt-4 w-full bg-background/95">
        <div className="mx-auto flex h-14 items-center justify-between px-4">
          <h1 className="text-xl font-bold">Web App Starter</h1>
          <nav className="flex items-center gap-6">
            {user ? (
              <form action={signOutAction}>
                <Button variant="primary" type="submit">
                  Cerrar Sesión
                </Button>
              </form>
            ) : (
              <div className="flex items-center gap-4">
                <Link href="/auth/signIn">
                  <Button variant="ghost" className="text-sm">
                    Ingresar
                  </Button>
                </Link>
                <Link href="/auth/signUp">
                  <Button variant="secondary" size="sm">
                    Registrarse
                  </Button>
                </Link>
              </div>
            )}
          </nav>
        </div>
      </header>
      {/* Contenido Principal */}
      <main className="flex-1">
        {/* Sección Hero Documentación */}
        <section className="container px-4 py-24 md:py-32">
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Documentación Técnica
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Guía completa de arquitectura y componentes del sistema
            </p>
          </div>
        </section>

        {/* Estructura del Proyecto */}
        <section className="bg-background py-0 md:py-4">
          <div className="mx-auto px-4 max-w-3xl space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                <Puzzle className="inline-block w-5 h-5 mr-2" /> Organización por Funcionalidades
              </h2>
              <div className="space-y-4">
                <div className="p-6 rounded-lg border bg-muted/50">
                <h3 className="text-xl font-semibold mb-3"><Folder className="inline-block w-5 h-5 mr-2" /> core/</h3>
                  <ul className="space-y-2 font-mono">
                    <li>├── components/ - Componentes UI reutilizables</li>
                    <li>├── lib/ - Lógica compartida y clients</li>
                    <li>└── utils/ - Funciones helper</li>
                  </ul>
                </div>

                <div className="p-6 rounded-lg border bg-muted/50">
                  <h3 className="text-xl font-semibold mb-3"><Lock className="inline-block w-5 h-5 mr-2" /> auth/</h3>
                  <ul className="space-y-2 font-mono">
                    <li>├── components/ - Formularios de autenticación</li>
                    <li>├── lib/ - Actions de NextAuth y validaciones</li>
                    <li>└── strategies/ - Proveedores OAuth</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Stack Tecnológico */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold"><Settings className="inline-block w-5 h-5 mr-2" /> Stack Principal</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border bg-muted/50">
                  <h3 className="font-semibold">Next.js 14</h3>
                  <p className="text-sm text-muted-foreground">
                    App Router, Server Actions
                  </p>
                </div>
                <div className="p-4 rounded-lg border bg-muted/50">
                  <h3 className="font-semibold">Tailwind CSS</h3>
                  <p className="text-sm text-muted-foreground">
                    Sistema de diseño unificado
                  </p>
                </div>
                <div className="p-4 rounded-lg border bg-muted/50">
                  <h3 className="font-semibold">Supabase</h3>
                  <p className="text-sm text-muted-foreground">
                    Auth y Base de datos en tiempo real
                  </p>
                </div>
              </div>
            </div>

            {/* Guía Rápida */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold"><Rocket className="inline-block w-5 h-5 mr-2" /> Flujo de Desarrollo</h2>
              <div className="space-y-4">
                <div className="p-6 rounded-lg border bg-muted/50">
                  <h3 className="text-xl font-semibold mb-3">
                    <span className="font-normal">1.</span> Autenticación
                  </h3>
                  <p className="text-muted-foreground">
                    Implementa flujos de login usando componentes de
                    auth/components y maneja sesiones con las server actions de
                    auth/lib
                  </p>
                </div>

                <div className="p-6 rounded-lg border bg-muted/50">
                  <h3 className="text-xl font-semibold mb-3">
                    2. Componentes UI
                  </h3>
                  <p className="text-muted-foreground">
                    Utiliza los componentes preconstruidos de core/components
                    manteniendo consistencia visual
                  </p>
                </div>

                <div className="p-6 rounded-lg border bg-muted/50">
                  <h3 className="text-xl font-semibold mb-3">
                    3. Estructura de Carpetas
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Para cada nueva funcionalidad, crea una carpeta principal con el nombre de la funcionalidad y dentro organiza:
                  </p>
                  <ul className="font-mono space-y-2 text-sm">
                    <li>├── components/ 
                      <ul className="ml-4">
                        <li>├── ui/ - Componentes visuales básicos</li>
                        <li>└── function/ - Componentes segun su funcionalidad</li>
                      </ul>
                    </li>
                    <li>├── lib/
                      <ul className="ml-4">
                        <li>├── hooks/ - Lógica reusable</li>
                        <li>├── interfaces/ - Tipos TypeScript</li>
                        <li>└── utils/ - Funciones helper</li>
                      </ul>
                    </li>
                  </ul>
                  <p className="mt-3 text-muted-foreground text-sm">
                    Ejemplo: /features/payments/ sigue esta estructura
                  </p>
                </div>

                <div className="p-6 rounded-lg border bg-muted/50">
                  <h3 className="text-xl font-semibold mb-3">
                    4. Variables de Entorno
                  </h3>
                  <p className="text-muted-foreground">
                    Configura en .env.local:
                  </p>
                  <pre className="mt-2 text-sm rounded font-mono">
                    NEXT_PUBLIC_SUPABASE_URL=your_url<br/>
                    NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key<br/>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-6">
        <div className="container px-4 flex justify-between items-center">
          <p className="text-sm text-muted-foreground">
            Hecho con sueño ✌🏻
          </p>
          <div className="flex gap-4">
            <ThemeSwitcher />
          </div>
        </div>
      </footer>
    </div>
  );
}
