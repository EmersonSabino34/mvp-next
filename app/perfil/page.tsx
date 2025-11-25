import { StatCard } from "../_components"

export default function PerfilPage() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Meu Perfil</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <StatCard title="Treinos Esta Semana" value="5" color="green" />
          <StatCard title="Minutos Ativos" value="318" color="purple" />
          <StatCard title="Calorias" value="2.450" color="yellow" />
          <StatCard title="Meta Semanal" value="80%" color="red" />
        </div>
      </div>
    </div>
  )
}
