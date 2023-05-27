const getCry = animal => {
    if (animal === 'cat') {
        return 'にゃー';
    } else if (animal === 'dog') {
        return 'わんわん';
    } else if (animal === 'bird') {
        return 'ちゅんちゅん';
    } else if (animal === 'lion') {
        return 'がおー';
    } else if (animal === 'elephant') {
        return 'ぱおーん';
    } else {
        return '......';
    }
};

console.log(getCry('elephant'));


// const getCry = animal => {
//     switch (animal) {
//         case 'cat':
//             return 'にゃー';
//         case 'dog':
//             return 'わんわん';
//         case 'bird':
//             return 'ちゅんちゅん';
//         case 'lion':
//             return 'がおー';
//         case 'elephant':
//             return 'ぱおーん';
//         default:
//             return '......';
//     }
// };

// console.log(getCry('elephant'));


// const cry = animal => {
//     switch (animal) {
//         case 'cat':
//             console.log('にゃー');
//         case 'dog':
//             console.log('わんわん');
//         case 'bird':
//             console.log('ちゅんちゅん');
//         case 'lion':
//             console.log('がおー');
//         case 'elephant':
//             console.log('ぱおーん');
//         default:
//             console.log('......');
//     }
// };
// cry('dog');

// const cry = animal => {
//     switch (animal) {
//         case 'cat':
//             console.log('にゃー');
//             break;
//         case 'dog':
//             console.log('わんわん');
//             break;
//         case 'bird':
//             console.log('ちゅんちゅん');
//             break;
//         case 'lion':
//             console.log('がおー');
//             break;
//         case 'elephant':
//             console.log('ぱおーん');
//             break;
//         default:
//             console.log('......');
//     }
// };

// cry('dog');