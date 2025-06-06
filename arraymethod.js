//map , filter, find, some, every, includes, indexOf, findindex....

const personArray =
[
  {
    name:"person1",
    age: 25,
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