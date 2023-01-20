import { User } from "../../models";

class UpdateUserService {
  async execute({ id, name, email, password }) {
    try {
      const user = await User.update(
        {
          name: name,
          email: email,
          password: password,
        },
        {
          where: {
            id: id,
          },
        }
      );

      return user;
    } catch (e) {
      return console.log(e.message);
    }
  }
}

export { UpdateUserService };
