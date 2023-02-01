const companies = [
    {name: "Kulima gold", Category: "Seeds", Start: 1981, End: 1986},
    {name: "Chipuku", Category: "Groceries", Start: 1985, End: 2020},
    {name: "Kandodo", Category: "Beddings", Start: 2003, End: 1800},
    {name: "Portland", Category: "Buildings", Start: 2000, End: 2023},
    {name: "Chirani", Category: "Seeds", Start: 1999, End: 2020},
    {name: "Agora", Category: "Iron sheets", Start: 1985, End: 2003},
    {name: "Puma", Category: "Seeds", Start: 2005, End: 2020},
];

const ages = [54, 24, 87, 19, 27, 45,76, 44,22, 5,2, 33, 66, 49, 40];

//forEach()

//compare the forloop and forEach(), first the for loop

// for(let i=0; i<companies.length; i++){
//     console.log(companies[i])

// }

//now the forEach()
// companies.forEach(function(iterator){
//     console.log(iterator.Category)
// })
// console.log(ages)

//filter()

// let canDrink = [ ];

// for(let i=0; i<ages.length; i++){
//     if(ages[i] >= 50){
//         canDrink.push(ages[i])
//     }
// }

//now let try to use a filter
// const canDrink = ages.filter(function(age){
//     if(age >= 50){
//         return true;
//     }
// })

// const canDrink = ages.filter(age => {
//     return age >= 40})

// const canDrink = ages.filter(age => age =>40)
    

//  console.log(canDrink);


//filter where company category is seeds

// const seedsCompanies = companies.filter(seedco => seedco.Category==='Seeds')
// console.log(seedsCompanies)

//get companies that started in 20000
 
const companiesInTwothousand = companies.filter(twopin => twopin.Start >= 2000  && twopin.Start <2005);
 



//get companies that lasted 5 years

const fiveYearOlds = companies.filter(fives => fives.End - fives.Start >=10)
 
//map()
//take all the company names
// const companyNames = companies.map(names => names.name)

//the old way
const companyNames = companies.map(function(name){
    return name.name
})

const companyDetails = companies.map(function(details){
    return  `${details.name} [${details.Start} - ${details.End}]`
})


//sort()

const sortedAge = ages.sort((a,b) => a-b)


//reduce()

const addedAges =ages.reduce((accumulator, current) =>accumulator + current,0)
console.log(addedAges)

//the odd way
let sumOfAges = 0;
for(let i = 0; i < ages.length; i++){
    sumOfAges += ages[i];
}

console.log(sumOfAges)





