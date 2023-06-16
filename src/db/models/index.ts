import { User, UserSchema } from "./user.model";
import { Sequelize } from 'sequelize';

export function setupModels(sequelize:Sequelize) {
  User.init(UserSchema, User.config(sequelize));
}
