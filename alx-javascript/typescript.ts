interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
}

// interface declaration with classes
class UserAccount {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user1: User = new UserAccount("Murphy", 1);

// composing types
// Unions
type MyBool = true | false;
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

function getLength(obj: string | string[]) {
    return obj.length;
}

function wrapInArray(obj: string | string[]) {
    if (typeof obj === "string") {
        return [obj];
                (parameter) obj: string
    }
    return obj;
}

// Generics
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;


// Declaring your own types that use generics
interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a constant called 'backpack', and to not worry about where it came from
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack
const object = backpack.get();

// Since the backpack variable is a sting, you can't pass a number to the add function.
backpack.add(23);

// structural type system
interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);