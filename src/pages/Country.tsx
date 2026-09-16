import {type FC, type JSX} from 'react'
import {useParams} from 'react-router-dom'
import {ChartEvolution} from '../components/ChartEvolution'
import {Indicator} from '../components/Indicator'
import {useData} from '../hooks/useData'

export const Country: FC = () => {
  const {id} = useParams()
  const {data, loading} = useData()
    
  const country = data.find((c) => c.id === Number(id))
  const bouttonreturn = (): JSX.Element => {
    return <button onClick={() => window.location.href = '/'} className=" p-2 sm:p-3 rounded-lg shadow-lg mb-4 text-sm sm:text-base">Retour à l'accueil</button>
  }

  if (loading) {
    return <div>Chargement...</div>
  }

  if (!country) {
    return window.location.href = '/*'
  }

  return(
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8">
      {bouttonreturn()}
      
      {/* j'ai pas bien compris le Link to= ducoup j'ai utilisé une balise button avec location.href */}

      <div className="max-w-6xl mx-auto text-center w-full">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 md:mb-8">{country.name}</h1>

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
