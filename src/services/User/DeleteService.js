import { User } from "../../models";

class DeleteService {
  async execute({ id }) {
    try {
      const user = await User.destroy({
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

export { DeleteService };
