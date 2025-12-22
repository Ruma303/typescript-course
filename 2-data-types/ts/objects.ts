//% Aggiornamento oggetti

//# Type inference
// let obj = {
//     name: "Ruma",
//     age: 29
// };

// console.log(typeof obj.name)
// console.log(typeof obj.age)

// const obj = {
//     prop: "Valore 1",
// };
// console.log(obj.prop)

// I campi interi possono ancora variare
// obj.prop = "Valore 2";
// console.log(obj.prop)

// Ciò che non può cambiare è la struttura dell'oggetto stesso
// ad esempio non posso aggiungere o rimuovere un nuovo campo
// obj.prop2 = "Valore 2"; // errore
// delete obj.prop; // errore

//# Type annotation
// let obj: { name: string; age: number } = {
//   name: "Ruma",
//   age: 29
// };

//# Optional properties
// let obj: { name?: string } = {};
// console.log(obj.name?.toUpperCase()); // ✅ Nessun errore: Undefined

//# Readonly properties
// let obj: { readonly age: number } = { age: 30 };
// obj.age = 31; // ❌ Errore: Cannot assign to 'age' because it is a read-only property.

// const obj: { readonly age: number } = { age: 31 };

//# Index Signature
// let obj: { [key: string]: boolean | number } = {
//   prop1: true,
//   prop2: false
// };

// obj.prop1 = true;
// obj.prop2 = 10;

// Verifica dei nomi delle chiavi
// const keys = Object.keys(obj); // ["prop1","prop2"]
// console.log(keys);

// Verifica chiavi in oggetto
// console.log('prop1' in obj); // true
// console.log(obj.hasOwnProperty('prop1')); // true

// Verifica del tipo della chiave
// console.log(typeof obj.hasOwnProperty('prop1')); // boolean

// Iterare sulle proprietà e valori
// for (const key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     console.log(`- Chiave: ${key} di tipo ${typeof key} con valore ${obj[key]} di tipo ${typeof obj[key]}`);
//   }
// }

// let numericKeys: { [key: number | string]: string | number | boolean } = {
//   1: "Uno",
//   2: "Due",
//   "3": false,
// };

// console.log(numericKeys[1]); // "Uno"
// console.log(numericKeys["1"]); // "Uno" (conversione automatica)

// for (const key in obj) {
//   if (obj.hasOwnProperty(key)) {
//     console.log(`- Chiave: ${key} di tipo ${typeof key} con valore ${obj[key]} di tipo ${typeof obj[key]}`);
//   }
// }


// let obj: {
//   name: string;
// 	age: number;
//   [key: string]: boolean | string | number;
// } = {
//   name: "Ruma",
//   age: 29
// };
// ❌ Errore: la proprietà `name` e `age` non sono di tipo `boolean`

// let obj2: {
// 	name?: string;
// 	readonly age: number;
// 	extraProperties: { [key: string]: boolean }
// } = {
// 	age: 30,
// 	extraProperties: {
// 		prop1: true,
// 		prop2: false
// 	}
// };


//# Oggetti come Argomenti di Funzione
// function getData(data: { id: number; user: string; address: string }) {
//   console.log(data.id);
//   console.log(data.user);
//   console.log(data.address);
// }

// getData({ id: 1, user: 'miao', address: 'la' });