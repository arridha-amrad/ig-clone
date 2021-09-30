import VerificationModel, {
  IVerificationModel,
} from '../models/VerificationModel';

export const save = async (
  verificationData: IVerificationModel,
): Promise<IVerificationModel> => {
  const newVerificationData = new VerificationModel(verificationData);
  return newVerificationData.save();
};

export const findCodeAndNotComplete = async (
  code: string,
): Promise<IVerificationModel | null> => {
  return VerificationModel.findOne({ code, isComplete: false });
};

export const findCodeAndUpdate = async (
  code: string,
  email: string,
): Promise<IVerificationModel | null> => {
  return VerificationModel.findOneAndUpdate(
    {
      code,
      email,
      isComplete: false,
    },
    { isComplete: true, code: '-' },
  );
};
