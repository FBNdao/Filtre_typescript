/**  class MyObjects{
    constructor(public  chaine : string , public age : number ){}
} 

type dic = {}

function filter(tableau : MyObjects[] ) : MyObjects[]{
    
    var tableauObj : MyObjects[] = [];
    tableau.forEach((obj: MyObjects) => {
        console.log("1rf");
        if(obj.age == 25 &&  obj.chaine.includes("john") ){
            console.log("erf");
            tableauObj.push(obj);
            console.log("arf");
        }
      });
    return tableauObj;
}




console.log(filter([new MyObjects("john", 25)]));  **/


//type FilterCriteria = Partial<User>;


type User = {
    name: string;
    age: number;
  }


  

/**function createFilter(): (user: User) => boolean {
  return (user: User) => {
    return Object.entries(criteria).every(([key, value]) => {
      const userValue = user[key as keyof User];
      if (typeof value === 'string' && typeof userValue === 'string') {
        return userValue.includes(value);
      }
      return userValue === value;
    });
  };
}**/


const users: User[] = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    {name : "john", age : 35},
    { name: "Anni", age: 25 },
    { name: "Alice", age: 25 },
  ];
   /**const criteria: FilterCriteria = { name: "John", age: 25 };
  const filteredUsers = users.filter(createFilter(criteria));
  console.log(filteredUsers);**/


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

    