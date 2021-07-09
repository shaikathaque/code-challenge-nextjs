import { NextApiRequest, NextApiResponse } from 'next'

import { searchAirports } from '../../models/airport'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const airports = await searchAirports(req.query.searchQuery);
  res.status(200).json(airports)
}
