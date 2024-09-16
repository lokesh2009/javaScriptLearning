// filter prime nuymber from array
// Prime num is number which is divisible by 1 and them self only example 2 , 3, 7

let naturalNum = [2,8,9,7,18,11]

let isPrime_Num = (num)=>{
    if(num <2) return false;
    for(let i =2; i<=Math.sqrt(num);i++){
        if(num % i ===0)
            return false; 
    } 
    return true
} ;

const PrimeNum=naturalNum.filter(isPrime_Num)
console.log(PrimeNum)

// Filter People with Specific Age Range in Nested Object
const people = [
    { name: 'John', age: 28, address: { city: 'New York', country: 'USA' } },
    { name: 'Mike', age: 35, address: { city: 'London', country: 'UK' } },
    { name: 'Jane', age: 22, address: { city: 'Paris', country: 'France' } },
    { name: 'Sarah', age: 40, address: { city: 'Berlin', country: 'Germany' } }
  ];

const filePersonAge = people.filter(person => person.age >=28 && person.age >=40)
console.log(filePersonAge)

// Filter Objects by Matching Partial Text

const products = [
    { id: 1, name: 'Samsung Galaxy S21' },
    { id: 2, name: 'Apple iPhone 12' },
    { id: 3, name: 'Google Pixel 5' },
    { id: 4, name: 'OnePlus 9 Pro' }
  ];


  const partialText = products.filter(ptext => ptext.name.includes('iPhone'))
  console.log(partialText)

// Filter Array of Objects Based on Multiple Conditions
  const employees = [
    { name: 'John', department: 'HR', yearsExperience: 5 },
    { name: 'Jane', department: 'Engineering', yearsExperience: 7 },
    { name: 'Bob', department: 'Engineering', yearsExperience: 4 },
    { name: 'Alice', department: 'Marketing', yearsExperience: 8 },
    { name: 'Sunny', department: 'Engineering', yearsExperience: 8 },
  ];

  const multipleCondition_check = employees.filter(yearofex => yearofex.department==='Engineering' && yearofex.yearsExperience >4)
  console.log(multipleCondition_check)

  // Filtering by dynmic values

  const students = [
    { name: 'Alice', grade: 85, enrolled: true },
    { name: 'Bob', grade: 92, enrolled: false },
    { name: 'Charlie', grade: 70, enrolled: true },
    { name: 'Dave', grade: 95, enrolled: true }
  ];
  
  // Dynamic filter conditions
  const minGrade = 80;
  const onlyEnrolled = true;

  const dynamicFilter = students.filter(stu =>stu.grade >= minGrade && stu.enrolled ==onlyEnrolled)
  console.log(dynamicFilter)

  //Filter and Chain Other Array Methods
  const transactions = [
    { type: 'income', amount: 100 },
    { type: 'expense', amount: 50 },
    { type: 'income', amount: 200 },
    { type: 'expense', amount: 80 }
  ];

  const totalIncome = transactions.filter(tran =>tran.type==='income').map(tran=>tran.amount).reduce((acc,amount)=>acc+amount,0)
  const sumall =transactions.map(trans =>trans.amount).reduce((amt,value)=>amt+value,0)
  console.log(sumall)