export enum MessageType {
  USER_EMPTY = 'USER_EMPTY',
  WISH_EMPTY = 'WISH_EMPTY',
  BIRTHDAY_INVALID = 'BIRTHDAY_INVALID',
  OLD_USER = 'OLD_USER',
  USER_UNREGISTERED = 'USER_UNREGISTERED',
  NO_PROFILE = 'NO_PROFILE',
  SYSTEM_ERROR = 'SYSTEM_ERROR',
  WISH_SEND = 'WISH_SEND',
}

export const getMessage: any = (type: string) => {
  let message = '';
  switch (type) {
    case MessageType.USER_EMPTY: {
      message = 'Please enter User Name.';
      break;
    }
    case MessageType.WISH_EMPTY: {
      message = 'Please enter wish.';
      break;
    }
    case MessageType.BIRTHDAY_INVALID: {
      message = 'Your date of birth is incorrect in the system.';
      break;
    }
    case MessageType.OLD_USER: {
      message = 'Your age is more than 10 years.';
      break;
    }
    case MessageType.USER_UNREGISTERED: {
      message = 'You are not Register for wish.';
      break;
    }
    case MessageType.NO_PROFILE: {
      message = 'Your profile is missing.';
      break;
    }
    case MessageType.SYSTEM_ERROR: {
      message = 'System Error';
      break;
    }
    case MessageType.WISH_SEND: {
      message = 'Hurry my wish send to santa';
      break;
    }
    default:
      message = 'System Error';
      break;
  }
  return message;
};
