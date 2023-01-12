import { Post } from "../../models";

class CreatePostService {
  async execute({ tittle, description, image, user_id }) {
    try {
      const post = await Post.create({
        tittle: tittle,
        description: description,
        image: image,
        user_id: user_id,
      });

      return post;
    } catch (e) {
      return console.log(e.message);
    }
  }
}

export { CreatePostService };
