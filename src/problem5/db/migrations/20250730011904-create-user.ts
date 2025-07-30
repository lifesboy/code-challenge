import {DataTypes, QueryInterface} from 'sequelize'

export = {
  up: (queryInterface: QueryInterface) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },

      firstName: {
        allowNull: true,
        type: DataTypes.STRING
      },

      lastName: {
        allowNull: true,
        type: DataTypes.STRING
      },

      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },

      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: (queryInterface: QueryInterface) => {
    return queryInterface.dropTable('Users');
  }
};
