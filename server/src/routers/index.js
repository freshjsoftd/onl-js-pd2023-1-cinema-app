const Router = require('express');

const actorRouters = require('./actorRouters')
const directorRouters = require('./directorRouters')

const router = new Router();

router.use('/actors', actorRouters);
router.use('/directors', directorRouters);

module.exports = router;
