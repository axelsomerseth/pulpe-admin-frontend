const USER_KEY = "user";

const getUserFromLocalStorage = () => {
  // Get from local storage by key
  const user = window.localStorage.getItem(USER_KEY);
  // Parse stored json or if none return initialValue
  return user ? JSON.parse(user) : {};
};

const setUserAtLocalStorage = ({ username, password }) => {
  // Save to local storage
  const user = {};
  user.authdata = window.btoa(username + ":" + password);
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export { getUserFromLocalStorage, setUserAtLocalStorage };
