import mongoose from "mongoose";

const medicalRrecordSchema = mongoose.Schema({

}, {timestamps: true})

export const medicalRecord = mongoose.model("MedicalRecord", medicalRrecordSchema) 