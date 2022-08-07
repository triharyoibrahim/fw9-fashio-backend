const router = require('express').Router();

//Router Admin
router.use('/admin/profileSeller', require('./profileSeller'));

//Router Users
router.use('/',require('./registerSeller'));
router.use('/',require('./productSeller'));
router.use('/',require('./loginSeller'));
router.use('/',require('./chat'));

module.exports = router;