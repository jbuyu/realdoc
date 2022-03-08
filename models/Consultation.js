import mongoose from 'mongoose'

const consultationSchema = new mongoose.Schema(
  {
    firtName: {
      type: String,
      required: true,
      maxlength: 60,
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 60,
    },
    phone: {
      type: String,
      required: true,
      maxlength: 60,
    },
    email: {
      type: String,
      required: true,
      maxlength: 60,
    },
    gender: {
      type: String,
      required: true,
      maxlength: 60,
    },
    dateOfBirth: {
      type: String,
      required: true,
      maxlength: 60,
    },
    symptoms: {
      type: String,
      required: true,
    },
    consultationType: {
      type: String,
      required: true,
      maxlength: 10,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model('Consultation', consultationSchema)
