import {DataTypes, Sequelize} from 'sequelize';

export interface UserAttributes {
  firstName?: string;
  lastName?: string;

}

export interface UserInstance {
  id: number;
  createdAt: Date;
  updatedAt: Date;

  firstName: string;
  lastName: string;

}

export = (sequelize: Sequelize, DataTypes: DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  });

  User.associate = function (models) {
    // associations can be defined here
  };

  return User;
};
