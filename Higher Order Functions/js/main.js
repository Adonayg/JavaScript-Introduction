const companies= [
    {name: "company one", category: "Finance", start: 1981, end: 2003},
    {name: "company two", category: "Retail", start: 1992, end: 2008},
    {name: "company three", category: "Auto", start: 1999, end: 2007},
    {name: "company four", category: "Retail", start: 1989, end: 2010},
    {name: "company five", category: "Tech", start: 2009, end: 2014},
    {name: "company six", category: "Finance", start: 1987, end: 2010},
    {name: "company seven", category: "Auto", start: 1986, end: 1996},
    {name: "company eight", category: "Tech", start: 2011, end: 2016},
    {name: "company nine", category: "Retail", start: 1981, end: 1989}
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// For loop vs forEach
for(let i = 0; i < companies.length;i++) {
    console.log(companies[i]);
}

companies.forEach(function(company) {
    console.log(company)
})

//For loop vs filter
var canDrink = [];
for(let i =0; i < ages.length; i++) {
    if(ages[i] >= 18) {
        canDrink.push(ages[i]);
    }
}

console.log(canDrink);

var canDrink = ages.filter(function(age){
    if(age >= 18){
        return true
    }
});

console.log(canDrink);

var canDrink = ages.filter(age => age >= 18);

console.log(canDrink);

const retailCompanies = companies.filter(company => company.category === "Retail");

console.log(retailCompanies);

const eightiesCompanies = companies.filter(company =>(company.start >= 1980 && company.start < 1990));

console.log(eightiesCompanies);

const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));

console.log(lastedTenYears);

// Maps
const companyNames = companies.map(function(company) {
    return company.name;
})

console.log(companyNames);

const testMap = companies.map(company => `${company.name}[${company.start} - ${company.end}]`)

console.log(testMap);

const ageMap = ages
.map(age => Math.sqrt(age))
.map(age => age * 2); 

console.log(ageMap);

//Sort
const sortCompanies = companies.sort(function(c1, c2) {
    if(c1.start > c2.start){
        return 1;
    } else {
        return -1;
    }
});

console.log(sortCompanies);

const sortedCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies);

const sortAges = ages.sort((a,b) => (a - b));

console.log(sortAges);

//For vs Reduce
let ageSum = 0;

for(let i =0; i < ages.length; i++) {
    ageSum += ages[i];

}

console.log(ageSum)

const ageTotal = ages.reduce(function(total, age){
    return total + age;
}, 0)

console.log(ageTotal)

const totalAge = ages.reduce((total, age) => total + age, 0);

console.log(totalAge);

const totalYears = companies.reduce((total, company) => total +(company.end - company.start), 0);

console.log(totalYears);

// Combined higher order functions
const combined = ages
.map(age => age * 2)
.filter(age => age >= 40)
.sort((a,b) => a - b)
.reduce((a,b) => a + b, 0);

console.log(combined);