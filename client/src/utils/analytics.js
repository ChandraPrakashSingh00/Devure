export const trackPage = (url) => {
  if (window.gtag) {
    window.gtag("config", "G-X266BZQZEJ", {
      page_path: url,
    });
  }
};
