import {useEffect,useState} from "react";
import type { Country } from "../models/Country";
import {olympicsData} from "../data/olympicsData";

export const useOlympics = () => {
  const [data,setData] = useState<Country[]>([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    setData(olympicsData)
    setLoading(false)
  }, [])

  return {data,loading}
}
