"use client";
import { useState, FormEvent } from "react";
import Link from "next/link";

export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: validar e enviar para API
    console.log({ name, email, password, confirmPassword });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 p-6">

      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">

        <h1 className="text-3xl text-white font-bold text-center mb-2">Criar Conta</h1>
        <p className="text-purple-200 text-center mb-8">Preencha os dados abaixo para começar</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Nome completo"
            required
            className="p-3 rounded-lg bg-white/20 text-white placeholder-purple-200 border border-white/30 focus:ring-2 focus:ring-purple-300 outline-none"
          />

          <input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Seu email"
            required
            className="p-3 rounded-lg bg-white/20 text-white placeholder-purple-200 border border-white/30 focus:ring-2 focus:ring-purple-300 outline-none"
          />

          <input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Crie uma senha"
            required
            className="p-3 rounded-lg bg-white/20 text-white placeholder-purple-200 border border-white/30 focus:ring-2 focus:ring-purple-300 outline-none"
          />

          <input
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirme a senha"
            required
            className="p-3 rounded-lg bg-white/20 text-white placeholder-purple-200 border border-white/30 focus:ring-2 focus:ring-purple-300 outline-none"
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition text-lg shadow-lg"
          >
            Criar Conta
          </button>

          <p className="text-center text-purple-200 text-sm">Já possui conta? {" "}
            <Link href="/login" className="text-green-300 font-semibold hover:underline">Entrar</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
