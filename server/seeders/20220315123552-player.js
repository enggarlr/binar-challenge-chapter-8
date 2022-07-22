"use strict";
const { hashPassword } = require("../utils/passwordHandler");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Players', [
      {
        username: 'PussySlayer613',
        email: 'pussy.slay3r@gmail.com',
        password: await hashPassword('youknownothing'),
        experience: 600000,
        lvl: 600,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'HardcoreLevellingWarrior',
        email: 'hclw@gmail.com',
        password: await hashPassword('youknownothing'),
        experience: 600000,
        lvl: 666,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Players', null, {});
  }
};
