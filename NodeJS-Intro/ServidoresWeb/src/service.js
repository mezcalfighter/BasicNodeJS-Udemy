// aqui es donde se va a manejar todo el CRUD
const data = require('./mock_data.json');
//console.log(data);

module.exports = {
    getUsers:() => data,
    getUser:(id) => {
        let identificador = Number(id);
        let user = data.filter((person) => person.id === identificador)[0];
        return user;
    },
    createUser:(dataUser) => {
        let newUser = {
            id:data.length + 1,
            ...dataUser,
        };
        data.push(newUser);
        return newUser;
    },
}