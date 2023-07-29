 console.log("React");
 console.log("Hello");
 console.log(4.5);
 console.log("It's a good day");
 console.log(30+62);
 console.log("Fornt end");
 console.log("Back end");
 console.log(65.5-30.5);

 let a=1
 console.log(a);

 let Chapter="1";
 console.log(Chapter);

 let A=1
 console.log("The value of A is"  ,A);

 let Name="Saranya";
 console.log(Name);

 let B="Saranya";
 console.log("My name is"   ,B );

 let X=1
     Y=2
     Z=3
 console.log({ X,Y,Z});

 var M=20, N=30,ss
     M=M+N
     O=M
 console.log( "O have a", O);

 var S=5
     T=6
     console.log(S*T);
 
 var C=31
     D=25
 if (C<D) {
    console.log("C is a smallest number", C);
 } else { if (C==D)
     {
      console.log("C and D are equal");
     } else {
      console.log(" D is a smallest number");

     }
    
 } 
 
 var E=2000
 if (E%4==0) {
    console.log("E is a leap year");
 } else {
    console.log("E is not a leap year");
 }

 var F=18
 if (F>18) {
    console.log("F is a eligiable for vote ");
 } else  if (F==18) {
    console.log("F is  eligiable for vote");
 }  else {
   console.log(" F is not eligible for vote");
 }

 var H=10, I=20, J=30
if(H >I) {
    if(J>H) {
        console.log("J is Greater number");
    } else if (J ==H) {
        console.log("J and H is Greater number")
    } else {
        console.log("H is Greater number")
    }
} else if(I > J) {
     if (I ==J) {
        console.log("I and J is Greater number")
    } else {
        console.log("J is Greater number")
    }
} else if(H == I == J) { console.log("H,I,J are equal")
} else {console.log("J is Greater number")}

console.log(Math.PI);
console.log(Math.ceil(0.5));
console.log(Math.round(0.5));
console.log(Math.round(1.5));
console.log(Math.round(1.4));
console.log(Math.sqrt(49));
console.log(Math.cbrt(27));
console.log(Math.sign(-9));
console.log(Math.log(2));
console.log(Math.log10(100000));
console.log(Math.tan(0));
console.log(Math.cos(0));
console.log(Math.random(3));
console.log(Math.random()*(100-1)+1);
console.log(Math.max(45,74,15));
console.log(Math.min(45,35,28,90));

var Result=Math.max(42,78,90,35)
{
    console.log("Maximum mark",Result);
}
console.log(Math.abs(-10.5))

var U=7
    V=10
{
    console.log(Math.abs(U+V));
    console.log(Math.abs(U-V));

}    

let Book="English"

if (Book=="Tamil"){
    console.log("It's a Tamil Book");
} else if (Book=="English") {
    console.log("It's a English Book");
} else if (Book=="Maths") {
    console.log("It's a Maths Book");
} else if (Book=="Science") {
    console.log("It's a Science Book");
} else if (Book=="Social") {
    console.log("It's a Social Book");
} else {
    console.log(" Undefined Book");
}

var Color="Violet" 

switch (Color) {
    case "Green": {
        console.log("It's a Green color");
        break;
    } 
    case "Red": {
        console.log("It's a red color");
        break;
    } 
    case "Yellow": {
        console.log("It's a yellow color");
        break;
    } 
    case "Blue": {
        console.log("It's a blue color");
        break;
    }
    default: {
        console.log("Undefined color");
    }
 }

let val=["Jamuna","Saranya","vijaya","Lakshmi"]
for (let i=0; i< val.length; i++) {
    console.log(i,"i");
    console.log(val[i],"val");
    if (val[i]=="Saranya") {
        console.log("Hey it's me");
    }
}

 let i=[1,2,3,4,5]
 let sum=0
for(let i=1;i<=5;i++) {
    sum=sum+i;
}
console.log("sum of the total is " +sum);

let v=[1,2,4,5,0]
let Multi=1
for(let i=0;i<v.length;i++) {
    console.log(i);
    console.log(v);
    console.log(v[i]);
    console.log(Multi);
    if(v[i]==0) {
        
    } else { 
        console.log("It's not equal to zero");
        Multi=Multi*v[i];
    }
    
    

}
console.log("Total value"  +Multi);

 let SUM=0
 const n=100
 for(let i=1;i<=n;i++) {
    SUM=SUM+i;
 }
 console.log("Sum of the Natural numbers is"   +SUM);

 let value=[1,2,3,4,5]
 const value2=value.map((i,j)=> {
    return i+2;
 }
 ) 
 console.log(value2);
 console.log(value, "value");
 

 let VALUE=[11,12,13,14,15,1]
 let Sum=0
 const VALUE2=VALUE.map((i,j)=>{
    if(i==1){

    } else {
        return Sum=Sum+i;
        
        
    }
    
 }
 )
 console.log("Sum of the value"    , Sum);
 


 let array=[11,12,13,14,15,0]
 let MULTI=1
 const array2=array.map((i,j)=> {
    if (i==0) {

    } else {
        return MULTI=MULTI*i
    
    }
    
 }
 )
  console.log("Total value"   ,MULTI);

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

 
 









    


 
 


 
 
 
