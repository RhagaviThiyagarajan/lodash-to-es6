//convert the following from lodash to es6
//chunk
//reduce
//filter
//find
//sum

//1)reduce

//lodash

__.reduce([1,2,3],function(total,n){return total+n;},0);

//ES6
[1,2,3].reduce(( total,n)=>total+n);



//2)Filter
__.filter([1,2,3],function(n){ return n<=2;});


//es6
[1,2,3].filter(n=>n<=2);


//3)Sum

//lodash

const_=require('lodash');

//use of sum method

let gfg= _.sum([5,10,15,20,25]);
console.log(gfg);


//es6
const arr=[5,10,15,20,25];
const sum=arr.reduce((a,b)=>a+b,0);


//4)
//find


const _=require('lodash');
let x=[2,3,5,7,10,13,15];
let result=_.find(x,function(n)
{
    if(n*n>100)
    {
        return true;
    }
});
console.log(result);



//es6
let numbers=[1,2,3,4,5];
console.log(numbers.find(e=>e%2==0));



//Chunk
//lodash

const_=require('lodash');
let arr1=[1,2,3,4,5,6];

console.log(_.chunk(arr1,1))

//es6
const chunk=(arr,size)=>
Array.from(
    {
        length:Math.ceil(arr.length/size)
    },(v,i)=>
    arr.slice(i*size,i*size+size)
);
console.log(chunk([1,2,3,4,5],2));