"use client";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-purple-700/40 backdrop-blur-xl border-b border-white/10 text-white fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          Fitness<span className="text-green-400">AI</span>
        </h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-8 text-lg font-medium">
          <a href="/dashboard" className="hover:text-green-300 transition">Dashboard</a>
          <a href="/treinos" className="hover:text-green-300 transition">Treinos</a>
          <a href="/desafios" className="hover:text-green-300 transition">Desafios</a>
          <a href="/perfil" className="hover:text-green-300 transition">Perfil</a>
        </nav>

        {/* Botão Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <nav className="md:hidden bg-purple-900/70 backdrop-blur-2xl border-t border-white/10">
          <ul className="flex flex-col text-lg p-6 space-y-4 font-medium">
            <a href="/dashboard" onClick={() => setOpen(false)} className="hover:text-green-300">Dashboard</a>
            <a href="/treinos" onClick={() => setOpen(false)} className="hover:text-green-300">Treinos</a>
            <a href="/desafios" onClick={() => setOpen(false)} className="hover:text-green-300">Desafios</a>
            <a href="/perfil" onClick={() => setOpen(false)} className="hover:text-green-300">Perfil</a>
          </ul>
        </nav>
      )}
    </header>
  );
}
