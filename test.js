// q1
let num=20;
if(num%10==0)
    console.log("Good");
else
    console.log("Bad");


// q2
// let n=prompt("Name");
// let age=prompt("age");
// let msj=`${n} is ${age} years old`;
// alert(msj);

// q3
let quater=1;
switch(quater){
    case 1: 
    console.log("jan,feb,mar");
    break;
    case 2:
        console.log("ap,may,june");
        break;
        case 3:
            console.log("july,august,sep");
            break;

            case 4:
                console.log("oct,nov,dec");
                break;

                default:
                    console.log("noo quater");
}


// q4
let str="Applee";
if(((str[0]=="A")||(str[0]=="a"))&&(str.length>5)){
    console.log("Golden");
}
else{
    console.log("Not Golden");
}

// q5
let a=2;
let b=3;
let c=4;
if(a>b){
    if(a>c) console.log(a);
    else console.log(c);
}
else{
    if(b>c) console.log(b);
    else console.log(c);
}

// q6--remainder
let num1=1234;
let num2=21;
if((num1%10)===(num2%10)){
    console.log("same");
}
else{
    console.log("not same");
}