import { olympicsData } from '../data/olympicsData'
import type { Country } from '../models/Country'

export const useCountry = (id: string): Country | undefined => {
  const country = olympicsData.find((country) => country.id === Number(id))
  return country;
}