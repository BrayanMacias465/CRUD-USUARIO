const usersController = require('./usuarios.controller');

const getAllUsers = (req, res) => {
    const data = usersController.findAllUsers();
    res.status(200).json(data);
}

const getUserById = (req, res) => {
    const { id } = req.params;
    const data = usersController.findUserById(id);
    if(data){
        res.status(200).json(data);
    }else{
        res.status(400).json({message: 'Invalid Id'});
    }
}

const postUser = (req, res) => {
    const { first_name, last_name, email, password, birthday } = req.body;
    
    if(first_name && last_name && email && password && birthday){
        const data = usersController.createUser({ first_name, last_name, email, password, birthday });
        res.status(200).json(data);
    }else{
        res.status(200).json({ message: 'Invalid data' });
    }
}

const updateUser = (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password, birthday } = req.body;
    
    if(first_name && last_name && email && password && birthday){
        const data = usersController.updateUser(id, { first_name, last_name, email, password, birthday });
        res.status(200).json(data);
    }else{
        res.status(200).json({ message: 'Invalid data' });
    }
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    const data = usersController.deleteUser(id);
    res.status(200).json(data);
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    updateUser,
    deleteUser
}