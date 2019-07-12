let router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: 'API is working',
        message: 'Welcome to this API'
    });
})

var contactController = require('./contactModelController')

router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .delete(contactController.delete)
    .get(contactController.view)
    .put(contactController.update)

module.exports = router;