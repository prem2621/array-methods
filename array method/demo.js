            //  map

// const number = [2,3,5,7,89,4]
// console.log(number);
// const upnumber = number.map((hello)=>{
//     return hello +23
// })
// console.log(upnumber);

// --------------------------------------------------------

          //   filter

//  const number =[2,45,67,89,55,434,66,67]        
//  console.log(number);
//  const upnumber = number.filter((hello)=>{
//     return hello%2==0
//  })
//   console.log(upnumber);
  
// --------------------------------------------------------

            //   reduce

//  const number = [2,45,67,79,45,6,67]    
//  console.log(number);
//  function reducefunc(a,b){
//     return a+b
//  }
// const total = number.reduce((reducefunc))
//     console.log(total);
    
// --------------------------------------------------------

            //    reduceright

// const arr =[[1,2],[4,6],[7,8],[9,5]]
// console.log(arr);
// let reducert = (result,current)=>result.concat(current)           
// const final =arr.reduceRight(reducert)
// console.log(final);

// --------------------------------------------------------

                //   push

//  const ration = ["prem","kumar"]
//  console.log(ration);
//  ration.push("kritty")
//  console.log(ration);
//  ration.push("shetty")
//  console.log(ration);
//  const hello = ration.push("love")
//  console.log(hello);
 
 // --------------------------------------------------------
 
                // pop

// const ration = ["prem","kumar","kritty","shetty"] also we use number
// console.log(ration);
// ration.pop()
// console.log(ration);

 // --------------------------------------------------------
                

            //   unshift

//  const relation =["prem","kumar"]
//  console.log(relation);
//  relation.unshift("kritty")
//  console.log(relation);
 
// --------------------------------------------------------

            //  shift

//  const relation = ["prem","kumar","kritty","shetty"]
//  console.log(relation);
//  relation.shift()
// console.log(relation);
// relation.shift()
// console.log(relation);

// --------------------------------------------------------   

        //    slice

// const animals = ["dear","dog","camel","cat","elephant"]  
// console.log(animals.slice(2));
// console.log(animals.slice(2,4));
// console.log(animals.slice(1,-1));
// console.log(animals.slice(2,-2));
// console.log(animals.slice());
// console.log(animals.slice(-2));
// console.log(animals.slice(-2,4));

 // -------------------------------------------------------- 
 
            // splice

//  const weeks = ["sun","tues","thur","sat"]           
// console.log(weeks);
// weeks.splice(1,0,"mon")
// console.log(weeks);
// weeks.splice(3, 0, "wed");
// console.log(weeks);
// weeks.splice(5, 0, "fri");
// console.log(weeks);
// weeks.splice(0, 0, "Days");
// console.log(weeks);
// weeks.splice(4,4);
// console.log(weeks);

// -------------------------------------------------------- 

        //    concat

//  const js = ["react","angular"] 
//  console.log(js);
// const add = js.concat("vuejs")
// console.log(add);
// const add1 = add.concat("mongoDb")
// console.log(add1);

// -----------------------------------------------------

          //   sort

// const number = [34,56,78,23,67,90,54,4,5,8,345]  
// console.log(number);
// number.sort()
// console.log(number);
// const results = [
//     {name : "prem",marks :60},
//     {name : "kumar",marks :40},
//     {name : "kritty",marks :80},
//     {name : "shetty",marks :20},
// ]
// results.sort((res1,res2)=> res2.marks-res1.marks)
// console.log(results);

// ----------------------------------------------------

            // reverse

//  const number = ["prem","kumar","kritty"] [3,4,5,78,5,35,6]also use number
//  console.log(number);
//  number.reverse()
//  console.log(number);
 
// -----------------------------------------------------

            //   some

// const number = [50,36,23,67,89,45,34]  
// console.log(number);
// let value = number.some((val)=> val<1
// )
// console.log(value);

// ------------------------------------------------------

            //  every

//  const number = [34,5,66,7,89,76,4,43]     
//  console.log(number);
//  let value = number.every((val)=>val<23)
//  console.log(value);
//  if anyone false  all are false
      
// -----------------------------------------------------

            // find

//  const number = [20,45,6,7,3,46,7,32]   
//  console.log(number);
//  let value = number.find((val)=>val>45)
//  console.log(value);
//  namma kudukura condition first ethu satisfy pandrathu
 
// ------------------------------------------------------         

            //  findIndexof

//   const number = [20,45,6,7,3,46,7,32]   
//  console.log(number);
//  let value = number.findIndex((val)=>val>45)
//  console.log(value);
           
// -------------------------------------------------------

            //    include
            
//  const arr = [10,"Hello","HELLO","10",'bye']
//  console.log(arr);
//  console.log(arr.includes("Hello"));
//  kodukura value irukkanu k sensitive
            
// --------------------------------------------------------

                // lastindex

// const number = [23,45,65,7,78,9,76,53]      
// console.log(number);
// console.log(number.lastIndexOf(7));

// --------------------------------------------------------

                //    at

//  const number =[23,4,545,7668,74,335,32,4,4,4,4]
//  console.log(number);
//  console.log(number.at(9));
 
// -------------------------------------------------------- 

            //    join

//  const vehicle = ["bike","car","larry","wheel"] 
//  console.log(vehicle);
//  console.log(vehicle.join("-"));
//  console.log(vehicle.join("&"));
//  console.log(vehicle.join(""));
//  console.log(vehicle.join(" "));
//  console.log(vehicle.join("4"));
 
//  -----------------------------------------------------  

            //   fill

// const arr = [1,2,3,4,5,6,7]   
// console.log(arr);
// console.log(arr.fill(23,4,5));
// console.log(arr.fill("hello"));
// console.log(arr.fill(""));
// console.log(arr.fill("   "));
// console.log(arr.fill(2,0,4));
// console.log(arr.fill(21,0,6));
// console.log(arr.fill("hello", 3));

// -------------------------------------------------------
           
        //    flat

//  const arr = [1,3,45,[6,[4,5],5],[3]]       
//  console.log(arr);
//  console.log(arr.flat());
//  console.log(arr.flat(2));
 
//  --------------------------------------------------------

          //flatmap

//  const product = ['car,bike','sofa,bed','shirt,pant']
//  console.log(product.flatMap(a=>a.split(',')));

//------------------------------------------------------------
          
          


    // optional changing operator

// const person = {
//     name : "prem",
//     age : 21,
//     city : "trichy",
//     country : "india"
// }

// const city = person.address?.city
// console.log(city);

// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// const str = "hello everyone  iam fine what do you do on yesterday morning i dont know"

// const charCount = {}

// for(let char of str){
//     if(charCount[char]){
//         charCount[char] +=1
//     }
//     else{
//         charCount[char] =1
//     }
// }
// console.log(charCount);


// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// const arr = [1,2,3,4,5]

// for(let i in arr){
//     console.log(i); 
// }


// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


//                   padEnd,padStart
// const str = '1'
// console.log(str.padStart(10,'0'))
// const Estr = "1";
// console.log(Estr.padStart(10));
// const strs = '1'
// console.log(strs.padEnd(10,'0'));
// const stri = "prem";
// console.log(stri.padStart(12, "kritty"));
// const strin = "prem";
// console.log(strin.padStart(6, "kritty"));
// const Estri = "prem";
// console.log(Estri.padEnd(12, "kritty"));
// const Estrin = "prem";
// console.log(Estrin.padEnd(6, "kritty"));

// const str = "Name :";
// console.log(str.padEnd(15, "   rose"));
// const Age = "Age :";
// console.log(Age.padEnd(10, "    1"));
// const Address = "Address :";
// console.log(Address.padEnd(15, "jaffna"));


// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// const str = 'Hello Rose'
// console.log(str.split("o"));
// console.log(str.split("o",2));
                   // ("o")==> seperator ||||  ("2")====> limit
// const strs = "hello rose"
// console.log(strs.split('',7));


// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


// const str = 'hi Rosa! Rosa!'
// console.log(str.lastIndexOf('Rosa',12));
// const strs = "hi Rosa! Rosa!";
// console.log(strs.lastIndexOf("Rosa", 6));
// const strss = "hi Rosa! Rosa!";
// console.log(strss.lastIndexOf("Rosa", 2));
// const str = "hi Rosa! Rosa!";
// console.log(str.indexOf("Rosa"));




// ------------------------------------------------------------------------------------------------------------------------------------------

                   //iteration array

// const num = [23,35,56,8,89,4,43]
// let text = "";
// num.forEach(myfunc)

// function myfunc(val){
//         text += val + ", "
// }
//  document.getElementById("demo").innerHTML = text

// -------------------------------------------------------------------------------------------------------------------------------------------
                 
                 //get array string into index property value

// const fruit = ["apple","bannana","water","melon","fruit"]

// const key = fruit.keys()
// let text = ""
// for(let x of key){
//     text += x + ", "
// }
//  document.getElementById("demo").innerHTML = text

// -------------------------------------------------------------------------------------------------------------------------------------------

                     //entries() returns an Array Iterator object with key/value pairs

// const fruit = ["apple","bannana","water","melon","fruit"]

// const frt = fruit.entries()
// let text = ""
// for(let x of frt){
//         text += x + ", "
// }

//  document.getElementById("demo").innerHTML = text

// -------------------------------------------------------------------------------------------------------------------------------------------


                 
 








