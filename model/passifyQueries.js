const insertLoginQuery = 'INSERT INTO logins (website, username, passwordStrength, password, userId) VALUES (?, ?, ?, ?, ?);';
const findAllLoginsQuery = 'SELECT * FROM logins;';
const findLoginByIdQuery = 'SELECT * FROM logins WHERE id = ?;';
const findLoginByUserQuery = 'SELECT * FROM logins WHERE userId = ?;';
const deleteLoginByIdQuery = 'DELETE FROM logins WHERE id = ?;';


module.exports = {
  insertLoginQuery,
  findAllLoginsQuery,
  findLoginByIdQuery,
  findLoginByUserQuery,
  deleteLoginByIdQuery,
}
