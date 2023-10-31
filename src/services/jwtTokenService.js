import { jwtDecode } from "jwt-decode";

 

export const checkTokenExpiration = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.log(error);
    return true;
  }
};

export const decodeUser = (token) => {
  try {
    return jwtDecode(token);
  } catch(error) {
console.log(error)
  }
};
