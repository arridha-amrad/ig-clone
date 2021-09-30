import { UploadApiErrorResponse, UploadApiResponse, v2 } from 'cloudinary';
import { UploadedFile } from 'express-fileupload';

const cloudinary = v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_APP_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

interface UploadToCloudinary {
  errors: Partial<{ upload: string; general?: UploadApiErrorResponse }>;
  valid: boolean;
  uploadResult?: UploadApiResponse;
}

export const uploadToCloudinary = async (
  file: UploadedFile,
  isAvatar = false,
): Promise<UploadApiResponse> => {
  const errors: Partial<{ upload: string; general?: UploadApiErrorResponse }> =
    {};
  let uploadResult: UploadApiResponse | undefined;
  if (file.size >= 1000000) {
    errors.upload = 'Max file size is 1 Mb';
  } else {
    delete errors.upload;
    if (!isAvatar) {
      uploadResult = await cloudinary.uploader.upload(
        file.tempFilePath,
        {
          width: 500,
          height: 500,
          crop: 'fill',
        },
        (err, result) => {
          if (err) {
            errors.general = err;
          } else {
            delete errors.general;
            return result;
          }
        },
      );
    } else {
      uploadResult = await cloudinary.uploader.upload(
        file.tempFilePath,
        {
          width: 300,
          height: 300,
          crop: 'thumb',
          gravity: 'face',
        },
        (err, result) => {
          if (err) {
            errors.general = err;
          } else {
            delete errors.general;
            return result;
          }
        },
      );
    }
  }
  return {
    uploadResult,
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
