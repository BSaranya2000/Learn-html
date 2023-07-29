var ARRAY=[4,7,0,4,2]
ARRAY.push(11)
console.log(ARRAY, "ARRAY");
 ARRAY.pop()
 console.log(ARRAY,"ARRAY");
 console.log(ARRAY.length);
 console.log(ARRAY.lastIndexOf());
 let Total=0
 console.log(ARRAY.reduce(((Total,num)=>{return Total+num}), 0));
 console.log(Array.isArray(ARRAY));

 var Array1=[4,6,10,9,8]
 Array1.shift()
 console.log(Array1);
 Array1.unshift(11,3)
 console.log(Array1);
 console.log(Array1.indexOf(3));
 console.log(Array1.sort());
 console.log(Array1.reverse());
 console.log(Array1.toString());
 console.log(typeof(Array1));
 console.log(Array1.slice(0,3));
 let Array2=[1,2,3,4,5]
 console.log(Array1.concat(Array2));
 let A1=["Jan","Feb","Mar","Apr"]
 A1.splice(1,2,  "May","June")
 console.log(A1);

 
 var MultiplyToNumber=()=>{
  var a1=2,b1=6,c1=8;
  var Multiply=a1*b1*c1
  console.log(Multiply,"Multiply");
}
   
MultiplyToNumber();

const Multiplytwonumbers=(a2,b2,PrintMultiValue) => {
 var Multi=a2*b2;
 PrintMultiValue(Multi)

}
const PrintMultiValue=(a2)=>{
 console.log("Multiplication of two numbers", a2);
}
var a2=7,b2=9
Multiplytwonumbers(a2,b2,PrintMultiValue);


var a3=45
    b3=65
    setTimeout(()=> {
     console.log(a3);
    }, 6000);
    console.log(b3);

var promise=new Promise((resolve, reject) => {
 var a4=14,b4=20
 if(a4<18) {
     resolve (" Not Eligible for vote")
 } else {
     reject ("Eligible for vote")
 }
})    
promise.then((Data)=> {
 console.log(Data,"Data");
}). catch(err=> {
 console.log(err,"err");
})

var asyncawaitpromise=async()=> {
 let response=await promise;
 console.log(response);
}
asyncawaitpromise();
 const array1 = ['a','b','c','d','e'];
 const iterator1 = array1.entries();
 console.log(iterator1.next().value);
console.log(array1.copyWithin(0,3,4));
const Below = (currentvalue) => currentvalue<40;
const array3 = [1,30,39,20,35,13]
console.log(array3.every(Below));
const array4 = [1,2,3,4,5];
console.log(array4.fill(0,2,4));
console.log(array4.includes(2));
console.log(array4.includes(8));
const even = (element) => element%2==0;
console.log(array4.some(even));
const Words = ['spray','limit','elite','destruction','present','absent'];
const Result = Words.filter (Words=>Words.length>6);
console.log(Result);
const array5 = [5,12,8,130,44]
const found = array5.find (Element=> Element>10);
console.log(found);
const array6 = [0,1,2,[3,4]];
const elements = ['fire','air','water'];
console.log(elements.join());
const array7 = ['a','b','c']
const iterator = array7.keys();
for (const keys of iterator) {
    console.log(keys);
}
const array8 = ['a','b','c']
const iterator2 = array8.values();
for (const values of iterator2) {
    console.log(values);
}


