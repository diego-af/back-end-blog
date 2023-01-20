import { User } from "../../models";

class GetLoginService {
  async execute({ email, password }) {
    try {
      const user = await User.findOne({
        where: {
          email: email,
          password: password,
        },
        attributes: ["id", "name", "email"],
      });

      return user;
    } catch (e) {
      return console.log(e.message);
    }
  }
}

export { GetLoginService };
