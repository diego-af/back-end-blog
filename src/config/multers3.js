require("dotenv").config();
import { S3Client } from "@aws-sdk/client-s3";
import aws from "aws-sdk";
import multerS3 from "multer-s3";
import multer from "multer";
import path from "path";

aws.config.update({
  accessKeyId: "AKIAUGZJSVXCEV3PWGEU",
  secretAccessKey: "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",
  region: "sa-east-1",
});

const s3 = new aws.S3();
const upload = multer({
  storage: multerS3({
    s3,
    bucket: "image-dev-post",
    acl: "public-read",
    key(req, file, callback) {
      callback(null, Math.random(1, 100) + path.extname(file.originalname));
    },
  }),
});

export default upload;
