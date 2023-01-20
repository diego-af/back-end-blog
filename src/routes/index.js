import { Router } from "express";
import { CreatePostController } from "../controllers/post/CreatePostController";
import { DeletePostController } from "../controllers/post/DeletePostController";
import { GetPostController } from "../controllers/post/GetPostController";
import { GetPostSingleController } from "../controllers/post/GetPostSingleController";
import { CreateUserController } from "../controllers/User/CreateUserController";
import { DeleteUserController } from "../controllers/User/DeleteUserController";
import { GetLoginUserController } from "../controllers/User/GetLoginUSerController";
import { GetSingleUserController } from "../controllers/User/GetSingleUserController";
import { GetUsersController } from "../controllers/User/GetUsersController";
import { UpdateUser } from "../controllers/User/UpdateUser";
import upload from "../config/multers3";

const router = Router();

const createUserController = new CreateUserController();
const updateUser = new UpdateUser();
const deleteUser = new DeleteUserController();
const getUsers = new GetUsersController();
const getSingleUser = new GetSingleUserController();
const getLogin = new GetLoginUserController();

router.get("/user", getUsers.handle);
router.get("/user/:id", getSingleUser.handle);
router.post("/user", createUserController.handle);
router.put("/user/:id", updateUser.handle);
router.delete("/user/:id", deleteUser.handle);
router.get("/login", getLogin.handle);

//---------Post----------------//
const createPost = new CreatePostController();
const getSinglePost = new GetPostSingleController();
const deletePost = new DeletePostController();
const getPost = new GetPostController();

router.post("/post", upload.single("image"), createPost.handle);
router.get("/post/:id", getSinglePost.handle);
router.get("/post", getPost.handle);
router.delete("/post/:id", deletePost.handle);

export { router };
