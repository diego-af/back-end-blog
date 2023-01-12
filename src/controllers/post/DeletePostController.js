import { DeleteServicePost } from "../../services/Post/DeleteServicePost";
class DeletePostController {
  async handle(req, res) {
    const { id } = req.params;
    console.log(id);

    const deleteServicePost = new DeleteServicePost();

    try {
      const user = await deleteServicePost.execute({ id });

      if (user !== 1) {
        return res.json({
          message: "Deleted impossible",
          data: user,
        });
      }

      return res.json({
        message: "Deleted Succesfully",
        data: user,
      });
    } catch (err) {
      console.log(err);
    }
  }
}

export { DeletePostController };
