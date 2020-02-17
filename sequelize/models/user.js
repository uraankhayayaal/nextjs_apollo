'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};

// const Sequelize = require("sequelize");
// class User extends Sequelize.Model {
//   static init(sequelize, DataTypes) {
//     return super.init(
//       {
//         firstName: DataTypes.STRING,
//         lastName: DataTypes.STRING,
//         email: DataTypes.STRING
//       },
//       {
//         tableName: "Users",
//         sequelize
//       }
//     );
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }

// export default User;