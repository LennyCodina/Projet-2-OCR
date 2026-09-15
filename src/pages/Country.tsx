import {type FC} from 'react'
import {useParams} from 'react-router-dom'
import {ChartEvolution} from '../components/ChartEvolution'
import {Indicator} from '../components/Indicator'
import {useCountry} from '../hooks/useCountry'

export const Country: FC = () => {
  const {id} = useParams()
  const country = useCountry(id ?? 'false')

  if (!country) {
    return <div>Country not found</div>
  }

  return(
    <div className="min-h-screen bg-gray-900 text-white p-8">

      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">{country.name}</h1>

        <div className="mb-2">
          <Indicator country={country} />
        </div>

        <ChartEvolution country={country} />

        <div className="text-sm text-gray-400">
          <p>Données des 5 dernières éditions des Jeux Olympiques</p>
        </div>
      </div>
    </div>
  )
}
