export const getWelcomePhrase = (): string => {
  const currentTime = new Date().getHours();

  if (currentTime >= 5 && currentTime < 12) {
    return "Good morning!";
  }
  if (currentTime >= 12 && currentTime < 18) {
    return "Good afternoon!";
  }
  return "Good evening!";
};
