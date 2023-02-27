export const up = (queryInterface, Sequelize) => queryInterface.createTable('tasks', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING(30),
    allowNull: false,
  },
  author: {
    type: Sequelize.STRING(50),
    allowNull: false,
  },
  isComplete: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
  },
  deletedAt: {
    allowNull: true,
    type: Sequelize.DATE,
  },
});

export const down = (queryInterface) => queryInterface.dropTable('tasks');