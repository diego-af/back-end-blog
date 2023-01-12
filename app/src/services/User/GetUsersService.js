import { User } from "../../models";

class GetUsersService {
  async execute() {
    try {
      const user = await User.findAll();

      return user;
    } catch (e) {
      return console.log(e.message);
    }
  }
}

export { GetUsersService };
