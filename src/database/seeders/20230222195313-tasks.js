'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      'tasks',
      [{
        "id": 0,
        "name": "Task 0",
        "description": "Description 0",
        "author": "Author 0",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 1,
        "name": "Task 1",
        "description": "Description 1",
        "author": "Author 1",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 2,
        "name": "Task 2",
        "description": "Description 2",
        "author": "Author 2",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 3,
        "name": "Task 3",
        "description": "Description 3",
        "author": "Author 3",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 4,
        "name": "Task 4",
        "description": "Description 4",
        "author": "Author 4",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 5,
        "name": "Task 5",
        "description": "Description 5",
        "author": "Author 5",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 6,
        "name": "Task 6",
        "description": "Description 6",
        "author": "Author 6",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 7,
        "name": "Task 7",
        "description": "Description 7",
        "author": "Author 7",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 8,
        "name": "Task 8",
        "description": "Description 8",
        "author": "Author 8",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 9,
        "name": "Task 9",
        "description": "Description 9",
        "author": "Author 9",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 10,
        "name": "Task 10",
        "description": "Description 10",
        "author": "Author 10",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 11,
        "name": "Task 11",
        "description": "Description 11",
        "author": "Author 11",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 12,
        "name": "Task 12",
        "description": "Description 12",
        "author": "Author 12",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 13,
        "name": "Task 13",
        "description": "Description 13",
        "author": "Author 13",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 14,
        "name": "Task 14",
        "description": "Description 14",
        "author": "Author 14",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 15,
        "name": "Task 15",
        "description": "Description 15",
        "author": "Author 15",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 16,
        "name": "Task 16",
        "description": "Description 16",
        "author": "Author 16",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 17,
        "name": "Task 17",
        "description": "Description 17",
        "author": "Author 17",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 18,
        "name": "Task 18",
        "description": "Description 18",
        "author": "Author 18",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 19,
        "name": "Task 19",
        "description": "Description 19",
        "author": "Author 19",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 20,
        "name": "Task 20",
        "description": "Description 20",
        "author": "Author 20",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 21,
        "name": "Task 21",
        "description": "Description 21",
        "author": "Author 21",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 22,
        "name": "Task 22",
        "description": "Description 22",
        "author": "Author 22",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 23,
        "name": "Task 23",
        "description": "Description 23",
        "author": "Author 23",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 24,
        "name": "Task 24",
        "description": "Description 24",
        "author": "Author 24",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 25,
        "name": "Task 25",
        "description": "Description 25",
        "author": "Author 25",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 26,
        "name": "Task 26",
        "description": "Description 26",
        "author": "Author 26",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 27,
        "name": "Task 27",
        "description": "Description 27",
        "author": "Author 27",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 28,
        "name": "Task 28",
        "description": "Description 28",
        "author": "Author 28",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 29,
        "name": "Task 29",
        "description": "Description 29",
        "author": "Author 29",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 30,
        "name": "Task 30",
        "description": "Description 30",
        "author": "Author 30",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 31,
        "name": "Task 31",
        "description": "Description 31",
        "author": "Author 31",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 32,
        "name": "Task 32",
        "description": "Description 32",
        "author": "Author 32",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 33,
        "name": "Task 33",
        "description": "Description 33",
        "author": "Author 33",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 34,
        "name": "Task 34",
        "description": "Description 34",
        "author": "Author 34",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 35,
        "name": "Task 35",
        "description": "Description 35",
        "author": "Author 35",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 36,
        "name": "Task 36",
        "description": "Description 36",
        "author": "Author 36",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 37,
        "name": "Task 37",
        "description": "Description 37",
        "author": "Author 37",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 38,
        "name": "Task 38",
        "description": "Description 38",
        "author": "Author 38",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 39,
        "name": "Task 39",
        "description": "Description 39",
        "author": "Author 39",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 40,
        "name": "Task 40",
        "description": "Description 40",
        "author": "Author 40",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 41,
        "name": "Task 41",
        "description": "Description 41",
        "author": "Author 41",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 42,
        "name": "Task 42",
        "description": "Description 42",
        "author": "Author 42",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 43,
        "name": "Task 43",
        "description": "Description 43",
        "author": "Author 43",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 44,
        "name": "Task 44",
        "description": "Description 44",
        "author": "Author 44",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 45,
        "name": "Task 45",
        "description": "Description 45",
        "author": "Author 45",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 46,
        "name": "Task 46",
        "description": "Description 46",
        "author": "Author 46",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 47,
        "name": "Task 47",
        "description": "Description 47",
        "author": "Author 47",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 48,
        "name": "Task 48",
        "description": "Description 48",
        "author": "Author 48",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 49,
        "name": "Task 49",
        "description": "Description 49",
        "author": "Author 49",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 50,
        "name": "Task 50",
        "description": "Description 50",
        "author": "Author 50",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 51,
        "name": "Task 51",
        "description": "Description 51",
        "author": "Author 51",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 52,
        "name": "Task 52",
        "description": "Description 52",
        "author": "Author 52",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 53,
        "name": "Task 53",
        "description": "Description 53",
        "author": "Author 53",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 54,
        "name": "Task 54",
        "description": "Description 54",
        "author": "Author 54",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 55,
        "name": "Task 55",
        "description": "Description 55",
        "author": "Author 55",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 56,
        "name": "Task 56",
        "description": "Description 56",
        "author": "Author 56",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 57,
        "name": "Task 57",
        "description": "Description 57",
        "author": "Author 57",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 58,
        "name": "Task 58",
        "description": "Description 58",
        "author": "Author 58",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 59,
        "name": "Task 59",
        "description": "Description 59",
        "author": "Author 59",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 60,
        "name": "Task 60",
        "description": "Description 60",
        "author": "Author 60",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 61,
        "name": "Task 61",
        "description": "Description 61",
        "author": "Author 61",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 62,
        "name": "Task 62",
        "description": "Description 62",
        "author": "Author 62",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 63,
        "name": "Task 63",
        "description": "Description 63",
        "author": "Author 63",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 64,
        "name": "Task 64",
        "description": "Description 64",
        "author": "Author 64",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 65,
        "name": "Task 65",
        "description": "Description 65",
        "author": "Author 65",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 66,
        "name": "Task 66",
        "description": "Description 66",
        "author": "Author 66",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 67,
        "name": "Task 67",
        "description": "Description 67",
        "author": "Author 67",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 68,
        "name": "Task 68",
        "description": "Description 68",
        "author": "Author 68",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 69,
        "name": "Task 69",
        "description": "Description 69",
        "author": "Author 69",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 70,
        "name": "Task 70",
        "description": "Description 70",
        "author": "Author 70",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 71,
        "name": "Task 71",
        "description": "Description 71",
        "author": "Author 71",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 72,
        "name": "Task 72",
        "description": "Description 72",
        "author": "Author 72",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 73,
        "name": "Task 73",
        "description": "Description 73",
        "author": "Author 73",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 74,
        "name": "Task 74",
        "description": "Description 74",
        "author": "Author 74",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 75,
        "name": "Task 75",
        "description": "Description 75",
        "author": "Author 75",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 76,
        "name": "Task 76",
        "description": "Description 76",
        "author": "Author 76",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 77,
        "name": "Task 77",
        "description": "Description 77",
        "author": "Author 77",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 78,
        "name": "Task 78",
        "description": "Description 78",
        "author": "Author 78",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 79,
        "name": "Task 79",
        "description": "Description 79",
        "author": "Author 79",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 80,
        "name": "Task 80",
        "description": "Description 80",
        "author": "Author 80",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 81,
        "name": "Task 81",
        "description": "Description 81",
        "author": "Author 81",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 82,
        "name": "Task 82",
        "description": "Description 82",
        "author": "Author 82",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 83,
        "name": "Task 83",
        "description": "Description 83",
        "author": "Author 83",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 84,
        "name": "Task 84",
        "description": "Description 84",
        "author": "Author 84",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 85,
        "name": "Task 85",
        "description": "Description 85",
        "author": "Author 85",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 86,
        "name": "Task 86",
        "description": "Description 86",
        "author": "Author 86",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 87,
        "name": "Task 87",
        "description": "Description 87",
        "author": "Author 87",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 88,
        "name": "Task 88",
        "description": "Description 88",
        "author": "Author 88",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 89,
        "name": "Task 89",
        "description": "Description 89",
        "author": "Author 89",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 90,
        "name": "Task 90",
        "description": "Description 90",
        "author": "Author 90",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 91,
        "name": "Task 91",
        "description": "Description 91",
        "author": "Author 91",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 92,
        "name": "Task 92",
        "description": "Description 92",
        "author": "Author 92",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 93,
        "name": "Task 93",
        "description": "Description 93",
        "author": "Author 93",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 94,
        "name": "Task 94",
        "description": "Description 94",
        "author": "Author 94",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 95,
        "name": "Task 95",
        "description": "Description 95",
        "author": "Author 95",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 96,
        "name": "Task 96",
        "description": "Description 96",
        "author": "Author 96",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 97,
        "name": "Task 97",
        "description": "Description 97",
        "author": "Author 97",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 98,
        "name": "Task 98",
        "description": "Description 98",
        "author": "Author 98",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }, {
        "id": 99,
        "name": "Task 99",
        "description": "Description 99",
        "author": "Author 99",
        "isComplete": false,
        "createdAt": "2021-02-08 00:00:00",
        "updatedAt": "2021-02-08 00:00:00"
      }],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('tasks', null, {});
  }
};
