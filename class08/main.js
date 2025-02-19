
// click이벤트로 
/* 
*/
 
// console.log('안녕'); 
// 변수 variable
// 자바스크립트 변수 정의 방법 3가지 (var, let, const)


// web안에서 버그 찾을 때 쓰는 태그
// const nickName = '아콩';
// const realname = '조아영';
// const age = 25;

// 변수를 끼워넣기 (보간법, interpolation) => 빽팁 안에 ${} 
// console.log( `안녕 나는 ${nickName}이야 내 원래 이름은 ${realname}이고 나의 나이는 ${age}이야` );


// = 할당 연산자 
// === 비교 연산자
// ! 부정 연산자

/* 데이터 유형(type) 8가지 */
// 1. 문자 (string) ''
const hello = '안녕';

// 2. 숫자 (number)
const num = 100;

// 3. 불린 (boolean) true / false
const happy = true;


/* 조건문 */
// const name = prompt('너 이름이 뭐니?');
/*
if( name === '조아영' ){

    console.log( '환영합니다' );
}
*/






/*

hamburger를 클릭했을 때 offcanvas 메뉴가 왼쪽에서 오른쪽으로 나온다.

*/

// 1. hamburger를 클릭했을 때,
// 2. offcanvas의 css를 수정,
const burger = document.querySelector('.hamburger');
const canvas = document.querySelector('.offcanvas');
let 오픈 = false;
   // toggle
   // const(불변) let(허용))



/* burger.addEventListener('click',()=>{
    if(오픈 === false){
        canvas.style.transform = 'translateX(0)' 
    }
    else{
        canvas.style.transform = 'translateX(100%)'
    }

    오픈 = !오픈

    /* 사용자가 'hamburer' btn 눌렀을 때 나오는 코드 */
    // canvas.style.transform = 'translateX(0)'    
    /* 들어가는 코드 */
    // canvas.style.transform = 'translateX(100%)'


    // console.log( '나 클릭했어!!!' );}) */




// css에 코드 입력! => .offcanvas.active{transform: translateX(0);}
// 3. offcanvas 메뉴에 active 클래스를 넣거나 빼거나

burger.addEventListener('click',()=>{
    
    canvas.classList.toggle('active');

    /*
    if(오픈 === false){
        canvas.classList.add('active');
    }
    else{
        canvas.classList.remove('active');
    }
    오픈 = !오픈
*/

})

// 화살표 함수 [()=>{]
// burger.addEventListener('click',()=> canvas.classList.toggle('active'))


// gsap 웹사이트에서 코드 html에 복붙 ! 
// 빨간 상자를 오른쪽 100px 이동

gsap.to('.box',{duration:3, x:100, rotate:360})














