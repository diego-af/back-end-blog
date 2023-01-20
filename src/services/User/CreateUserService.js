import { User } from "../../models";

class CreateUserService {
  async execute({ name, email, password }) {
    try {
      const user = await User.create({
        name: name,
        email: email,
        password: password,
      });

      return user;
    } catch (e) {
      return console.log(e.message);
    }
  }
}

export { CreateUserService };
