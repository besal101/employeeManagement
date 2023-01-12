// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { connect } from "../../../utils/connection";
import { getSingleUser, putUser, deleteUser } from "../../../controller";

type Data = {
  method?: string;
  error?: string;
  name?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  connect().catch(() =>
    res.status(405).json({ error: "Error connecting to database" })
  );

  const { method } = req;
  switch (method) {
    case "GET":
      getSingleUser(req, res);
      break;
    case "PUT":
      putUser(req, res);
      break;
    case "DELETE":
      deleteUser(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
