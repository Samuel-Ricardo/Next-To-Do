import { deleteTodo } from "@lib/db"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) { 

if(req.method === "POST"){
    await deleteTodo( JSON.parse(req.body).id ) 
    return res.status(200).json({message: "Success"})
  }

} 
