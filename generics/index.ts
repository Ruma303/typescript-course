    //% Generics

    //, Generic Object Types

    /* type Specific = {
        first: string;
        second: string;
    };

    type Generic<T> = {
        first: T;
        second: T;
    };

    const pair1: Generic<number> = { first: 5, second: 10 };

    type Generic2<T, U, E> = {
        prop1: T;
        prop2: U;
        prop3: E;
    }

    const pair2: Generic2<number, string, boolean> = {
        prop1: 5,
        prop2: "hello",
        prop3: true
    }; */


    //, Generics functions interface
    /* function getMiddleElement<T>(items: T[]): T | undefined {
        if (items.length === 0) {
            return undefined;
        }
        const middleIndex = Math.floor(items.length / 2);
        return items[middleIndex];
    }

    const numbers = [1, 2, 3, 4, 5];
    const middleNumber = getMiddleElement(numbers);
    console.log("middleNumber: ", middleNumber) // 3
    // middleNumber sarà di tipo number

    const strings = ["apple", "banana", "cherry"];
    const middleString = getMiddleElement(strings);
    console.log("middleString: ", middleString) // banana
    // middleString sarà di tipo string


    //, Generics functions type
    type GetArrayLength<T> = (items: T[]) => number;

    let getArrayLength: GetArrayLength<number> = (items): number => {
        return items.length;
    }

    let arrLength = getArrayLength([1, 2, 3, 4, 5]); */



    //, Più parametri generici
    /* function pairElements<T, U>(first: T, second: U): [T, U] {
        return [first, second];
    }

    const result1 = pairElements(5, "hello");
    console.log(result1);  // [5, "hello"]

    const result2 = pairElements(true, { name: "Alice" });
    console.log(result2);  // [true, { name: "Alice" }]

    const result3 = pairElements(["apple", "banana"], 42);
    console.log(result3);  // [["apple", "banana"], 42] */



    //, Bounded Generics



    //, Generics Constraints



    //, Type Assertions con generics
    let a = <string | number>'hello';
    const myImg = <HTMLImageElement>document.querySelector('img');



    //, Type Narrowing


    //, Type Guards