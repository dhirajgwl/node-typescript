export enum Error {
  USER_EMPTY = 'USER_EMPTY',
  WISH_EMPTY = 'WISH_EMPTY',
  BIRTHDAY_INVALID = 'BIRTHDAY_INVALID',
  OLD_USER = 'OLD_USER',
  USER_UNREGISTERED = 'USER_UNREGISTERED',
  NO_PROFILE = 'NO_PROFILE',
  SYSTEM_ERROR = 'SYSTEM_ERROR',
}

export const getMessage = (errorStr: string) => {
  let errorMessage = '';
  switch (errorStr) {
    case Error.USER_EMPTY: {
      errorMessage = 'Please enter User Name.';
      break;
    }
    case Error.WISH_EMPTY: {
      errorMessage = 'Please enter wish.';
      break;
    }
    case Error.BIRTHDAY_INVALID: {
      errorMessage = 'Your birthday is incorrect in the system.';
      break;
    }
    case Error.OLD_USER: {
      errorMessage = 'Your age is more than 10 years.';
      break;
    }
    case Error.USER_UNREGISTERED: {
      errorMessage = 'You are not Register for wish.';
      break;
    }
    case Error.NO_PROFILE: {
      errorMessage = 'Your profile is missing.';
      break;
    }
    case Error.SYSTEM_ERROR: {
      errorMessage = 'System Error';
      break;
    }
  }
  return errorMessage;
};
