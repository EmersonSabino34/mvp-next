export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 p-6">

      <div className="bg-white/10 backdrop-blur-xl p-10 rounded-2xl shadow-2xl w-full max-w-md border border-white/20">

        <h1 className="text-3xl text-white font-bold text-center mb-2">
          Entrar
        </h1>
        <p className="text-purple-200 text-center mb-8">
          Acesse sua conta para continuar
        </p>

        <form className="flex flex-col gap-6">

          <input
            type="email"
            placeholder="Seu email"
            className="p-3 rounded-lg bg-white/20 text-white 
            placeholder-purple-200 border border-white/30 
            focus:ring-2 focus:ring-purple-300 outline-none"
          />

          <input
            type="password"
            placeholder="Sua senha"
            className="p-3 rounded-lg bg-white/20 text-white 
            placeholder-purple-200 border border-white/30 
            focus:ring-2 focus:ring-purple-300 outline-none"
          />

          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold 
            py-3 rounded-lg transition text-lg shadow-lg"
          >
            Entrar
          </button>

          <p className="text-center text-purple-200 text-sm">
            Não tem conta?{" "}
            <a href="/cadastro" className="text-green-300 font-semibold hover:underline">
              Cadastre-se
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
