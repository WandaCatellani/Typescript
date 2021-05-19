// Types

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

class User {
  private name: string;
  public email: string;
  protected age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }

  register() {
    console.log(`${this.name} is registered!`);
  }

  showAge() {
    return this.age;
  }

  private AgeYears() {
    return this.age + " years";
  }

  payInVoice() {
    console.log(`${this.name} paide invoice`);
  }
}

let wan = new User("Wan", "wan@gmail.com", 30);
console.log(wan.showAge());

class Member extends User {
  id: number;

  constructor(id, name, email, age) {
    super(name, email, age);
    this.id = id;
  }

  payInVoice() {
    super.payInVoice();
  }
}

let joe = new Member(7, "Joe", "joe@gmail.com", 15);
joe.payInVoice();
