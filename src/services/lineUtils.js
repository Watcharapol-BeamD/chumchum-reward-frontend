import liff from "@line/liff";

export const initializeLIFF = async () => {
  await liff
    .init({
      liffId: import.meta.env.VITE_LIFF_ID,
    })
    .then(async () => {
      
      if (liff.getOS() === "web") {
        window.location.replace("/client/alert_page");
      }

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
