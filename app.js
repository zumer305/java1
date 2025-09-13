console.log("Hello!");
console.log("zumer");

// operation
let a=1;
let b=1;
console.log("sum is",a+b);


// Template literals
let x=10;
let y=20;
console.log("(console ,)The total price of x and y is:" , (x+y) , " Ruppes.");
let z= "(zVariable +)The total price of x and y is:" + (x+y) + " Ruppes."
console.log(z);

// backticks
console.log(`(Backticks escp)The total price of x and y is: ${x+y} Ruppes.`);


// arithematic operators
let e=10;
let f=5;
// binary
console.log(e+f);
console.log(e-f);
console.log(e*f);
console.log(e/f);
console.log(e%f);

// unary e++
console.log(e++);
console.log(++e);


// comparision
console.log(e<f);
console.log(e>f);



// === 
let r=2;
let s="2";
console.log(r==s);
console.log(r===s);

// ascii--unicode
// A=41
// a=61


// if statement
let age=23;
if(age>=18)
    console.log("You can vote");

let fname="zumer";
if(fname=="zumer")
    console.log(`Welcome ${fname}`);



// traffic lights --multipleif statement
let color="red";
if(color==="red")
    console.log("Slow down");

if(color==="yellow")
    console.log("Ready steady");

if(color==="green")
    console.log("Go");


// traffic lights --elseif statement
let color1="yellow";
if(color1==="red")
    console.log("Slow down");

else if(color1==="yellow")
    console.log("Ready steady");

else if(color1==="green")
    console.log("Go");


// traffic lights --else statement
let color2="pink";
if(color2==="red")
    console.log("Slow down");

else if(color2==="yellow")
    console.log("Ready steady");

else 
    console.log("Go-green");


// practice
let size="S";
if(size==="S")
    console.log("price is 50");

else if(size==="M")
    console.log("price is 100");

else if(size==="L")
    console.log("price is 200");
else
    console.log("price is 250");



// nested if-else
    let marks=34;
if(marks>=33)
    if(marks>=80)
        console.log("Grade: Outstanding");
    else
           console.log(" Grade: A+");

else
    console.log("Fail");


// AND operator &&
// T T=T
// F T=F
// T F=F
// F F=F
let m=10;
if((m>1)&&(m<=10))
{
    console.log("pass AND");
}



// OR operator ||
// T T=T
// F T=T
// T F=T
// F F=F
let ma=10;
if((ma>=1)||(ma<=10))
{
    console.log("pass OR");
}




// NOT operator !
// T=f
// F=T
let mark=4;
if(!(mark==5))
{
    console.log("Not Equal")
}



// practice
let str="ap";
if((str[0]=='a')&&(str.length>3))
    console.log("GOOD");
else
    console.log("BAD");













