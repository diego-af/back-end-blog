import { GetSinglePostService } from "../../services/post/GetSinglePostService";

class GetPostSingleController {
  async handle(req, res) {
    const { id } = req.params;
    const getSinglePostService = new GetSinglePostService();
    console.log(id);
    try {
      const post = await getSinglePostService.execute({ id });
      console.log(post);

      if (!post) {
        return res.json({
          sucess: false,
          data: post,
        });
      }

      return res.json({
        sucess: true,
        data: post,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export { GetPostSingleController };
