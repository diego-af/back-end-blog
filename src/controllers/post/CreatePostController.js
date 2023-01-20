import { CreatePostService } from "../../services/Post/CreatePostService";
class CreatePostController {
  async handle(req, res) {
    const { tittle, description, user_id } = req.body;
    const image = req.file.location;
    console.log(req.body);

    const createPostService = new CreatePostService();

    const post = await createPostService.execute({
      tittle,
      description,
      image,
      user_id,
    });

    if (!post) {
      return res.json({
        sucess: false,
      });
    }
    return res.json({
      sucess: true,
      data: post,
    });
  }
}

export { CreatePostController };
