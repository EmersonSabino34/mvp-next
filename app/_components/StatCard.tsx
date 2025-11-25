interface StatCardProps {
  title: string
  value: string
  color?: 'green' | 'purple' | 'yellow' | 'red'
}

const colorClasses: Record<NonNullable<StatCardProps['color']>, string> = {
  green: 'text-green-600',
  purple: 'text-purple-600',
  yellow: 'text-yellow-600',
  red: 'text-red-600'
}

export default function StatCard({ title, value, color = 'purple' }: StatCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <p className="text-gray-500 text-sm">{title}</p>
      <p className={`text-4xl font-bold mt-2 ${colorClasses[color]}`}>{value}</p>
    </div>
  )
}
