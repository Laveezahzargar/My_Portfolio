"use client"
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Work from "./components/Work";


export default function Home() {

  

  const [isDarkMode, setIsDarkMode] = useState<boolean | null>(null)

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme")

    if (
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setIsDarkMode(true)
    } else {
      setIsDarkMode(false)
    }
  }, [])
  useEffect(() => {
    if (isDarkMode === null) return // ✅ prevent early run

    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light") // ✅ FIX
    }
  }, [isDarkMode])
  if (isDarkMode === null) return null
  return (
    <>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode as React.Dispatch<React.SetStateAction<boolean>>} />
      <Header />
      <About isDarkMode={isDarkMode} />
      <Services />
      <Work isDarkMode={isDarkMode} />
      <Contact />
      <Footer isDarkMode={isDarkMode} />
    </>
  );
}
