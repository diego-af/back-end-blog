import { GetPostService } from "../../services/Post/GetPostService";

class GetPostController {
  async handle(req, res) {
    const getPostService = new GetPostService();

    try {
      const post = await getPostService.execute();

      if (post) {
        return res.json({
          sucess: true,
          data: post,
        });
      }

      return res.json({
        sucess: false,
        data: post,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export { GetPostController };
