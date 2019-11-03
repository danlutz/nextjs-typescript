// https://github.com/axios/axios#handling-errors
import { AxiosError } from 'axios'

const logAxiosError = (error: AxiosError) => {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    const { data, status, headers } = error.response

    console.error('Response Error:')
    console.error({ data, status, headers })
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.error('Request Error:')
    console.error(error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    console.error('Request setup error:', error.message)
  }

  console.error(error.config)
}

export default logAxiosError
