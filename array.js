const id = 1;
const productName = "Phone"
const rating = 5;

const product = 
{
 id,
 productName,
 rating
}

console.log(product)

const product2 = {
  description: "product 2 description",
  id,
  productName,
  rating
}

// const getdescription = product2.description
// console.log(getdescription)


//other way---
const {description} = product2
console.log(description)

// array
const array = [1,2,3]

// let getArrayOneValue = array[0]
// let getArraySecondValue = array[1]

// console.log(getArrayOneValue,getArraySecondValue)

const [arrayFirstElement, arraySecondElement]= array
console.log(arrayFirstElement,arraySecondElement)


// default parameters , spread and rest operators

// default parameters ---
function mulTwoNumber(num1=2,num2=3)
{
  return num1*num2
}

console.log(mulTwoNumber())


//spread operators--
const arr = [2,3,5,7,22,50]

console.log([...arr])

const arr1 = [8,9,4,0,7]
console.log([0,32,...arr,...arr1,65])


//rest operators---
function getInfo(a,b,c,d,e)
{
  console.log(a,b,c,d,e)

  return "Info"
}

console.log(getInfo(1,2,3,4,5))

function getInfo1(a,...c)
{
  console.log(a,c)

  return "rest operator"
}

console.log("rest operator with spread operator",1,2,3,4,5,6,7,8,89,9,3,5,4,3)