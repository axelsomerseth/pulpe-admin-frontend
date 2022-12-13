import { BACKEND_API_BASE_URL } from ".";

const signUp = async (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/auth/sign-up`,
    requestOptions
  )
    .then((response) => {
      // authentication unsuccessful if there's a status code distinct to 200.
      if (response.status !== 201) {
        // return null;
        throw new Error("Error: Unauthorized.");
      }

      // authentication was successful
      if (response) {
        response.authdata = window.btoa(username + ":" + password);
      }
      return response;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
  return response;
};

const signIn = async (username, password) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  };
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/auth/sign-in`,
    requestOptions
  )
    .then((response) => {
      // authentication unsuccessful if there's a status code distinct to 200.
      if (response.status !== 200) {
        // return null;
        throw new Error("Error: Unauthorized.");
      }

      // authentication was successful
      if (response) {
        // store user details and basic auth credentials in local storage
        // to keep user logged in between page refreshes
        response.authdata = window.btoa(username + ":" + password);
      }
      return response;
    })
    .catch((error) => {
      console.error(error);
      return error;
    });
  return response;
};

const signOut = async () => {
  // remove user from local storage to log user out
  localStorage.removeItem("user");
};

const myAccount = async (user) => {
  const requestOptions = {
    method: "GET",
    headers: { Authorization: "Basic " + user.authdata },
  };
  const response = await fetch(
    `${BACKEND_API_BASE_URL}/auth/my-account`,
    requestOptions
  ).then((json) => {
    return json;
  });
  return response;
};

export { signUp, signIn, signOut, myAccount };
