// #### FizzBuzzを解いてみよう

// - ‘3’ で割り切れる場合は「Fizz」を数の代わりに表示します。
// - ‘5’ で割り切れる場合は「Buzz」を数の代わりに表示します。
// - ‘3’ と ‘5’ の両方で割り切れる場合（すなわち ‘15’ で割り切れる場合）は「FizzBuzz」を数の代わりに表示します。
// 上記のいずれにも当てはまらない数の場合、数をそのまま表示します。

// if文

// let num = 10;

// if(num % 3 === 0 && num % 5 === 0) {
//     console.log("FizzBuzz");
// } else if(num % 5 === 0) {
//     console.log("Buzz")
// } else if (num % 3 === 0) {
//     console.log("Fizz");
// } else {
//     console.log(num);
// }

// switch文

// for(let i = 1; i < 100; i++) {
//     switch(true) {
//         case (i % 3 === 0 && i % 5 === 0):
//             console.log("FizzBuzz");
//             break;
//         case (i % 5 === 0):
//             console.log("Buzz");
//             break;
//         case (i % 3 === 0):
//             console.log("Fizz");
//             break;
//         default:
//             console.log(i);
//     }
// }


// ループ

// for(let i = 1; i < 100; i++) {
//     if(i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if(i % 5 === 0) {
//         console.log("Buzz");
//     } else if(i % 3 === 0) {
//         console.log("Fizz");
//     } else {
//         console.log(i);
//     }
// }

/*===

要件追加
FizzBuzzの仕様が変わって3が2になり5が4になり6が追加された。という想定のものを現在のFizzBuzzをもとに修正してみてください。
追加の要件として6の時は必ずHogeと出力するとします。

===*/

for(let i = 1; i < 100; i++) {
    if(i % 2 === 0 && i % 4 === 0 && i % 6 === 0) {
        console.log("FizzBuzz");
    } else if(i % 6 === 0) {
        console.log("hoge");
    } else if(i % 4 === 0) {
        console.log("Buzz");
    } else if(i % 2 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}