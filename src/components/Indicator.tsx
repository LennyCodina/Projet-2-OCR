import type {JSX} from "react"
import type {Country} from "../models/Country"

export const Indicator = ({country}: {country: Country}): JSX.Element => {

    const indicators : {title: string, value: number, color: string}[] = []
    indicators.push({title: "Total médailles", value: country.participations.reduce((sum,p) => sum + p.medalsCount,0), color: "text-yellow-400"})
    indicators.push({title: "Total athlètes", value: country.participations.reduce((sum,p) => sum + p.athleteCount,0), color: "text-green-400"})
    indicators.push({title: "Participations", value: country.participations.length, color: "text-blue-400"})

  return(
    <div className="mb-2">
      {indicators.map((indicator, index) => (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-2" key={index}>
          <h3 className="text-xl font-semibold mb-2">{indicator.title}</h3>
          <p className={`text-4xl font-bold ${indicator.color}`}>{indicator.value}</p>
        </div>
      ))}
    </div>
  )
}
