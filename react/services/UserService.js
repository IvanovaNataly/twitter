
class UserService{

    getAllUsers(){
        return fetch("../../users-list.json")
            .then(response => response.json())
    }

    getUser(id){
        return fetch("../../users-list.json")
           .then(response => response.json())
            .then(users => {
                return users.find(user => {
                    if (user.id == id)
                        return user;
                });

            })
    }

}

module.exports = new UserService();
