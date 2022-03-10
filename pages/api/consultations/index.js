import dbConnect from '../../../util/mongo'

import Consultation from '../../../models/Consultation'

export default async function handler(req, res) {
  const { method } = req
  dbConnect()

  if (method === 'GET') {
    try {
      const consultations = await Consultation.find({})
      if (consultations) {
        res.json(consultations)
      } else {
        res.status(500).json({
          message: 'Consultations not found',
        })
      }
    } catch (error) {
      res.status(500).json(error)
    }
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
