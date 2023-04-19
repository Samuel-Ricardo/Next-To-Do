// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createTodo } from '@lib/db';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  
  if(req.method === "POST"){
    await createTodo( JSON.parse(req.body) );
    return res.status(200).json({message: "Success"})
  }
}
