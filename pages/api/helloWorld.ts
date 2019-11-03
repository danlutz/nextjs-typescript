import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Respond with a string
    res.status(200).send('Hello World')

    // Respond with json
    // res.status(200).json('Hello World')

    // Respond with only a status code
    // res.status(200).end()
  } catch (err) {
    console.error(err)
    res.status(500).end('Failed to fetch hello world')
  }
}
