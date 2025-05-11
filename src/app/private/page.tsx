//Next.
import { redirect } from "next/navigation";
//Components.
import { ThemeSwitcher } from "@/core/components/theme/ThemeSwitcher";
//Utils(Interfaces).
import { InfoIcon, Shield, Mail, Clock } from "lucide-react";
//Supabase.
import { createClient } from "@/core/lib/supabase/server";

//Private Page
export default async function PrivatePage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/auth/signIn");
  }

  return (
    <div className="flex-1 w-full flex flex-col gap-8 max-w-4xl mx-auto p-4">
      <div className="w-full">
        <div className="bg-gradient-to-r from-primary/20 to-accent/10 border border-border rounded-2xl p-6 flex gap-4 items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="p-3 bg-primary/10 rounded-xl">
              <InfoIcon size="24" className="text-primary" />
            </div>
            <div>
              <h2 className="font-bold text-lg text-foreground">Área Privada</h2>
              <p className="text-sm text-muted-foreground mt-1">
                Espacio seguro para usuarios verificados
              </p>
            </div>
          </div>
          <ThemeSwitcher />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="flex items-center gap-4 pb-6 border-b border-border/50">
            <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
              <span className="text-xl">{user.email?.[0]?.toUpperCase()}</span>
            </div>
            <div>
              <h2 className="font-bold text-2xl tracking-tight">Mi Perfil</h2>
              <p className="text-muted-foreground text-sm mt-1">Gestión de cuenta personal</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-5 bg-background rounded-2xl border border-border/50">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-emerald-500/10 rounded-xl text-emerald-600">
                  <Mail size={22} className="stroke-[2.3]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground/80 mb-1">CORREO</p>
                  <p className="font-semibold text-foreground/90">{user.email}</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-background rounded-2xl border border-border/50">
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-600">
                  <Shield size={22} className="stroke-[2.3]" />
                </div>
                <div>
                  <p className="text-xs font-medium text-muted-foreground/80 mb-1">PRIVILEGIOS</p>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-foreground/90">Verificado</span>
                    <div className="h-2 w-2 bg-emerald-500 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 bg-background rounded-2xl border border-border/50 h-fit">
          <h3 className="text-lg font-semibold mb-5 flex items-center gap-3">
            <span className="p-2.5 bg-blue-500/10 rounded-xl text-blue-600">
              <Clock size={22} className="stroke-[2.3]" />
            </span>
            Registro de Actividad
          </h3>
          
          <div className="space-y-4 text-sm">
            <div className="flex justify-between items-center p-3.5 bg-muted/5 rounded-xl border border-transparent">
              <div className="space-y-0.5">
                <span className="text-muted-foreground/80 text-xs font-medium">ÚLTIMO ACCESO</span>
                <span className="font-medium text-foreground/90 block">
                  {new Date(user.last_sign_in_at!).toLocaleString('es-ES', {
                    hour: '2-digit',
                    minute: '2-digit',
                    day: 'numeric',
                    month: 'short'
                  })}
                </span>
              </div>
              <div className="h-8 w-px bg-border/50 mx-4" />
              <div className="text-right">
                <span className="text-muted-foreground/80 text-xs font-medium">PLATAFORMA</span>
                <span className="font-medium text-foreground/90 block">Web</span>
              </div>
            </div>

            <div className="flex justify-between items-center p-3.5 bg-muted/5 rounded-xl border border-transparent">
              <div className="space-y-0.5">
                <span className="text-muted-foreground/80 text-xs font-medium">REGISTRO</span>
                <span className="font-medium text-foreground/90 block">
                  {new Date(user.created_at).toLocaleDateString('es-ES', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="h-8 w-px bg-border/50 mx-4" />
              <div className="text-right">
                <span className="text-muted-foreground/80 text-xs font-medium">ANTIGÜEDAD</span>
                <span className="font-medium text-foreground/90 block">
                  {Math.floor((Date.now() - new Date(user.created_at).getTime()) / (1000 * 60 * 60 * 24))} días
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
