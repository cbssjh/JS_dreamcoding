// 1. Use strict
// added in ES 5
// use this for Valina Javascript
'use strict';

// 2. Variable 변수
// let (added in ES6)
{
    let name = 'jun';
    console.log(name);
    name = 'hle'
    console.log(name);
}

// var (don't ever use this)
// var hoisting (move declaration from bottom to top)
//호이스팅이 뭐냐? 어디에 선언했냐에 상관없이 항상 제일 위로 선언을 끌어 올려주는 것을 말함
// and it has no block space (블럭으로 묶는게 의미 없게 만드는 놈)

//3. Constant, r(read only)
// Note! 
// Immutable data types : primitive types, frozen objects (i.e. object.freeze())
// Mutable data types : all objects by default are mutable in JS
// use const whenever possible
// only use let if variable needs to change
// 값을 선언함과 동시에 값을 더 변경할 수 없게 포인트를 lock한것
// favor immutable data type always for a few reasons:
// - security, thread safety, reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable types
// primitive(더 이상 작은 단위로 나눠질수없는 한가지 아이템), single item : number, string, boolean, null, undefiedn,symbol_
// object, box container
// function, first-class function : 우리 프로그래밍 언어는 이게 지원이된다 라는 말은 이 프로그래밍 언어에서는 function도 다른 데이터 타입처럼
// 변수에 할당이 가능하고 함수의 parameter(인자)로도 전달이 되고, 함수에서 return 타입으로도 function을 return하는게 가능
const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`)
console.log(`value: ${size}, type: ${typeof size}`)

// ` <- called back tick
// number - speicla numeric values: infinity, -infinity, NaN
// dom 요소를 js 포지션을 바꾸거나 할때, 연산할때 vaild한지 아닌지 확인할때 좋고, 

// BigInt 제일 큰 숫자에 n을 붙이면 BigInt라고 알려줌 (별로 신경안써도됨)


// string
// js에선 길이 상관없이 다~ string이다
// back tick(`)을 쓰면 일일이 ''로 감싸줄필요없이 +가 있건 ,이 있건 한번에 묶어줄 수 있어 편하다


// boolean
// false: 0, null, undefined, NaN ''
// true: any other value

// null
// 너는 아무것도 아니야라고 확실하게 지정해줄때 let nothing = null;

// undefined
// 이건 아무것도 아닌 상태, 하지만 지정해줄수도 있고 그냥 let x;해도 가능

//symbol, create unique identifiers for objects
// 밑에 보면 심볼은 고유한 식별자를 만들때 사용한다. ->주어지는 스트링에 상관없이 고유한 식별자를 만들때
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
// symbol.for 도 있다, 그건 같게 해준다

//object, real-life object, data structure
const box = {name:'x', age: 20};
box.age

// 5. Dyanamic typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0));
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // error 발생, 스트링으로 이해하고 이렇게 쓰면 error



