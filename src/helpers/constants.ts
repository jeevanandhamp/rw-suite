export const AUTH_TYPE = {
  google: 'google',
  isGoogleSSO: (type: String) => {
    return type == AUTH_TYPE.google;
  }
};
