//map , filter, find, some, every, includes, indexOf, findindex....

const personArray =
[
  {
    name:"person1",
    age: 25,
    country: "USA",
  },
  {
   name:"person4",
    age: 26,
    country: "USA",
  },
   {
    name:"person2",
    age: 30,
    country: "India",
  },
   {
    name:"person3",
    age: 20,
    country: "Russia",
  },
]

let getAllNames = personArray.map((singlePerson, index)=>
{
  console.log(singlePerson)
  // return singlePerson.name
  return `${singlePerson.name} age is ${singlePerson.age}`
})

console.log(getAllNames)


//find
let getPersonFromUSA = personArray.find((singlePerson,index)=>
{
  return singlePerson.country === 'USA'
})

console.log(getPersonFromUSA)

//filter
let getAllPersonFromUSA = personArray.filter((singlePerson,index)=>
{
  return singlePerson.country === "USA"
})

console.log(getAllPersonFromUSA)


//some--- boolean
//some will return true when any condition  will satisfy 
let checkSomeExample = personArray.some((singlePerson,index)=>
{
  return singlePerson.age >=25
})

console.log(checkSomeExample)

//every----
//every will return true when all the condition will satisfy 
//all person name should be person1 then it will return true
let checkEveryExample = personArray.every((singlePerson,index)=>
{
  return singlePerson.name ==="person1"
})

console.log(checkEveryExample)


//include--
//Determines whether an array includes a certain element, returning true or false as appropriate.
const fruitArray = ['apple','banana','orange']
console.log(fruitArray.includes('apple'), fruitArray.indexOf('banana'))
//Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

//findIndex--
//Returns the index of the first element in the array where predicate is true, and -1 otherwise.
let getIndexOfPersonFromIndia = personArray.findIndex(singlePerson=>
{
  return  singlePerson.country === 'India'
}
)
console.log(getIndexOfPersonFromIndia)