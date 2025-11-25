import { StatCard } from "../_components";

export default function StatCardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Perfil</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard title="Treinos Esta Semana" value="5" color="green" />
        <StatCard title="Minutos Ativos" value="318" color="purple" />
        <StatCard title="Calorias" value="2.450" color="yellow" />
        <StatCard title="Meta Semanal" value="80%" color="red" />
      </div>
    </div>
  )
}
