'use client'

import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useState, useEffect, useMemo } from 'react'
import { api } from '@/lib'

interface FetchOptions extends RequestInit {}
interface AxiosOptions extends AxiosRequestConfig {}

interface UseFetchOptions<T> {
  defaultData?: T
  useAxios?: boolean
  options?: FetchOptions | AxiosOptions
}

export function useFetch<T = unknown>(
  url: string,
  { defaultData = {} as T, useAxios = false, options }: UseFetchOptions<T> = {},
) {
  const [data, setData] = useState<T>(defaultData)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  const stableOptions = useMemo(() => options, [options])

  useEffect(() => {
    let isMounted = true

    async function fetchData() {
      setLoading(true)
      try {
        let response
        if (useAxios) {
          response = await api.get<T, AxiosResponse<T>>(
            url,
            stableOptions as AxiosOptions,
          )
          isMounted && setData(response.data)
        } else {
          response = await fetch(url, stableOptions as FetchOptions)
          const result: T = await response.json()
          isMounted && setData(result)
        }
      } catch (err) {
        isMounted && setError(err as Error)
      } finally {
        isMounted && setLoading(false)
      }
    }

    fetchData()

    return () => {
      isMounted = false
    }
  }, [url, useAxios, stableOptions])

  return { data, loading, error }
}
