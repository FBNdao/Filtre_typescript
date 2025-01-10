
// Partie 1   
  function filtrerSelonNomEtAge(users: User[], nom: string, age: number): User[] {
    console.log("filtrerSelonNomEtAge quand le nom est "+ nom +" et l'âge est " +age);
    return users.filter(user =>
      user.name.includes(nom) && user.age === age
    );
  }
  
  console.log(filtrerSelonNomEtAge(users, "fatou", 25));
  console.log(filtrerSelonNomEtAge(users, "John", 25));
  console.log(filtrerSelonNomEtAge(users, "John", 24));

// partie 2 
import * as fs from 'fs';

function lireAPartirDUnFichier(fichier: string): User[] {
  const data = fs.readFileSync(fichier, 'utf-8');
  return JSON.parse(data);
}

function filtreP2(source: User[] | string, nom: string, age: number): User[] {
    var users: User[];
  
    if (Array.isArray(source)) {
      users = source;
    } else {
      users = lireAPartirDUnFichier(source);
    }
  
    return users.filter(user =>
      user.name.includes(nom) && user.age === age
    );
  }


  
    


  
    
