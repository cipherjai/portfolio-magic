const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*  for (let i = 0; i < companies.length; i++) {
    const element = companies[i];
    console.log(element);
    
}

// forEach
companies.forEach(function(company, index, companies){
  console.log(company.category);
  console.log(index);    
});
*/
// Map Filter Reduce

// Filter

// let canDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 21){
//         canDrink.push(ages[i]);
//     }
// }

// console.log(canDrink);

// Using Filter
// const canDrink = ages.filter(function(age){
//   if(age >= 21){
//       return true;
//   }
// });

// Using Arrow w/ filter
/* const canDrink = ages.filter(age => age >= 21);
console.log(canDrink); */


// get retail companies 
/*   const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);

// get 8-s companies
const get80sCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990);
console.log(get80sCompanies);

// that last ten years 
const thatLastTenYears = companies.filter(company => (company.end-company.start >= 10));
console.log(thatLastTenYears);
 */
// Maps
// const mapOfCompanies = companies.map(function(company){
//   return company.name;
// });
// console.log(mapOfCompanies);

// Maps
// const mapOfCompanies = companies.map(function(company){
//   return '${company.name} [${company.start} - ${company.end}]';
// });
// console.log(mapOfCompanies);

/*  const mapOfCompanies = companies.map(company => '${company.name}');
console.log(mapOfCompanies);

// Age Square
// const srtOfAges = ages.map(age => Math.sqrt(age));
// console.log(srtOfAges);

// Age Square
const srtOfAges = ages
.map(age => Math.sqrt(age))
.map(age => age*2);
console.log(srtOfAges);

// Sort
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(sortedCompanies);

const sortAges = ages.sort((a, b) => b - a);
console.log(sortAges);

// Reduce 
const ageSum = ages.reduce((total, age) => total + age, 0);
console.log(ageSum);

// total Years 
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears); */

const combined = ages
  .map(age => age * 2)
  .filter(age => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b, 0);
  console.log(combined);
  