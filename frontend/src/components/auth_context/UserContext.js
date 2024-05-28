// userSession.js
let userId = null;
let accountType = null;

export const setUserData = (id, type) => {
  userId = id;
  accountType = type;
};

export const getUserId = () => {
  return userId;
};

export const getAccountType = () => {
  return accountType;
};
