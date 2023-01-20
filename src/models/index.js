import { User } from "./User";
import { Post } from "./Post";

User.hasMany(Post, { foreignKey: "user_id" });

Post.belongsTo(User, { foreignKey: "user_id" });

export { Post, User };
