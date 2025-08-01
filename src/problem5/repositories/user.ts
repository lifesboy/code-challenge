import {Op} from 'sequelize'
import User from "../models/user.model"
import sequelize from '../models'
import {PageFilter} from "../domain/entities/pageFilter";
import {SearchUserFilter} from "../domain/entities/user/search/searchUserFilter";

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

export async function search(filter?: SearchUserFilter) {
  const limit = filter?.limit ?? 100
  const offset = (filter?.page || 0) * limit
  const where = !!filter?.keyword ? {
    [Op.or]: [
      {firstName: {[Op.like]: `%${filter?.keyword}%`}},
      {lastName: {[Op.like]: `%${filter?.keyword}%`}},
    ],
  } : undefined

  return await repository.findAndCountAll({
    where,
    offset,
    limit,
  })
}
