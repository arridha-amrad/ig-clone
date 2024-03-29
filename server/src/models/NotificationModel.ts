import mongoose, { Schema } from 'mongoose';

export interface INotificationModel {
  _id: Schema.Types.ObjectId;
  type: 'like' | 'comment' | 'follow' | 'message';
  content: string;
  sender: string;
  receiver: string;
  post: string | null;
  commentOfPost: string | null;
  commentOfComment: string | null;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export const NotificationSchema = new Schema<
  INotificationModel,
  mongoose.Model<INotificationModel>,
  INotificationModel
>(
  {
    type: {
      type: String,
    },
    content: {
      type: String,
    },
    sender: {
      type: String,
      ref: 'User',
    },
    receiver: {
      type: String,
      ref: 'User',
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    post: {
      type: String,
      ref: 'Post',
    },
    commentOfPost: {
      type: String,
      ref: 'CommentOfPost'
    },
    commentOfComment: {
      type: String,
      ref: 'CommentOfComment'
    }
  },
  { timestamps: true },
);

const NotificationModel = mongoose.model<INotificationModel>(
  'Notification',
  NotificationSchema,
);

export default NotificationModel;
