import axios, { isAxiosError } from 'axios'

const isServer = typeof window === 'undefined'

const SERVER_BASE_URL =
  (isServer ? process.env.API_URL : process.env.NEXT_PUBLIC_API_URL) ??
  (() => {
    throw new Error('API_URL ou NEXT_PUBLIC_API_URL não definida')
  })()

const apiClient = axios.create({
  baseURL: SERVER_BASE_URL,
  withCredentials: true,
})

const apiServer = axios.create({
  baseURL: SERVER_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

if (isServer) {
  apiServer.interceptors.request.use(async (config) => {
    try {
      const { cookies } = await import('next/headers')
      const cookieString = (await cookies()).toString()
      if (cookieString) {
        config.headers['Cookie'] = cookieString
      }
    } catch (error) {
      console.error('Erro ao adicionar cookies ao request:', error)
    }
    return config
  })
}

export { apiClient, apiServer, isAxiosError }
export default isServer ? apiServer : apiClient
