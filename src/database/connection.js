require("dotenv").config();
import Sequelize from "sequelize";

const sequelize = new Sequelize("blog", "postgres", "1023", {
  host: "localhost",
  dialect: "postgres",
  timestamp: true,
});
// const sequelize = new Sequelize(process.env.API_ACCESS_KEY_DATABASE);

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

export { sequelize };
