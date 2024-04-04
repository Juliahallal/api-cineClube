import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("api_next_aula04", "aluno", "senacrs", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});
