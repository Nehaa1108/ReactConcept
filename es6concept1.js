// Logical && & ||

let a = true;
let b = true;
console.log("Logical &&", a && b)
console.log("Logical ||", a || b)


let c = true;
let d = false;
console.log("Logical &&", c && c)
console.log("Logical ||", c || c)


let e = false;
let f = true;
console.log("Logical &&", e && f)
console.log("Logical ||", e || f)



let g = false;
let h = false;
console.log("Logical ||", g || h)


function getName(name)
{
  return name;
}

let n = true;

console.log(n && getName("Neha"));

function getName(namee)
{
  return namee;
}

let s = false;

console.log(s && getName("Neha"));


//Template literal--

let name1 = "Neha";
let name2 = "Gupta";

console.log(name1 + " " + name2)
console.log("Tempplate Literal" , `${name1} ${name2}`);

//Ternary Operator--

let showRecipeOne = true;

if(showRecipeOne)
{
  console.log("Cake");
}
else{
  console.log("Coke");
}

//condition ? statement1 : statement2

showRecipeOne ? console.log("Cake") : console.log("Coke");