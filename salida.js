// Types
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// String
/* var myString = "Hello";
myString = 7 + ""; // Transforma el numero a string

var myStringTwo: string = "texto";
console.log(myStringTwo); */
// Number
/* var myNumber = 7;
console.log(myNumber);

var myNumberTwo: Number = 8;
console.log(myNumberTwo);*/
// Boolean
/* var myBoolean = false;
console.log(myBoolean);

var myBooleanTwo: Boolean = true;
console.log(myBooleanTwo);*/
// any acepta cualquier tipo de dato
/* var myVar: any = 77;
myVar = "Hello World";
console.log(myVar);
document.write(myVar); */
// Arrays
/* var StringArray: string[] = ["item1", "item2", ""];
var NumberArray: number[] = [1, 2, 3];
var BooleanArray: boolean[] = [true, false, true];
var AnyArray: any[] = [1, 2, true, "hello", [], {}]; */
// tuple - Arrays con estructura definida
/* var strNumTuple: [string, number];
strNumTuple = ["Hola", 8]; */
// Void, undefined, null - Vacios, indefinido y nulos
/* let myVoid: void = undefined;
let myNull: null = null; // o undefined
let myUndefined: undefined = undefined; */
// Functions
/* function getSum(num1: number, num2: number): number {
  return num1 + num2;
}

let mySum = function (num1: number | string, num2: number | string): number {
  if (typeof num1 === "string") {
    num1 = parseInt(num1);
  }
  if (typeof num2 === "string") {
    num2 = parseInt(num2);
  }
  return num1 + num2;
};

// El sigo ? -> quiere decir que su parametro es opcional
function getName(firstName: string, lastName?: string): string {
  if (lastName === undefined) {
    return firstName;
  }
  return `${firstName} ${lastName}`;
}

document.write(getName("Wan"));

function myVoidFunction(): void {
  return;
}*/
// Interfaces
/* interface ITodo {
  title: string;
  text: string;
}

function showTodo(todo: ITodo) {
  console.log(`${todo.title} - ${todo.text}`);
}

// Una manera
// showTodo({ title: "cena", text: "lorem" });

// Otra manera
let myTodo: ITodo = { title: "cena", text: "lorem" };

showTodo(myTodo); */
// Class
// private: Solo accesible dentro de la clase
// public: Se puede acceder siempre
// protected: Accesible a los que hereden la clase
var User = /** @class */ (function () {
    function User(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
    User.prototype.register = function () {
        console.log(this.name + " is registered!");
    };
    User.prototype.showAge = function () {
        return this.age;
    };
    User.prototype.AgeYears = function () {
        return this.age + " years";
    };
    User.prototype.payInVoice = function () {
        console.log(this.name + " paide invoice");
    };
    return User;
}());
var wan = new User("Wan", "wan@gmail.com", 30);
console.log(wan.showAge());
var Member = /** @class */ (function (_super) {
    __extends(Member, _super);
    function Member(id, name, email, age) {
        var _this = _super.call(this, name, email, age) || this;
        _this.id = id;
        return _this;
    }
    Member.prototype.payInVoice = function () {
        _super.prototype.payInVoice.call(this);
    };
    return Member;
}(User));
var joe = new Member(7, "Joe", "joe@gmail.com", 15);
joe.payInVoice();
