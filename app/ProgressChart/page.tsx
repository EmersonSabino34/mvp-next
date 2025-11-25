'use client'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function ProgressChart() {
  const data = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [{
      label: 'Minutos',
      data: [45, 60, 0, 55, 70, 50, 38],
      backgroundColor: '#6D28D9',
      borderRadius: 8,
    }]
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-6">Progresso Semanal</h2>
      <Bar data={data} options={{ responsive: true, plugins: { legend: { display: false }}}} />
    </div>
  )
}