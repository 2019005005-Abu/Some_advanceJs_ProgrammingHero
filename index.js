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


const numbers2=[12,5,23,45,11,18,9,55,61,1];
const n2=numbers2.filter((num)=>{
    return num>50
})
console.log(n2);
const n3=numbers2.filter((nu)=>{
    return nu%2==0
})
console.log(n3)

const filtering=produ.filter((product)=>{
    return product.price>20000
})
console.log(filtering)

//find
const finding=numbers.find(function(number){
    return number%2==0
})
console.log(finding)

const cheapProduct=produ.find(function(pro){
    return pro.price>30000
})
console.log(cheapProduct)
console.log(cheapProduct)

//reduce function

const mynumbers=[1,2,3,4,5];
const reducing=mynumbers.reduce((x,y)=>{
   return x+y
},0)
console.log(reducing);





class Team_Member{
   name;
   location;
   constructor(name,location){
    this.name=name;
    this.location=location;
   }
   provideFeedBack(){
    console.log(`${this.name} thank you for youre feedback`)
}

}


const stydent={
    name:"Kolim Uddin",
    age:15,
    class:"Ten",
    marks:{
     math:78,
     physic:89,
     chemistry:65
    }
}

const marks=stydent.marks;
const math=stydent.marks.math;
const chemistry=stydent['marks']['math'];
console.log(chemistry);

// Object oriented
class Instractor extends Team_Member{
    name;
    designation="Job Placement Commandous";
    team="Job Placement";
    location;
    constructor(name,location,tech){
        super(name,location);
        this.tech=tech;
    }
    supportSession(time){
        console.log(`start the support session at ${time}`);
    }
    createQuiz(module){
        console.log(`Please create  quiz for module ${module}`)
    }

    provideFeedBack(){
        console.log(`${this.name} thank you for youre feedback`)
    }
   developeThefeature(feature){
    console.log(`Please develope the feature ${feature}`)
   }
   release(version){
    console.log(`Please release the apps ${version}`)
   }

}

class Student{
    constructor(name,sub){
        this.name=name;
        this.sub=sub;
    }
}
class Teacher extends Student{
    constructor(name,sub,location){
        super(name,sub);
        this.location=location
    }
}
const myteacher=new Teacher("Shahriar","math","Sarishabari");
console.log(myteacher.name)


const nums = [1,2,3,4,5];
let output = nums.filter(n => n%2);
console.log(output);







