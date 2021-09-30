import mongoose, { Model, Schema } from 'mongoose';

export interface IVerificationModel {
  user: Schema.Types.ObjectId;
  code: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
  isComplete?: boolean;
}

const VerificationSchema = new mongoose.Schema<
  IVerificationModel,
  Model<IVerificationModel>,
  IVerificationModel
>(
  {
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    code: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    isComplete: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true },
);

const VerificationModel = mongoose.model<IVerificationModel>(
  'Verification',
  VerificationSchema,
);

export default VerificationModel;
