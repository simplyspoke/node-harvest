export interface ResponseCode {
  /**
   * HTTP status code
   */
  code: number

  /**
   * Explanation of the codes meaning
   */
  description: string
}

export const ResponseCodes: ResponseCode[] = [
  {
    code: 200,
    description: 'Your request was successful.'
  },
  {
    code: 201,
    description:
      'A new object has been created. It’s representation will be returned in the response body.'
  },
  {
    code: 403,
    description:
      'The object you requested was found but you don’t have authorization to perform your request.'
  },
  {
    code: 404,
    description: 'The object you requested can’t be found.'
  },
  {
    code: 422,
    description:
      'There were errors processing your request. Check the response body for additional information.'
  },
  {
    code: 429,
    description: 'Your request has been throttled. Refer to the Rate Limiting section for details.'
  },
  {
    code: 500,
    description: 'There was a server error. Contact support@getharvest.com for help.'
  }
]
