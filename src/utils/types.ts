type user = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: "USER" | "ADMIN";
  isEmailConfirmed: boolean;
  isPhoneConfirmed: boolean;
};
type jwt = { exp: number; iat: number; id: number; role: "USER" | "ADMIN" };
