import { Post } from "../../models";

class GetPostService {
  async execute() {
    try {
      const post = await Post.findAll();

      return post;
    } catch (e) {
      return console.log(e.message);
    }
  }
}

export { GetPostService };
