import { DataTypes } from "sequelize";

import { sequelize } from "../database/connection";

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: true,
  }
);

export { User };
