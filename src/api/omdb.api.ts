import axios from 'axios'

import { IOmdbResponse } from '../interfaces/IOmdb'

export const omdbApi = () => {
  const api = axios.create({
    baseURL: 'http://www.omdbapi.com'
  })

  const key = process.env.OMDB_KEY

  return {
    film: async (id: string) => {
      return await api.get<IOmdbResponse>(`/?apiKey=${key}`)
    }
  }
}