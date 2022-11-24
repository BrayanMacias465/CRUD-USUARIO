const router = require('express').Router();

const userService = require('./usuarios.service');

router.get('/', userService.getAllUsers);
router.post('/', userService.postUser);
router.get('/:id', userService.getUserById);
router.put('/:id', userService.updateUser);
router.delete('/:id', userService.deleteUser);

module.exports = router;