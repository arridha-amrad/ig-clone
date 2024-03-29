import { UploadApiResponse, v2 } from 'cloudinary';
import { UploadedFile } from 'express-fileupload';

const cloudinary = v2;

cloudinary.config({
   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
   api_key: process.env.CLOUDINARY_APP_KEY,
   api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const uploadToCloudinary = async (
   file: UploadedFile,
   isAvatar = false,
): Promise<UploadApiResponse | undefined> => {
   let uploadResult: UploadApiResponse | undefined;
   if (!isAvatar) {
      uploadResult = await cloudinary.uploader.upload(
         file.tempFilePath,
         (err, result) => {
            if (err) {
               console.log(err);
            } else {
               return result;
            }
         },
      );
   } else {
      uploadResult = await cloudinary.uploader.upload(
         file.tempFilePath,
         {
            width: 200,
            height: 200,
            crop: 'thumb',
            gravity: 'face',
         },
         (err, result) => {
            if (err) {
               console.log(err);
            } else {
               return result;
            }
         },
      );
   }
   return uploadResult;
};
