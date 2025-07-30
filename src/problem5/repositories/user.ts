import User from "../models/user.model"
import sequelize from '../models'

const repository = sequelize.getRepository(User)

export async function create(data: Partial<User>) {
  return await repository.create(data)
}