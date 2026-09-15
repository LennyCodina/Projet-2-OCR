import {type FC} from 'react'
import {ChartMedal} from '../components/ChartMedal'
import {HomeHeader} from '../components/HomeHeader'
import {useOlympics} from '../hooks/useOlympics'

export const Home: FC = () => {
  const {data,loading} = useOlympics()
  const totalParticipatingCountries = data.length
  const totalGamesEditions = 5

  if (loading) {
    return <div>Chargement...</div>
  }

  return(
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <HomeHeader />

        <div className="mb-2">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center mb-2">
            <h3 className="text-xl font-semibold mb-2">Pays participants</h3>
            <p className="text-4xl font-bold text-blue-400">{totalParticipatingCountries}</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-2">Éditions des JO</h3>
            <p className="text-4xl font-bold text-green-400">{totalGamesEditions}</p>
          </div>
        </div>

        <ChartMedal data={data} />

        <div className="text-sm text-gray-400">
          <p>Cliquez sur un pays pour voir ses détails</p>
        </div>
      </div>
    </div>
  )
}
