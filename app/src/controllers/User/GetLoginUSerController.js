import { GetLoginService } from "../../services/User/GetLoginService";

class GetLoginUserController {
  async handle(req, res) {
    const { email, password } = req.query;

    console.log(email, password);
    const getLoginService = new GetLoginService();

    try {
      const user = await getLoginService.execute({ email, password });
      console.log(user);
      if (user) {
        return res.json({
          sucess: true,
          data: user,
        });
      } else {
        return res.json({
          sucess: false,
        });
      }
    } catch (err) {
      return res.json({
        sucess: false,
      });
    }
  }
}

export { GetLoginUserController };
