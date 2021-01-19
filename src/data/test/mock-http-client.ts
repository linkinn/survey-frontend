import { HttpPostClient, HttpPostParams } from '@/data/protocol/http/http-post-client'
import { HttpResponse, HttpStatusCode } from '@/data/protocol/http/http-response'

export class HttpPostClientSpy implements HttpPostClient {
  url?: string
  body?: Object
  response: HttpResponse = {
    statusCode: HttpStatusCode.ok
  }

  async post (params: HttpPostParams): Promise<HttpResponse> {
    this.url = params.url
    this.body = params.body

    return Promise.resolve(this.response)
  }
}
