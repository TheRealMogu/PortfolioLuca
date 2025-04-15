import { useState, useEffect } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  mobile?: boolean;
}

export default function ThemeToggle({ mobile = false }: ThemeToggleProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Get initial theme status
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialDarkMode = savedTheme === "dark" || (!savedTheme && prefersDark);
    
    setIsDarkMode(initialDarkMode);
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center rounded-full bg-secondary p-1.5">
        <button
          onClick={() => !isDarkMode && toggleTheme()}
          className={`p-1.5 rounded-full ${isDarkMode ? 'bg-transparent text-muted-foreground' : 'bg-primary text-white'} transition-all duration-200`}
          aria-label="Light mode"
        >
          <Sun className="h-4 w-4" />
        </button>
        <button
          onClick={() => isDarkMode && toggleTheme()}
          className={`p-1.5 rounded-full ${!isDarkMode ? 'bg-transparent text-muted-foreground' : 'bg-primary text-white'} transition-all duration-200`}
          aria-label="Dark mode"
        >
          <Moon className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
