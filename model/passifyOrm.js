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


const insertLoginToDb = async (website, username, password, userId) => {
  try {
    const [ result ] = await connection.query(insertLoginQuery, [ website, username, password, userId ]);
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
