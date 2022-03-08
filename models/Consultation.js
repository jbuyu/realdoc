import mongoose from 'mongoose'

const ConsultationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      maxlength: 60,
    },
    lastName: {
      type: String,
      required: true,
      maxlength: 60,
    },
    phoneNo: {
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

export default mongoose.models.Consultation ||
  mongoose.model('Consultation', ConsultationSchema)
