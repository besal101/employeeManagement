import type { NextApiRequest, NextApiResponse } from "next";
import Users from "../models/user";

//GET: http://localhost:3000/api/users
export async function getUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const users = await Users.find({});
    if (!users) return res.status(404).json({ error: "Error getting user" });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(404).json({ error: "Error getting user" });
  }
}

//POST: http://localhost:3000/api/users
export async function postUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const formData = req.body;
    if (!formData)
      return res.status(404).json({ error: "Form Data Not Provided" });

    const user = await Users.create(formData);
    if (!user) return res.status(404).json({ error: "Error creating user" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ error: "Error creating user" });
  }
}

//PUT: http://localhost:3000/api/users?userId=XXXXXXXXXXXX
export async function putUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (!userId && !formData)
      return res.status(404).json({ error: "Form Data Not Provided" });

    const user = await Users.findByIdAndUpdate(userId, formData);
    if (!user) return res.status(404).json({ error: "Error updating user" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ error: "Error updating user" });
  }
}

//DELETE: http://localhost:3000/api/users?userId=XXXXXXXX
export async function deleteUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(404).json({ error: "Error deleting user" });

    const user = await Users.findByIdAndDelete(userId);
    if (!user) return res.status(404).json({ error: "Error deleting user" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ error: "Error deleting user" });
  }
}

export async function getSingleUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId } = req.query;
    console.log(userId);
    if (!userId) return res.status(404).json({ error: "Error getting user" });
    const user = await Users.findById(userId);

    if (!user) return res.status(404).json({ error: "Error getting user" });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(404).json({ error: "Error getting user" });
  }
}
