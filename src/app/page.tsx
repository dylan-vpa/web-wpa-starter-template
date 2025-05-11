//Next.
import Link from "next/link";
//Components.
import { ThemeSwitcher } from "@/core/components/theme/ThemeSwitcher";
import { Button } from "@/core/components/ui/Button";
//Supabase.
import { createClient } from "@/core/lib/supabase/server";
import { signOutAction } from "@/auth/lib/actions";

//Home.
export default async function Home() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  return (
    <div className="min-h-screen max-w-5xl mx-auto flex flex-col bg-background">
      {/* Header */}
      <header className="pt-4 w-full bg-background/95">
        <div className="mx-auto flex h-14 items-center justify-between px-4">
          <h1 className="text-xl font-bold">Web App Starter</h1>
          <nav className="flex items-center gap-6">
            {user ? (
              <form action={signOutAction}>
                <Button 
                  variant="primary" 
                  type="submit"
                >
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

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container px-4 py-24 md:py-32">
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary border border-primary/20 backdrop-blur-sm">
              Plantilla para Desarrollo Interno
            </div>
            <h1 className="text-4xl font-bold md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
              Inicia tu Próximo Proyecto más Rápido
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Una plantilla lista para producción con Next.js, Tailwind CSS,
              Supabase y componentes propios. Diseñada para el desarrollo
              ágil de aplicaciones internas.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button variant="primary">Clonar Repositorio</Button>
              <Button variant="secondary">Ver Documentación</Button>
            </div>
          </div>
        </section>

        {/* Quick Start Section */}
        <section className="bg-background py-0 md:py-4">
          <div className="mx-auto px-4">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-center">
                Implementación en 4 pasos
              </h2>
              <div className="rounded-xl border bg-muted/50 p-6 shadow-sm hover:border-primary/50 transition-colors duration-300">
                <div className="font-mono text-sm space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="text-primary">$</span>
                    <span className="text-green-500">git clone https://github.com/dylan-vpa/web-app-starter-template.git</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">$</span>
                    <span className="text-foreground">cd web-app-starter</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">$</span>
                    <span className="text-yellow-500">pnpm install</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-primary">$</span>
                    <span className="text-blue-500">pnpm dev</span>
                  </div>
                </div>
              </div>
              <p className="text-center text-muted-foreground text-sm">
                Requiere Node.js v18+ y pnpm instalado globalmente
              </p>
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
