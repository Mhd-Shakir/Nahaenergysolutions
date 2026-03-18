import mongoose, { Schema, Document } from 'mongoose';

export interface ILead extends Document {
  name: string;
  phone: string;
  email?: string;
  billAmount: number;
  systemSize?: string;
  message?: string;
  status: string;
  createdAt: Date;
}

const LeadSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: false },
  billAmount: { type: Number, required: true },
  systemSize: { type: String, required: false },
  message: { type: String, required: false },
  status: { type: String, default: 'New' },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);
