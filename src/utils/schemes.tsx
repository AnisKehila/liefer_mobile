export const isPhoneValide = (num: string): boolean => {
  const regex = /^(\+213|0)(5|6|7)[0-9]{8}$/;
  return regex.test(num);
};

export const isEmailValid = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};
