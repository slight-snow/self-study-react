// 원래는 require() 내부에 경로로 입력을 해줘야하는데,
// npm install 을 통해 패키지를 설치한 다음 경로가 아닌 String 으로 입력해주면
// 자동으로 node_modules 폴더 내부에서 일치하는 패키지를 찾는다.

const randomColor = require('randomcolor');

const colorA = randomColor().toUpperCase();
const colorB = randomColor().toUpperCase();
const colorC = randomColor().toUpperCase();

console.log(colorA, colorB, colorC);