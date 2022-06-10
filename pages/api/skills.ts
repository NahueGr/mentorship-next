// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const skillslist: string[] = ["Dev", "Designer"]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {

  const result = skillslist[+(req.query.index as string)]

  console.log(req.query)

  res.status(result? 200: 400).json( result )
}