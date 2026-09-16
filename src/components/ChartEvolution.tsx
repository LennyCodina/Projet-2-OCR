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
        tension: 0,
      },
      {
        label: 'Nombre de participants',
        data: country.participations.map((p) => p.athleteCount),
        borderColor: 'rgb(190, 192, 75)',
        backgroundColor: 'rgba(190, 192, 75, 0.2)',
        tension: 0,
      },
      {
        label: 'médaille par participant (x1500)',
        data: country.participations.map((p) => (p.medalsCount / p.athleteCount) * 1500),
        borderColor: 'rgb(192, 75, 186)',
        backgroundColor: 'rgba(192, 75, 186, 0.2)',
        tension: 0,
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
    <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-xl">
      <div className="h-72 sm:h-80 md:h-[400px]">
        <Line data={evolutionData} options={evolutionOptions} />
      </div>
    </div>
  )
}
