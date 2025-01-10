type User = {
    name: string;
    age: number;
  }


const users: User[] = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    {name : "john", age : 35},
    { name: "Anni", age: 25 },
    { name: "Alice", age: 25 },
  ];



// Partie 1   
  function filtrerSelonNomEtAge(users: User[], nom: string, age: number): User[] {
    return users.filter(user =>
      user.name.includes(nom) && user.age === age
    );
  }
  
  console.log(filtrerSelonNomEtAge(users, "fatou", 25));
  console.log(filtrerSelonNomEtAge(users, "John", 25));
  console.log(filtrerSelonNomEtAge(users, "John", 24));

// partie 2 
import * as fs from 'fs';

function readUsersFromFile(filePath: string): User[] {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}


// partie 2
function filtreP2(source: User[] | string, nom: string, age: number): User[] {
    var users: User[];
  
    if (Array.isArray(source)) {
      users = source;
    } else {
      users = readUsersFromFile(source);
    }
  
    return users.filter(user =>
      user.name.includes(nom) && user.age === age
    );
  }

    
