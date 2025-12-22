//% Aggiornamento Array
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//, Inferenza automatica e manuale del Tipo
//let arr1 = [1, 2, 3];
//let arr2: number[] = [4, 5, 6];
//let arr3: string[] = ['a', 'b', 'c'];
//, Array Eterogenei e Union Types
// let arr4 = [1, 'a', true];
// let arr5: (string | number)[] = [1, 'a', 5, 43, 'hello', 'world'];
// let arr6: (any | void )[] = [1, 'a', true, {}];
//, Array Vuoti e Inferenza di Tipo
// const arr7 = [];
// arr7.push(1);
// arr7.push('a');
// console.log(arr7);
// const arr8: number[] = [];
// arr8.push(10); // ✅ Consentito
// arr8.push("test"); // ❌ Errore: 'string' non è assegnabile a 'number'
//, Dichiarazioni alternative
// const arr9: Array<number> = [1, 2, 3];
// const arr10: Array<string | number | boolean> = [true, "hello", "world", 10];
//, Array readonly
// let arr11: readonly any[] = [1, 'Hello'];
// let arr12: ReadonlyArray<any> = [2, 3, 'World'];
// arr11.push(3);
// arr12.sort();
// console.log(arr11.indexOf(1)) // 0
// console.log(arr11.includes(2)) // false
// console.log(arr11.concat(arr12)) // [ 1, 'Hello', 2, 3, 'World' ]
// console.log(arr12.slice(0, 2)) // [ 2, 3 ]
// console.log(arr12.join('- ')) // 2 - 3 - World
//# Array costanti e limitazione dei valori
// const icons = ["play", "pause", "stop"] as const;
// Tipo: readonly ["play", "pause", "stop"]
// type Icon = typeof icons[number]; // "play" | "pause" | "stop"
// console.log(icons[0]) // "play"
// console.log(icons[1]) // "pause"
// console.log(icons[2]) // "stop"
//# Shallow copy
// const base: number[] = [10, 20];
// const view: ReadonlyArray<number> = base; // Copia per riferimento - Shallow copy
// base.push(30);
// console.log(view); // [10, 20, 30]
// console.log(base); // [10, 20, 30]
//# Array immutabili (tuple)
// const original = [1, 2, 3];
// const copy = [...original] as const;
// const newArray = [...original, 4]; // Non modifica original ma crea un nuovo array
// console.log(copy) // [1, 2, 3]
// console.log(newArray) // [1, 2, 3, 4]
// copy.push(4); // ❌ Errore: la tupla è readonly
//# Deep copy
var original = [[1, 2], [3, 4]];
var deepcopy = original.map(function (inner) { return __spreadArray([], inner, true); });
deepcopy[0][0] = 99; // Non modifica original[0][0]
console.log(original);
/*
[1, 2]
[3, 4]
*/
console.log(deepcopy);
/*
[99, 2]
[3, 4]
*/ 
