'use strict';

function smth(num) {
    if (isNaN(num)) {
        alert("Введенно не число, мне такое не нравится");
    }
   else
   return num+1;
}

function summ(First, Second) {
   let sum;
    if (isNaN(First)) {
        return ("a - не число");
    }
    else {
        if (isNaN(Second)) {
            return ("b - не число");
        }
        else
        {
            sum=First+Second;
            return (console.log('sum=',sum)
            );
        }
    }
}

function Array() {
    let Array = [30, 20, 15, "Who", "Answer", 100, "Number", 5, 90];
    console.log('Начальный массив: ');
    console.log(Array);
    let NewArray = Array.map((value) =>isNaN(value) ? value = 0 : value = value*value )
    console.log('Измененный:');
    console.log(NewArray);
}