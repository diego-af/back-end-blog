import { Post } from "../../models";

class DeleteServicePost {
  async execute({ id }) {
    try {
      const post = await Post.destroy({
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

export { DeleteServicePost };
