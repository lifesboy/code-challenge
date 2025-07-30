import User from "../models/user.model"
import sequelize from '../models'

const repository = sequelize.getRepository(User)

export async function create(data: Partial<User>) {
  return await repository.create(data)
}

export async function getById(id: number) {
  return await repository.findByPk(id)
}

export async function updateById(id: number, data: Partial<User>) {
  return await repository.update(data, {
    where: {id},
    returning: true,
  })
}

export async function deleteById(id: number) {
  return await repository.destroy({
    where: {id},
  })
}

export async function search(filters?: any, paging?: { page: number, limit: number }) {
  const limit = paging?.limit ?? 100
  const offset = (paging?.page || 0) * limit

  return await repository.findAndCountAll({
    where: filters,
    offset,
    limit,
  })
}
