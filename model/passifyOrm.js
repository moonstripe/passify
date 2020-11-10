const bcrypt = require('bcryptjs');
const {
  insertLoginQuery,
  findAllLoginsQuery,
  findLoginByIdQuery,
  findLoginByUserQuery,
  deleteLoginByIdQuery,
} = require('./passifyQueries');
const connection = require('../config/connection');


const findAllLoginsFromDb = async () => {
  try {
    const [ result ] = await connection.query(findAllLoginsQuery);
    return result;
  } catch (e) {
    throw new Error(e);
  }
};


const findLoginByIdFromDb = async (loginId) => {
  try {
    const [ result ] = await connection.query(findLoginByIdQuery, loginId);
    return result[0];
  } catch (e) {
    throw new Error(e);
  }
};

const findLoginsByUserFromDb = async (userId) => {
  try {
    const [ result ] = await connection.query(findLoginByUserQuery, userId);
    return result;
  } catch (e) {
    throw new Error(e);
  }
};


const insertLoginToDb = async (website, username, passwordStrength, password, userId) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const [ result ] = await connection.query(insertLoginQuery, [ website, username, passwordStrength, hashedPassword, userId ]);
    // console.log('result', result);
    return await findAllLoginsFromDb(result.insertId);
  } catch (e) {
    throw new Error(e);
  }
};


const deleteLoginByIdFromDb = async (loginId) => {
  try {
    // We cant just delete first if we delete first, we can't get the fweet anymore
    const deletedLogin = await findLoginByIdFromDb(loginId);
    await connection.query(deleteLoginByIdQuery, loginId);
    return deletedLogin;
  } catch (e) {
    throw new Error(e);
  }
};


module.exports = {
  findAllLoginsFromDb,
  findLoginByIdFromDb,
  findLoginsByUserFromDb,
  insertLoginToDb,
  deleteLoginByIdFromDb,
};
