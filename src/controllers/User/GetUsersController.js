import {
  GetUsersService,
  GetUsersService,
} from "../../services/User/GetUsersService";

class GetUsersController {
  async handle(req, res) {
    const getUsersService = new GetUsersService();

    try {
      const user = await getUsersService.execute();

      if (user) {
        return res.json({
          message: true,
          data: user,
        });
      } else {
        return res.json({
          message: false,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export { GetUsersController };
