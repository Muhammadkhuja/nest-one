import { User } from "../../models/user.model";

export const userStab = (): Partial<User> => {
  return {
    id: 9,
    name: "user9",
    email: "user9@mail.uz",
    password: "12345688",
    is_active: false,
  };
};
