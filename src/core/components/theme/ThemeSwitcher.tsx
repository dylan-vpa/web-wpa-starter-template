"use client";
//Next.
import { useEffect, useState } from "react";
//Components.
import { Button } from "@/core/components/ui/Button";
import { useTheme } from "next-themes";
//Utils(Interfaces).
import { Laptop, Moon, Sun } from "lucide-react";

//Theme Switcher
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="secondary"
      onClick={() => {
        const newTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
        setTheme(newTheme);
      }}
      startIcon={
        theme === "light" ? (
          <Sun size={20} className="text-amber-500 transition-colors duration-300" />
        ) : theme === "dark" ? (
          <Moon size={20} className="text-blue-500 transition-colors duration-300" />
        ) : (
          <Laptop size={20} className="text-gray-500 transition-colors duration-300" />
        )
      }
    >
      {theme === "light" ? "Claro" : theme === "dark" ? "Oscuro" : "Sistema"}
    </Button>
  );
} 