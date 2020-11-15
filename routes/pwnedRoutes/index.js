const router = require('express')
    .Router();
const axios = require('axios');


router.post('/', async (req, res) => {
   try {
      const {domain, username} = req.body;
      const response = await axios.get(`https://www.haveibeenpwned.com/api/v3/breachedaccount/${username}?domain=${domain}`,
           {
               headers: {
                   'hibp-api-key': process.env.HIBP_KEY
               }
           });

       res.json(response.data[0]);
   } catch (e) {
       console.log(e);
       res.status(404).end()
   }
})

module.exports = router;
