"use strict";
var sequelize_1 = require("sequelize");
module.exports = {
    up: function (queryInterface) {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: sequelize_1.DataTypes.INTEGER
            },
            firstName: {
                allowNull: true,
                type: sequelize_1.DataTypes.STRING
            },
            lastName: {
                allowNull: true,
                type: sequelize_1.DataTypes.STRING
            },
            createdAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE
            },
            updatedAt: {
                allowNull: false,
                type: sequelize_1.DataTypes.DATE
            }
        });
    },
    down: function (queryInterface) {
        return queryInterface.dropTable('Users');
    }
};
