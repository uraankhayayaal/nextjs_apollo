'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Users', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      firstName: "Ayaal",
      lastName: "Uraankhay",
      email: "uraankhayayaal@gmail.com",
      createdAt: '2020-02-14 15:50:01',
      updatedAt: '2020-02-14 15:50:01',
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Users', null, {});
    */
    return queryInterface.bulkDelete('Users', null, {});
  }
};
