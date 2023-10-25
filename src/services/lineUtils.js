
import liff from "@line/liff";

export const initializeLIFF = async () => {
  await liff
    .init({
      liffId: "2001035033-w8g1yvBj",
    })
    .then(async () => {
      if (liff.isLoggedIn()) {
        return getUser();
      } else {
        return liff.login();
      }
    })
    .catch((e) => {
      // Handle initialization error
      console.error("LIFF init failed:", e);
    });
};

export const getUser = async () => {
  return liff.getProfile();
};
