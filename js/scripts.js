 //Task 1
function sumOne(num1,num2){
  var sum = 0;
  while (num1<=num2){
    sum += num1;
     num1++;
  }
console.log('Сума чисел від 1 до 3 = ' + sum);
}
sumOne(1,3);

 //Task 2
 function sumTwo(num1,num2){
   var sum = 0;
   while (num1<=num2){
     sum += num1;
      num1++;
   }
 console.log('Сума чисел від 20 до 220 = '+ sum);
 }
 sumTwo(20,220);

//Task 3
 function evenNum(num1,num2){
   console.log( "Всі парні числа від 1-20 з continue " );
   for(var i=num1 ; i<=num2 ; i++){
     if (i%2 === 1) continue;
     console.log(i +' ');
 }
}
 evenNum(1,20);

 //Task 4
 function evenNum2(num1,num2){
 console.log( "Всі парні числа від 1-20 " );
  for(var i=num1 ; i<=num2 ; i++){
    if (i%2 === 0){
     console.log(i +' ');
    }
  }
 }
evenNum2(1,20);

 //Task 5
 function oddNum(num1,num2){
  console.log( "Всі непарні числа від 10-30 " );
   var i= num1;
    while (i<=num2){
     if (i%2 === 1){
      console.log(i +' ');
       }
      i++;
  }
 }
 oddNum(10,30);

//Task 6
 function birdNum(num1,num2){
  console.log( "Числа від 1-5 ,з виходом коли день народження " );
  var i = num1;
  for (i=1; i<=num2;i++){
    if (i == 6)break;
    else{
       console.log(i +' ');
    }
   }
}
birdNum(1,15);

//Task 7
function codeWhile(){
  console.log('Рельтат використовючи while замість for');
 var i = 0;
  while (i < 5){
  console.log('number '+i+'  =)');
  i++;
  }
 }
codeWhile();

//Task 8
function number100(){
  console.log('Завдання з prompt');
		var i = prompt("Type number bigger than 100!");
    if (isNaN(i) === false){
      while (i < 101 || isNaN(i) ){
      i = prompt("Type number bigger than 100!");
      }
    }
    else if (isNaN(i)){
      while (isNaN(i) || i < 101){
      i = prompt("Type number bigger than 100!");
       }
      }
  console.log('Number is ' + i);
}
number100();

//Task 9
function number100do(){
  console.log('Завдання з prompt');
		var i = prompt("Type number bigger than 100!");
    if (isNaN(i) === false){
      do{
        i = prompt("Type number bigger than 100!");
      }
      while (i < 101 || isNaN(i) )
    }
    else if (isNaN(i)){
      do{
      i = prompt("Type number bigger than 100!");
      }
      while (isNaN(i) || i < 101)
      }
  console.log('Number is ' + i);
}
number100do();

//Task 10
function showFor (){
  var num = prompt('Type numbers of line of #');
  var j= '#';
 for (var i=0; i < num; i++){
   console.log(j);
   var j = j + '#';
 }
}
showFor();
