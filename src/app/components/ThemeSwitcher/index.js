"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BsMoon, BsSun } from "react-icons/bs";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      aria-label="Toggle Dark Mode"
      className={`w-fit rounded-md hover:scale-110 active:scale-100 duration-200 bg-[#23283C] text-white dark:bg-[#0A2473]`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "light" ? (
        <BsMoon />
      ) : (
        <BsSun className="text-[#F5C756] font-bold w-6 h-6" />
      )}
    </button>
  );
};
