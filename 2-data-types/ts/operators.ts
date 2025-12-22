//% Operators

//, Elvis Operator
// interface Person {
//   name: string;
//   age?: number; // 'age' è opzionale
// }

// const person: Person = { name: "John" };
// console.log(person);

//, Safe Call Operator ?. (Optional Chaining)
// interface UserProfile {
//   profile?: {
//     address?: {
//       city?: string;
//     };
//   };
// }

// const user: UserProfile = {};
// console.log(Object.keys(user)); // []
// console.log(user); // []
// const city = user.profile?.address?.city; // city sarà undefined senza lanciare errori

//, Non-null assertion operator
// function processValue(value?: string) {
//   // Senza il '!', TypeScript segnalerebbe errore se 'value' è undefined
//   console.log(value!.length); // Si assume che 'value' non sia undefined/null qui
// }

//, Assertion Operator as
// interface Person {
//   name: string;
//   age: number | string;
// }

// let user: Person = { name: "John", age: "30" };
// let userAge = user.age as number;

// console.log(typeof user.name) // string
// console.log(typeof user.age) // string

// let nameType = typeof user.name;
// let ageType = typeof user.age;

// const unk = ageType as unknown;
// console.log(typeof unk);

// const str = unk as string;
// console.log(typeof str);