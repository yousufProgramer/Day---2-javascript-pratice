// ****************** Logical Operators

const time = 2;
const time2 = 3;
if(time == 8 && time2 == 9){
    console.log('breakfast')
}
if(time == 10 && time2 == 12){
    console.log('Reading')
}
if(time == 12 && time2 == 1){
    console.log('Resting')
}
if(time == 1 && time2 == 2){
    console.log('Eating')
}
if(time == 2 && time2 == 3){
    console.log('sleeping')
}else{
    console.log('')
}


/////// logigal or ||

let  a = 10;
let b = 20;

if(a == 10 || b > 20){
    console.log('right type')
}else{
    console.log('Wrong type');
}

///// if condition 

let age = 120;
if (age < 18){
    console.log('Unadult');
}else if(age == 18){
   console.log('adult');
}else if(age >18 && age < 30){
   console.log('Young Man');
}else if(age > 40 && age < 50){
    console.log('unyoung man');
}else if(age > 50 && age < 80){
    console.log('old man');
}else{
    console.log('Your death');
}


