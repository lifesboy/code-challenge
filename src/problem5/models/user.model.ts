import {Column, DataType, Model, Table} from 'sequelize-typescript'

@Table
export default class User extends Model {
  @Column(DataType.STRING)
  firstName?: string;
  @Column(DataType.STRING)
  lastName?: string;
}