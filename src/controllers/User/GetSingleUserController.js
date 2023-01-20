import { GetSingleUserService } from "../../services/User/GetSingleUserService";

class GetSingleUserController {
  async handle(req, res) {
    const { id } = req.params;
    const getSingleUserService = new GetSingleUserService();

    try {
      const user = await getSingleUserService.execute({ id });

      if (user) {
        return res.json({
          message: true,
          data: user,
        });
      } else {
        return res.json({
          sucess: false,
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export { GetSingleUserController };
