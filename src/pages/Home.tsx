import {type FC} from 'react'
import {ChartMedal} from '../components/ChartMedal'
import {HomeHeader} from '../components/HomeHeader'
import {useData} from '../hooks/useData'

export const Home: FC = () => {
  const {data,loading} = useData()
  const totalParticipatingCountries = data.length
  const totalGamesEditions = data.reduce((acc, country) => acc + country.participations.length, 0) / totalParticipatingCountries
  //si possible plus tard dans un fichier hook pour ne pas recalculer à chaque fois.

  if (loading) {
    return <div>Chargement...</div>
  }

  return(
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8">
      <div className="max-w-6xl mx-auto w-full">
        <HomeHeader />

        <div className="mb-2">
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center mb-2">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Médailles par pays</h3>
          </div>
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center mb-2 flex flex-col sm:flex-row items-center justify-around gap-6 md:gap-8 w-full">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Éditions des JO</h3>
              <p className="text-3xl sm:text-4xl font-bold text-green-400">{totalGamesEditions}</p>
            </div>
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">pays participants</h3>
              <p className="text-3xl sm:text-4xl font-bold text-green-400">{totalParticipatingCountries}</p>
            </div>
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
