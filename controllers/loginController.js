const {
    findAllLoginsFromDb,
    findLoginByIdFromDb,
    findLoginsByUserFromDb,
    insertLoginToDb,
    deleteLoginByIdFromDb,
  } = require('../model/passifyOrm');
  
  module.exports = {
    findLoginsByLoggedInUserApi: async (req, res) => {
      try {
        const userLogins = await findLoginsByUserFromDb(req.user.id);
        return res.json(userLogins);
      } catch (e) {
        res.status(401).json(e);
      }
    },
    findLoginByIdApi: async (req, res) => {
      const { loginId } = req.params;
      try {
        const login = await findLoginByIdFromDb(loginId);
        if (!login) {
          return res.status(404).send('No login found with that id');
        }
        return res.json(login);
      } catch (e) {
        res.status(401).json(e);
      }
    },
    findAllLoginsApi: async (req, res) => {
      try {
        const logins = await findAllLoginsFromDb();
        return res.json(logins);
      } catch (e) {
        res.status(401).json(e);
      }
    },
    deleteLoginByIdFromDb: async (req, res) => {
      const { loginId } = req.params;
      try {
        const loginToDelete = await findLoginsByUserFromDb(loginId);
        if (loginToDelete.userId !== req.user.id) {
          return res.status(401).send('You are unauthorized to delete this login');
        }
        const deletedLogin = await deleteLoginByIdFromDb(loginId);
        return res.json(deletedLogin);
      } catch (e) {
        res.status(401).json(e);
      }
    },
    insertLoginApi: async (req, res) => {
    //  req.user // logged in user
    //  req.body // coming from form
    //  req.params // coming from wildcards declared in routes
      const { login } = req.body;
      try {
        const createdLogin = await insertLoginToDb(login, req.user.id);
        res.json(createdLogin);
      } catch (e) {
        res.status(401).json(e);
      }
    },
  }