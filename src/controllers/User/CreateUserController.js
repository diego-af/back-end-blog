import { CreateUserService } from "../../services/User/CreateUserService";
class CreateUserController {
  async handle(req, res) {
    const { name, email, password } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, password });
    return res.json(user);
  }
}

export { CreateUserController };
