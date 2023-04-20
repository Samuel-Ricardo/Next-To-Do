// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createTodo, deleteTodo, updateTodo } from '@lib/db';
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  
  if(req.method === "POST"){
    await createTodo( JSON.parse(req.body).description );
    return res.status(200).json({message: "Success"})
  }

  if(req.method === "PUT"){
    await updateTodo( JSON.parse(req.body) );
    return res.status(200).json({message: "Success"})
  }

  return res.status(200).json({HI:" :D "})
}
