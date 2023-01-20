import { User } from "../../models";

class GetSingleUserService {
  async execute({ id }) {
    try {
      const user = await User.findAll({
        where: {
          id: id,
        },
      });

      return user;
    } catch (e) {
      return console.log(e.message);
    }
  }
}

export { GetSingleUserService };
