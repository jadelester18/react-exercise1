import { users as data } from "../data/users";

//private
let users = [...data];

export function getAllUsers() {
  // get all users
  return [...users];
}

export function getUserById(id) {
  //get single user by id
  return users.find((user) => user.id === id);
}

export function updateUser(id, userInfo) {
  //update user (userInfo is an object which can optionally contain properties of a user)
  users = users.map((user) => {
    if (user.id === id) {
      return {
        ...user, // name age email prop1 prop2 prop3
        ...userInfo, // email prop1
      };
    }

    return user;
  });
}

function generateId(users) {
  // generates a unique id based on the length of the comments array
  return users.length + 1;
}

export function addUser(userInfo) {
  // add user (userInfo is an object which can optionally contain properties of a user)
  // use generateId function and pass users array as the argument to generate a unique id.
  const newUsers = {
    id: generateId(users),
    ...userInfo
  };

  users = [...users, newUsers];
  return newUsers;
}
