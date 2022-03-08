import dbConnect from '../../../util/mongo'

import Consultation from '../../../models/Consultation'

export default async function handler(req, res) {
  const { method } = req;
  dbConnect();

  if (method === 'GET') {
  }
  if (method === 'POST') {
    try {
      const consultation = await Consultation.create(req.body)
      res.status(201).json(consultation)
      console.log('created')
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
