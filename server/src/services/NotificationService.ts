import NotificationModel, {
  INotificationModel,
} from '../models/NotificationModel';

export const findNotificationsByUserId = async (
  userId: string
): Promise<INotificationModel[]> => {
  return NotificationModel.find({
    receiver: userId,
    isRead: false
  })
}

export const save = async (
  data: Partial<INotificationModel>,
): Promise<INotificationModel> => {
  const newNotification = new NotificationModel(data);
  return newNotification.save();
};

export const updateNotification = async (userId: string): Promise<void> => {
  const notifications = await NotificationModel.find({
    receiver: userId,
    isRead: false,
  });
  notifications.forEach(async (notification) => {
    notification.isRead = true;
    await notification.save();
  });
};

export const removeNotificationOfLikedPost = async (
  receiver: string,
  sender: string,
  postId: string,
): Promise<void> => {
  await NotificationModel.findOneAndRemove(
    { receiver, sender, post: postId }
  )
}

export const createNotificationOfLikedPost = async (
  receiver: string,
  sender: string,
  postId: string,
  content: string
): Promise<void> => {
  const newNotification = new NotificationModel({
    receiver,
    sender,
    post: postId,
    content,
    type: "like"
  })
  await newNotification.save()
}