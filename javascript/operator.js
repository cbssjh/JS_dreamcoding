// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2);
//back tick 
console.log(`string literals: 
''''
1 + 2 = ${1 + 2}`);


// 2. Numeric operators
console.log(1+1); // add
console.log(1-1); // substract
console.log(1/1); // divide
console.log(1*1); // multiply
console.log(1%1); // remainder
console.log(1**1); // exponentiation


// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`)
const postIncrement = counter++;
// PostIncrement = counter;
// counter = counter + 1;
// decrement도 있다.


// 4. assginment operators
let x = 3;
let y = 6;
x += y; // x = x + y;

// 5. Comparison operators
console.log(10 < 6)
console.log(10 <= 6)
console.log(10 > 6)
console.log(10 >=6)


// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or) 진짜 중요 포인트 -> or연산자는 처음으로 true가 나오면 거기서 멈춘다. 하나라도 true면 true니깐ㅎㅎ
// 그래서 expression 이나 함수처럼 (computation이 heavy한) 호출하거나 제일 앞에 두게 되면 안되겠지. 그래서 제일 뒤로 뺴라 효율!
console.log(`or: ${value1 || value2 || check()}`);

// && (and) 똑같이 false가 나오면 거기서 끝남 왜? 다 false니깐 
console.log(`or: ${value1 && value2 && check()}`);

// 엔드는 null check할때도 엔드를 많이 씀
// often used to compress long if-statement
// nullableObject && nullableObject.something

function check(){
    for (let i = 0; i < 10; i++){
        //wasting time
        console.log('oh no');
    }
    return true;
}

// ! (not)
console.log(!value1);


// 7. Equlity
const string5 = '5';
const num5 = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion , 코딩할때 타입을 신경쓰는 이 스트릭트 이퀄리티를 사용하자!
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// object equality by referece 레퍼런스 값이 같은지를 보는거다!!
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);


// 8. Conditional operators: if
// if, else if, else
const name = 'jun';
if (name === 'ja'){
    console.log('s');
} else if (name === 'coder'){
    console.log('s');
} else {
    console.log('unknown');
}


// 9. Ternary operator : ?
// condition ? value1 : value2; 트루면 왼쪽걸, 아니면 오른쪽걸 출력
console.log(name === 'elite'? 'yes' : 'no');


// 10. Switch statment -> 비교해서 맞으면 실행, 쭉쭉쭉, 반복되게 붙여서(묶어서) 할 수도 있음.
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS
const browser = 'ie';
switch (browser){
    case 'ie':
        break;
    case 'chrome':
    case 'fire':
}


// 11. Loops
// while loops, while the condition is truthy, body code is executed.
let i = 3;
while (i>0){
    console.log(`while: ${i}`);
    i--;
}

//do while loop, 블럭을 실행한다음에(대괄호 안을 뜻함) 조건이 맞는지 아닌지를 검사
do {
    console.log(`do while: ${i}`);
    i--;
} while (i>0);

//for loop, for(begin; condition; step)
for (i = 3; i > 0; i--){
    console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
    // incline variable declaration
    console.log(`inline variable for : ${i}`);
}

// nested loops

//break, continue도 있다!