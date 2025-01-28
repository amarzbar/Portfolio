"use client"

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeToggle(){
    const {theme, setTheme} = useTheme();

    return (

        <Button
            className="rounded-full bg-slate-200 dark:bg-slate-900"
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >

            <FaSun className="absolute h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 "></FaSun>
            <FaMoon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"></FaMoon>
        </Button>
    )
}