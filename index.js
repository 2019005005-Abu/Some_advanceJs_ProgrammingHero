function calculateSalary(salary,tax=0.25,bounus=0){
    const remaingSalary=salary-salary*tax
    const total=remaingSalary+bounus;
    return total;
}
//template string
const elementHtml=`
<div>
 <h3>Name:</h3>
 <p>Address:</p>
 <p>Salary:</p>
 <p>Others:</p>
</div>
`
const{x,y,z,...c}={
    x:45,
    y:50,
    z:33,
    name:"Abu Al Shahriar",
    salary:646363
}
const[a,b,m,...d]=[63,74,90,67,56];

const users=[
    {id:1,name:"Abu",job:"doctor"},
    {id:2,name:"Al",job:"Lawyear"},
];
console.log(users[1].name)

const data={
    count:5000,
    data:[
        {id:1,name:"Babul",job:"leader"},
        {id:2,name:"Dabul",job:"leader"},
        {id:3,name:"kabul",job:"Software Enginner"}
    ]
}
console.log(data.data[0].name)

const user={
    id:201905005,
    name:"Thomas Alva Adison",
    address:{
         first:"67/h loloskochukhet",
         second:"Third floor",
         third:"right side",
         strett:{
            streetName:"87dhdh"
         }
    }
}

console.log(user.address.third)
console.log(user.address.strett?.streetName);

//map
const numbers=[2,8,4,6,3];
const outPut=[];
for(const number of numbers){
    const doubled=number*2;
    outPut.push(doubled)
}

console.log(outPut)

function getDoubles(numbers){
    const outPutIs=[];
    for(const n of numbers){
        const d=doubleIt(n);
        outPutIs.push(d)
    }
    return outPutIs;
}
console.log(getDoubles(numbers))

function doubleIt(number){
    return number*2
}

const makeDouble=numbers.map((n)=>{
   return n;
})
console.log(makeDouble)

const myData=[
    {name:"Shahriar",Profession:"Software Enginner"},
    {name:"Bangladesh",Profession:"Country Name"}
]
const mapping=myData.map((data)=>{
    return data.name
})
console.log(mapping)

const myArr=[12,56,87,44].map((nu)=>{
    return nu/2;
})
console.log(myArr);
const thirds=numbers.map((x=>x/3));
console.log(thirds)

const friends=['Tom Hanks','Tom Cruise','Tom Brady'];
const friendsLetters=friends.map(function(m){
    return m[0]
})
console.log(friendsLetters)

const friendsLength=friends.map(function(fr_length){
    return fr_length.length
})
console.log(friendsLength);
const products=[
 {id:1,name:"Laptop",price:45000},
 {id:2,name:"mobile",price:80000},
 {id:3,name:"watch",price:35000},
 {id:4,name:"table",price:1000},
].map((product_item)=>{
    return product_item.name
})
console.log(products)
const produ=[
    {id:1,name:"Laptop",price:45000},
    {id:2,name:"mobile",price:80000},
    {id:3,name:"watch",price:35000},
    {id:4,name:"table",price:1000},
   ]
const myPrice=produ.map((singlePrice)=>{
    return singlePrice.price
})
console.log(myPrice)
const myeach=produ.forEach((item)=>{
    console.log(item)
})
console.log(myeach)
