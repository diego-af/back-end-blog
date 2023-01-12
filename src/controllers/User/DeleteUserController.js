import { DeleteService } from "../../services/User/DeleteService";
class DeleteUserController {
  async handle(req, res) {
    const { id } = req.params;
    console.log(id);

    const deleterService = new DeleteService();

    try {
      const user = await deleterService.execute({ id });
      console.log(user);
      if (user !== 1) {
        return res.json({
          message: false,
          data: user,
        });
      }

      return res.json({
        message: true,
        data: user,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export { DeleteUserController };
