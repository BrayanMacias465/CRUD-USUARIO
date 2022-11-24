
var usersDB = [
    {
        id: 1,
        first_name: 'Brayan',
        last_name: 'Macias',
        email: 'brayan@hotmail.com',
        password: 'clave1234',
        birthday: '1997/04/18'
    }
];
let id = usersDB[usersDB.length-1].id+1;

const findAllUsers = () => {
    return usersDB;
}

const findUserById = (id) => {
    return usersDB.find( user => user.id == id); 
}

const findUserByEmail = (email) => {
    return usersDB.find( user => user.email == email);
}

const deleteUser = (id) => {
    usersDB = usersDB.filter( user => user.id != id);
    return usersDB; 
}

const updateUser = (id, userUpdate) => {

    usersDB = usersDB = usersDB.map( user => user.id == id ? 
        {
            id:         id,
            first_name: userUpdate.first_name,
            last_name:  userUpdate.last_name,
            email:      userUpdate.email,
            password:   userUpdate.password,
            birthday:   userUpdate.birthday

        } : user );
    return usersDB; 
}

const createUser = (user) => {
    const newUser = {
        id:         id++,
        first_name: user.first_name,
        last_name:  user.last_name,
        email:      user.email,
        password:   user.password,
        birthday:   user.birthday
    }
    usersDB.push(newUser);
    return usersDB;
}

module.exports = {
    findAllUsers,
    findUserById,
    findUserByEmail,
    createUser,
    deleteUser,
    updateUser
}