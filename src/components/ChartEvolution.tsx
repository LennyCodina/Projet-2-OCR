import {Chart as ChartJS,CategoryScale,LinearScale,LineElement,PointElement,Tooltip,Legend} from 'chart.js'
import {Line} from 'react-chartjs-2'
import type {Country} from '../models/Country'

ChartJS.register(CategoryScale,LinearScale,LineElement,PointElement,Tooltip,Legend)

export const ChartEvolution = ({country}: {country: Country}) => {
  const evolutionData = {
    labels: country.participations.map((p) => p.year.toString()),
    datasets: [
      {
        label: 'Nombre de médailles',
        data: country.participations.map((p) => p.medalsCount),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.3,
      },
    ],
  }

  const evolutionOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'white',
        },
      },
    },
    scales: {
      y: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      x: {
        ticks: {
          color: 'white',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
  }

  return(
    <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
      <div style={{height: '400px'}}>
        <Line data={evolutionData} options={evolutionOptions} />
      </div>
    </div>
  )
}
