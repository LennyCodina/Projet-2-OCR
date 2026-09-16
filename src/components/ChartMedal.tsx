import {Chart as ChartJS,ArcElement,Tooltip,Legend, type ActiveElement, type ChartEvent} from 'chart.js'
import {Pie} from 'react-chartjs-2'
import type {Country} from '../models/Country'
import { useNavigate } from 'react-router-dom'

ChartJS.register(ArcElement,Tooltip,Legend)

export const ChartMedal = ({data}: { data: Country[] }) => {
  const navigate = useNavigate()
  const calculateTotalMedals = (country: Country) => {
    return country.participations.reduce((sum,participation) => sum + participation.medalsCount,0)
  }

  const chartData = {
    labels: data.map((country) => country.name),
    datasets: [
      {
        label: 'Total des médailles',
        data: data.map((country) => calculateTotalMedals(country)),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const chartOptions = {
    onClick: (_event: ChartEvent, elements: ActiveElement[]) => {
      if (elements.length > 0) {
        const index = elements[0].index + 1;
        navigate(`/country/${index}`);
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: 'white',
        },
      },
    },
  }

  return(
    <div className="bg-gray-800 p-4 sm:p-6 md:p-8 rounded-lg shadow-xl">
      <div className="h-72 sm:h-80 md:h-[400px]">
        <Pie data={chartData} options={chartOptions} />
      </div>
    </div>
  )
}
