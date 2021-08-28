/* const company = {
  name: 'SK',
  id: 120,
  ceo:{
      name1 : "Srikanto",
      id:140,
      education:' BSC in CSE'
  }
}
const {name, id  } = company;
const {name1} = company.ceo;
console.log(name1) */
const number = [120, 25,20];
const [,,secound,] = number;
console.log(secound);