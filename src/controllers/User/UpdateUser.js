import { UpdateUserService } from "../../services/User/UpdateUserService";
class UpdateUser {
  async handle(req, res) {
    const { name, email, password } = req.body;
    const { id } = req.params;
    console.log(id);

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({ id, name, email, password });
    return res.json(user);
  }
}

export { UpdateUser };
