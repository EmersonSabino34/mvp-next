export default function RecentWorkouts() {
  const workouts = [
    { name: "Peito + Tríceps", date: "Hoje – 07:30", status: "success" },
    { name: "Costas + Bíceps", date: "Ontem – 18:15", status: "success" },
    { name: "Pernas Completo", date: "22/11 – 09:00", status: "success" },
    { name: "Full Body HIIT", date: "20/11 – 06:45", status: "warning" },
  ]

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-6">Últimos Treinos</h2>
      {workouts.map((w, i) => (
        <div key={i} className="flex justify-between items-center py-3 border-b last:border-0">
          <div>
            <p className="font-semibold">{w.name}</p>
            <p className="text-sm text-gray-500">{w.date}</p>
          </div>
          <span className={w.status === 'success' ? 'text-green-600' : 'text-yellow-600'}>{w.status === 'success' ? 'Concluído' : 'Pulado'}</span>
        </div>
      ))}
    </div>
  )
}