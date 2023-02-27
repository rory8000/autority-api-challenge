'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      'tasks',
      [
        {
          id: 100,
          name: 'Task 1',
          description: 'Description 1',
          author: 'Author 1',
          isComplete: false,
          createdAt: '2021-02-08 00:00:00',
          updatedAt: '2021-02-08 00:00:00',
        },
        {
          id: 200,
          name: 'Task 2',
          description: 'Description 2',
          author: 'Author 2',
          isComplete: false,
          createdAt: '2021-02-08 00:00:00',
          updatedAt: '2021-02-08 00:00:00',
        },
        {
          id: 300,
          name: 'Task 3',
          description: 'Description 3',
          author: 'Author 3',
          isComplete: true,
          createdAt: '2021-02-08 00:00:00',
          updatedAt: '2021-02-08 00:00:00',
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('tasks', null, {});
  }
};
