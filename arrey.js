let arr=[1,2,3,4,5,6,7,8,9]

 let a= arr.push(99)
 console.log(a);
 
arr.shift()

console.log(arr);



let n=4
for (let i = 1; i <= n; i++) {
   let str=""
   for (let j = 1; j <= n-i; j++) {
   str+=" "
    
   }
   for (let k = 1; k <= i; k++) {
    if (k==1||k==i ) {
        str+="* "
    }else{
str+="  "
    }
     
   }
    console.log(str);
}

for (let i = n-1; i >= 1; i--) {
   let str=""
   for (let j = 1; j <=n-i ; j++) {
    str+=" "
    
   }
   for (let k = 1; k <=i; k++) {
    if (k==1||k==i ) {
        str+="* "
    }else{
str+="  "
    }
   }
   console.log(str);
   
    
}


let n= 15

for(let i=2;i<n;i++){
    let isPrime=true
    for(let j=2; j<i;j++){
       if (i%j==0) {
         isPrime=false
        break
       }
    }

    if (isPrime===true) {
        console.log(j);
        
    }
}

let n=123
n=n.toString()
let sum=0
for (let i = 0; i <=n.length; i++) {
    let d=Number([i])
    sum+= d**3
    
}
 console.log(sum);

let num=9475
let sum=0
num=num.toString()
for (let i = 0; i <num.length; i++) {
    let d=Number(num[i])
    sum+=d**3
}
if(sum==num){
    console.log(true);
    
}else{
console.log(false);

}

let num =121
let ispallidrome=true
num=num.toString()
for (let i = 0; i <num.length; i++) {
    if (num[i]!==num[num.length -1 -i]) {
        ispallidrome=false
        break
    }
}

    if (ispallidrome===true) {
        console.log("yes");
        
    }else{
        console.log("no");
        
    }



let num =12111
num=num.toString()
let ispallidrome=true
    for (let i = 0; i <num; i++) {
        
        if (num[i]!==num[num.length -1-i]) {
            ispallidrome=false
            break
            
        }
        
    }

if (ispallidrome) {
    console.log(true);
    
}else{
    console.log(false);
    
}

let arr=[1,2,3,4,5,6,7,8,[111,121,],[[2,[2,[404,9,[403,[12121]]]]]]]

let val = arr.fill(-4,0,5)
// fill(-4,0,5) 1st number kon sa number daalna hai ,2nd strat kha se krna hai.,last end kha krna hai
console.log(val);

let val1=arr.includes(-1)
console.log(val1); //  ye true or false return krta hai agar wo number present hai nhi


let val1=arr.slice(1,1)
let val1=arr.slice(-5,-1)
console.log(val1); //isme last value print nhi hot hai  aur isme last value hai 8

arr.splice(-5,1)
console.log(arr); ye orijnal arrey me changes krta hai 
let arre=arr.splice(1,3,true)

console.log(arre);
console.log(arr);

let arr2d=[[1,2,3],[4,5,6],[7,8,9]]

for (let i = 0; i < arr2d.length; i++) {
    let str=""
   
    for (let j = 0; j < arr2d[i].length; j++) {
        
        // console.log(arr2d[i][j]);
        
       str+=arr2d[i][j]+ "  "
    //    str+="* "
        
    }
    console.log(str);
    
}


for (const element of arr2d) {
    
    let str=""
    for (const some of element) {
        
        console.log(some);
        
        // str+=some +" "

    }
    // console.log(str);
    
}



let arr= [1,2,3,4,5,5,6,7]
let d=5
let indx=0
for (let i = 0; i <arr.length; i++) {
    if (d===arr[i]) {
        indx=i
    }
    
    
}
console.log(indx);


lcm

let a=12
let b=12
let lcm
for (let i = Math.max(a,b); ; i++) {
    if (i%a===0 && i%b===0) {
        lcm=i
        break
    }
    
}
console.log(lcm);

let arr= [1,25,37,44,51,15,96,7]
// let strt=arr[0]
let max=-Infinity
let secondMax=-Infinity
for (let i = 0; i < arr.length; i++) {
   
if (secondMax>arr[i]) {
    
}
    
}
console.log(secondMax);



let arr=[5,15,-10,30]

let sum =0
let sp=-1
for (let i = 0; i < arr.length; i++) {
    sum+=
    
}

let a=0
let b=1
let n=7
console.log(a);
console.log(b);



for (let i = 2; i < n; i++) {
 let c = a+b
 console.log(c);
 a=b
 b=c
}

// Find the largest of three numbers using if-else.





