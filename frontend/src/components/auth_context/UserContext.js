// userSession.js
let userId = localStorage.getItem('userId') || null;
let accountType = localStorage.getItem('accountType') || null;

export const setUserData = (id, type) => {
  userId = id;
  accountType = type;
  localStorage.setItem('userId', id);
  localStorage.setItem('accountType', type);
};

export const getUserId = () => {
  return userId;
};

export const getAccountType = () => {
  return accountType;
};
