import NotificationModel, {
  INotificationModel,
} from '../models/NotificationModel';

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
