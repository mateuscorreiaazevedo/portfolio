import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { env } from '@/main/config'

type HttpRequest = {
  url: string
  data?: any
  headers?: any
  params?: any
  method?: 'get' | 'post' | 'put' | 'delete'
}
type HttpResponse<T = any> = {
  statusCode: number
  body: T
}

class Service {
  private api: AxiosInstance

  constructor (private baseURL = env.baseURL) {
    this.api = axios.create({
      baseURL: this.baseURL
    })
  }

  async request<T = any> (props: HttpRequest): Promise<HttpResponse<T>> {
    const { url, data, headers, method = 'get', params } = props
    let response: AxiosResponse

    try {
      response = await this.api.request({
        url,
        data,
        headers,
        method,
        params
      })
    } catch (error) {
      response = (error as any).response
    }

    return {
      statusCode: response.status,
      body: response.data
    }
  }
}

export const service = new Service()
