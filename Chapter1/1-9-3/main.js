const animals = {
    cat: 'にゃー',
    dog: 'わんわん',
    bird: 'ちゅんちゅん',
    lion: 'がおー',
    elephant: 'ぱおーん'
}
for (const k in animals) {
    console.log(`${k}は「${animals[k]}」と鳴きます`)
}


// const animals = {
//     cat: 'にゃー',
//     dog: 'わんわん',
//     bird: 'ちゅんちゅん',
//     lion: 'がおー',
//     elephant: 'ぱおーん'
// };
// Object.keys(animals).forEach(k => {
//     console.log(`${k}は「${animals[k]}」と鳴きます`)
// });


// const animals = {
//     cat: 'にゃー',
//     dog: 'わんわん',
//     bird: 'ちゅんちゅん',
//     lion: 'がおー',
//     elephant: 'ぱおーん'
// };
// Object.values(animals).forEach(value => {
//     console.log(value);
// });