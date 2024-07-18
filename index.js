//% Generics
var pair1 = { first: 5, second: 10 };
var pair2 = {
    prop1: 5,
    prop2: "hello",
    prop3: true
};
//, Generics functions interface
function getMiddleElement(items) {
    if (items.length === 0) {
        return undefined;
    }
    var middleIndex = Math.floor(items.length / 2);
    return items[middleIndex];
}
var numbers = [1, 2, 3, 4, 5];
var middleNumber = getMiddleElement(numbers);
console.log("middleNumber: ", middleNumber); // 3
// middleNumber sarà di tipo number
var strings = ["apple", "banana", "cherry"];
var middleString = getMiddleElement(strings);
console.log("middleString: ", middleString); // banana
var getArrayLength = function (items) {
    return items.length;
};
var arrLength = getArrayLength([1, 2, 3, 4, 5]);
//, Più parametri generici
function pairElements(first, second) {
    return [first, second];
}
var result1 = pairElements(5, "hello");
console.log(result1); // [5, "hello"]
var result2 = pairElements(true, { name: "Alice" });
console.log(result2); // [true, { name: "Alice" }]
var result3 = pairElements(["apple", "banana"], 42);
console.log(result3); // [["apple", "banana"], 42]
//, Bounded Generics
