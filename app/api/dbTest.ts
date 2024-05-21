
import { NextApiRequest, NextApiResponse } from 'next';
import { dbConTest } from "@/database/db-test";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await dbConTest();
    res.status(200).json({ message: 'Connected successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to connect:', error: error.message });
  }
}