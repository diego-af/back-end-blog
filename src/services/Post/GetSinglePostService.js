import { Post } from "../../models";

class GetSinglePostService {
  async execute({ id }) {
    try {
      const post = await Post.findOne({
        where: {
          id: id,
        },
      });

      return post;
    } catch (e) {
      return console.log(e.message);
    }
  }
}

export { GetSinglePostService };
