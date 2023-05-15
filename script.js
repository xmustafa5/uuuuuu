
   // navbar resposave
   

   
   let myMediaQuery = window.matchMedia('(min-width: 600px)');
   let myMediaQueryMax = window.matchMedia('(max-width: 600px)');
   const init1= function (){
    
    if (window.location.href.includes('#prog1') && window.innerWidth > 600
    ){
      window.scrollTo(1500,1500)
      change.prog11.call()
    }else if(window.location.href.includes('#prog2') && window.innerWidth > 600){
      window.scrollTo(1500,1500)
      change.prog22.call()
    } else if(window.location.href.includes('#prog3') && window.innerWidth > 600){
      window.scrollTo(1700,1700)
      change.prog33.call()
    } else if(window.location.href.includes('#prog4') && window.innerWidth > 600){
      window.scrollTo(1700,1700)
      change.prog44.call()
    }
    else if(window.location.href.includes('#prog5') && window.innerWidth > 600){
      window.scrollTo(1700,1700)
      change.prog55.call()
    }
    else if(window.location.href.includes('#prog6') && window.innerWidth > 600){
      window.scrollTo(1800,1800)
      change.prog66.call()
    } else if(window.innerWidth < 600 && window.location.href.includes('#prog1')){
      window.scrollTo(1300,1300)
      change.prog11.call()
    } else if(window.location.href.includes('#prog2') && window.innerWidth < 600){
      window.scrollTo(1500,1500)
      change.prog22.call()
    } else if(window.location.href.includes('#prog3') && window.innerWidth < 600){
      window.scrollTo(1550,1550)
      change.prog33.call()
    } else if(window.location.href.includes('#prog4') && window.innerWidth < 600){
      window.scrollTo(1670,1670)
      change.prog44.call()
    }
    else if(window.location.href.includes('#prog5') && window.innerWidth < 600){
      window.scrollTo(1800,1800)
      change.prog55.call()
    }

    }
   
  //  function wd(){
  //   if(window.innerWidth < 600 && window.location.href.includes('#prog1') ){
  //     window.scrollTo(1300,1300)
  //   } 
  //  }
  //  window.addEventListener('resize',init1)
  //  wd();
 window.onload=init1  


let mune = document.getElementById("mune")
let btn = document.getElementById("btn")
let nava = document.querySelector("aa")
let icon = document.querySelector(".fa-solid")


  btn.addEventListener('click', cc )

  function cc (){
      
      mune.classList.toggle("active");
      icon.classList.toggle("fa-xmark");
      // nava.classList.toggle('aa')
 }







  //navbar change
 let a1 = document.getElementById('a1')
 let a2 = document.getElementById('a2')
 let a3 = document.getElementById('a3')
 let a4 = document.getElementById('a4')
 let a5 = document.getElementById('a5')
 let animation = document.querySelector('.animation')
 
 a1.addEventListener('click', aa1)
 a2.addEventListener('click', aa2)
 a3.addEventListener('click', aa3)
 a4.addEventListener('click', aa4)
 a5.addEventListener('click', aa5)

   
 function aa1 () {
     animation.classList.add('animation1')
     animation.classList.remove('animation2')
     animation.classList.remove('animation3')
     animation.classList.remove('animation4')
     animation.classList.remove('animation5')
 }
 function aa2 () {
    animation.classList.add('animation2')
    animation.classList.remove('animation1')
    animation.classList.remove('animation3')
    animation.classList.remove('animation4')
    animation.classList.remove('animation5')

 }
 function aa3 () {
    animation.classList.add('animation3')
    animation.classList.remove('animation1')
    animation.classList.remove('animation2')
    animation.classList.remove('animation4')
    animation.classList.remove('animation5')

 }
 function aa4 () {
    animation.classList.add('animation4')
    animation.classList.remove('animation1')
    animation.classList.remove('animation3')
    animation.classList.remove('animation2')
    animation.classList.remove('animation5')

 }
 function aa5 () {
    animation.classList.add('animation5')
    animation.classList.remove('animation1')
    animation.classList.remove('animation3')
    animation.classList.remove('animation4')
    animation.classList.remove('animation2')

 }

     //qrcode

 let qrcode = document.querySelector('.grMove')
 let qr3 = document.getElementById('grMove3')
 let qr4 = document.getElementById('grMove4')
 let qr5 = document.getElementById('grMove5')
 let qr6 = document.getElementById('grMove6')
 let qr7 = document.getElementById('grMove7')
 let qr8 = document.getElementById('grMove8')
  
 


 

   



 //change

 let change = {
  prog11: function prog11 (){
  // sopace
  space1.classList.toggle('prog11')
  
  space2.classList.remove('prog11')
  space3.classList.remove('prog11')
  space4.classList.remove('prog11')
  space5.classList.remove('prog11')
  space6.classList.remove('prog11')

  //qr
    qr3.classList.toggle('prog1')
    qr4.classList.add('prog1')
    qr5.classList.add('prog1')
    qr6.classList.add('prog1')
    qr7.classList.add('prog1')
    qr8.classList.add('prog1')
    
 //audio remove
   audio7.classList.add('audioshow')
   audio8.classList.remove('audioshow')
   audio9.classList.remove('audioshow')
   audio10.classList.remove('audioshow')
   audio11.classList.remove('audioshow')
   audio12.classList.remove('audioshow')


  
  //add
  pp1.classList.add('ppshow')
  pp2.classList.remove('ppshow')
  pp3.classList.remove('ppshow')
  pp4.classList.remove('ppshow')
  pp5.classList.remove('ppshow')
  pp6.classList.remove('ppshow')
  //remove space
    prog1.classList.add('prog1')
    prog2.classList.remove('prog1')
    prog3.classList.remove('prog1')
    prog4.classList.remove('prog1')
    prog5.classList.remove('prog1')
    prog6.classList.remove('prog1')
   //  grcode addevent
   

 
    },
    prog22: function(){
      
   // sopace
   space2.classList.toggle('prog11')
   space1.classList.remove('prog11')
   space3.classList.remove('prog11')
   space4.classList.remove('prog11')
   space5.classList.remove('prog11')
   space6.classList.remove('prog11')



   //qr
   qr4.classList.toggle('prog1')
   qr3.classList.add('prog1')
   qr5.classList.add('prog1')
   qr6.classList.add('prog1')
   qr7.classList.add('prog1')
   qr8.classList.add('prog1')
  //audio remove 
  audio8.classList.add('audioshow')
  audio7.classList.remove('audioshow')
  audio9.classList.remove('audioshow')
  audio10.classList.remove('audioshow')
  audio11.classList.remove('audioshow')
  audio12.classList.remove('audioshow')
   
   //add  
    pp2.classList.add('ppshow')
   pp1.classList.remove('ppshow')
   pp3.classList.remove('ppshow')
   pp4.classList.remove('ppshow')
   pp5.classList.remove('ppshow')
   pp6.classList.remove('ppshow')

   //remove buttn
     prog2.classList.add('prog1')
     prog1.classList.remove('prog1')
     prog3.classList.remove('prog1')
     prog4.classList.remove('prog1')
     prog5.classList.remove('prog1')
     prog6.classList.remove('prog1')
    //  grcode addevent

     
    },
    prog33: function(){
    // sopace
    space3.classList.toggle('prog11')
    space2.classList.add('prog11')
    space1.classList.add('prog11')
    space4.classList.add('prog11')
    space5.classList.add('prog11')
    space6.classList.add('prog11')

    //qr
    qr5.classList.toggle('prog1')
    qr3.classList.remove('prog1')
    qr4.classList.remove('prog1')
    qr6.classList.remove('prog1')
    qr7.classList.remove('prog1')
    qr8.classList.remove('prog1')
   //audio remove
   audio9.classList.add('audioshow')
   audio8.classList.remove('audioshow')
   audio7.classList.remove('audioshow')
   audio10.classList.remove('audioshow')
   audio11.classList.remove('audioshow')
   audio12.classList.remove('audioshow')
    
    //add
    pp3.classList.add('ppshow')
    pp2.classList.remove('ppshow')
    pp1.classList.remove('ppshow')
    pp4.classList.remove('ppshow')
    pp5.classList.remove('ppshow')
    pp6.classList.remove('ppshow')
    //remove space
      prog3.classList.add('prog1')
      prog2.classList.remove('prog1')
      prog1.classList.remove('prog1')
     prog4.classList.remove('prog1')
     prog5.classList.remove('prog1')
     prog6.classList.remove('prog1')
      //  grcode addevent

    },
    prog44: function(){
      
    // sopace
    space4.classList.toggle('prog11')
    space2.classList.remove('prog11')
    space3.classList.remove('prog11')
    space1.classList.remove('prog11')
    space5.classList.remove('prog11')
    space6.classList.remove('prog11')


    //qr
    qr6.classList.toggle('prog1')
    qr4.classList.add('prog1')
    qr5.classList.add('prog1')
    qr3.classList.add('prog1')
    qr7.classList.add('prog1')
    qr8.classList.add('prog1')
   //audio remove
   audio10.classList.add('audioshow')
   audio8.classList.remove('audioshow')
   audio9.classList.remove('audioshow')
   audio7.classList.remove('audioshow')
   audio11.classList.remove('audioshow')
   audio12.classList.remove('audioshow')
    
    //add
    pp4.classList.add('ppshow')
    pp2.classList.remove('ppshow')
    pp3.classList.remove('ppshow')
    pp1.classList.remove('ppshow')
    pp5.classList.remove('ppshow')
    pp6.classList.remove('ppshow')
    //remove space
      prog4.classList.add('prog1')
      prog2.classList.remove('prog1')
      prog1.classList.remove('prog1')
     prog3.classList.remove('prog1')
     prog5.classList.remove('prog1')
     prog6.classList.remove('prog1')
    //  grcode addevent


   
    },
    prog55: function(){
      
    // sopace
    space5.classList.toggle('prog11')
    space2.classList.remove('prog11')
    space3.classList.remove('prog11')
    space4.classList.remove('prog11')
    space1.classList.remove('prog11')
    space6.classList.remove('prog11')



    //qr
    qr7.classList.toggle('prog1')
    qr4.classList.add('prog1')
    qr5.classList.add('prog1')
    qr6.classList.add('prog1')
    qr3.classList.add('prog1')
    qr8.classList.add('prog1')
   //audio remove
     audio11.classList.add('audioshow')
     audio8.classList.remove('audioshow')
     audio9.classList.remove('audioshow')
     audio10.classList.remove('audioshow')
     audio7.classList.remove('audioshow')
     audio12.classList.remove('audioshow')
 
 
    
    //add
    pp5.classList.add('ppshow')
    pp2.classList.remove('ppshow')
    pp3.classList.remove('ppshow')
    pp4.classList.remove('ppshow')
    pp1.classList.remove('ppshow')
    pp6.classList.remove('ppshow')
    //remove space
      prog5.classList.add('prog1')
      prog2.classList.remove('prog1')
      prog3.classList.remove('prog1')
      prog4.classList.remove('prog1')
      prog1.classList.remove('prog1')
      prog6.classList.remove('prog1')

        //  grcode addevent


   
 
    },
    prog66: function(){
      
  // sopace
  space6.classList.toggle('prog11')
  space2.classList.remove('prog11')
  space3.classList.remove('prog11')
  space4.classList.remove('prog11')
  space5.classList.remove('prog11')
  space1.classList.remove('prog11')


  //qr
  qr8.classList.toggle('prog1')
  qr4.classList.add('prog1')
  qr5.classList.add('prog1')
  qr6.classList.add('prog1')
  qr7.classList.add('prog1')
  qr3.classList.add('prog1')
 //audio remove
   audio12.classList.add('audioshow')
   audio8.classList.remove('audioshow')
   audio9.classList.remove('audioshow')
   audio10.classList.remove('audioshow')
   audio11.classList.remove('audioshow')
   audio7.classList.remove('audioshow')


  
  //add
  pp6.classList.add('ppshow')
  pp2.classList.remove('ppshow')
  pp3.classList.remove('ppshow')
  pp4.classList.remove('ppshow')
  pp5.classList.remove('ppshow')
  pp1.classList.remove('ppshow')
  //remove space
    prog6.classList.add('prog1')
    prog2.classList.remove('prog1')
    prog3.classList.remove('prog1')
    prog4.classList.remove('prog1')
    prog5.classList.remove('prog1')
    prog1.classList.remove('prog1')
  //  grcode addevent


  
    },
  aa1:  function aa1 () {
     animation.classList.add('animation1')
     
    animation.classList.remove('animation2')
    animation.classList.remove('animation3')
    animation.classList.remove('animation4')
    animation.classList.remove('animation5')
    animation.classList.remove('animation6')
  },
  aa2:  function aa2 () {
     animation.classList.add('animation2')
     animation.classList.remove('animation1')
     animation.classList.remove('animation3')
     animation.classList.remove('animation4')
     animation.classList.remove('animation5')
  },
  aa3:  function aa3 () {
     animation.classList.add('animation3')
     animation.classList.remove('animation1')
     animation.classList.remove('animation2')
     animation.classList.remove('animation4')
     animation.classList.remove('animation5')
  },
  qr1: function qrcode1(){
    qrcode.classList.add('grMove1')
    qrcode.classList.remove('grMove2')
    qrcode.classList.remove('grMove3')

  },
  qr2 :function qrcode2(){
    qrcode.classList.add('grMove2')
    qrcode.classList.remove('grMove1')
    qrcode.classList.remove('grMove3')
  },

}


//  SELECT SECTION FOR scroll navbar change
let one = document.querySelector('.main')
 let two = document.querySelector('.Emergence')
 let three = document.querySelector('.pro')
//  let four = document.querySelector('.kaftera')
//  let five = document.querySelector('.lop')
//  let six = document.querySelector('.branch1')
//  let seven = document.querySelector('.raiso')
// scroll
window.addEventListener('scroll', ()=>{
  let scrollPosition = document.documentElement.scrollTop;
  if (window.scrollY >=  one.offsetTop - one.offsetHeight * 0.2  &&
     scrollPosition <
       one.offsetTop + one.offsetHeight - one.offsetHeight * 0.25
        ){
           change.aa1.call()
        //   change.qr1.call()
 }
  }
 )
window.addEventListener('scroll', ()=>{
  let scrollPosition = document.documentElement.scrollTop;
  if (window.scrollY >=  two.offsetTop - two.offsetHeight -50 &&
     scrollPosition <
       two.offsetTop + two.offsetHeight - two.offsetHeight + 200
        ){
           change.aa2.call()
     //      change.qr2.call()
 }
 
  }
 )
  window.addEventListener('scroll', ()=>{
   let scrollPosition = document.documentElement.scrollTop;
   if (window.scrollY >= three.offsetTop - three.offsetHeight +400 &&
      scrollPosition <
        three.offsetTop + three.offsetHeight - three.offsetHeight * 0.5 ){
         change.aa3.call()
          // change.qr3.call()

     
  }
   }
  )
//  window.addEventListener('scroll', ()=>{
//   let scrollPosition = document.documentElement.scrollTop;
//   if (window.scrollY >= four.offsetTop - four.offsetHeight - 200 &&
//      scrollPosition <
//        four.offsetTop + four.offsetHeight - four.offsetHeight * 0.4){
//         change.aa4.call()
//         change.squre4.call()
     
//  }
//   }
//  )
//  window.addEventListener('scroll', ()=>{
//   let scrollPosition = document.documentElement.scrollTop;
//   if (window.scrollY >= five.offsetTop - five.offsetHeight * 0.25 &&
//      scrollPosition <
//        five.offsetTop + five.offsetHeight - five.offsetHeight * 0.8 ){
//         change.aa5.call()
//         change.squre5.call()

     
//  }
//   }
//  )
//  window.addEventListener('scroll', ()=>{
//   let scrollPosition = document.documentElement.scrollTop;
//   if (window.scrollY >= six.offsetTop - six.offsetHeight * 0.25 &&
//      scrollPosition <
//        six.offsetTop + six.offsetHeight - six.offsetHeight * 0.25 ){
//         change.aa6.call()
     
//  }
//   }
//  )
//  window.addEventListener('scroll', ()=>{
//  let scrollPosition = document.documentElement.scrollTop;
//  if (window.scrollY >= seven.offsetTop - seven.offsetHeight * 0.25 &&
//     scrollPosition <
//       seven.offsetTop + seven.offsetHeight - seven.offsetHeight * 0.25
//        ){
//        change.aa7.call()
    
// }
//  }
// )
   

  //scroll navbar
let lastScrollTop;

navbar1 = document.querySelector('.navigation');
window.addEventListener('scroll',function(){
  let scrollPosition = document.documentElement.scrollTop;
let scrollTop = window.pageYOffset || scrollPosition;
if(scrollTop > lastScrollTop){
  navbar1.classList.add('navigation1')


}
else{
  navbar1.classList.remove('navigation1')



}
lastScrollTop = scrollTop;
});


      let vi1 = document.querySelector(".audio1")
     let vi2 = document.querySelector(".audio2");
      // let vi3 = document.querySelector(".audio3");
      // let vi4 = document.querySelector(".audio4");
      // let vi5 = document.querySelector(".audio5");
      // let vi6 = document.querySelector(".audio6");
      vi1.onplay  = function () {
       vi1.classList.add('smooth-zigzag-anim-1')
        vi1.classList.remove('smooth-zigzag-anim-2')
        vi1.classList.remove('smooth-zigzag-anim-3')
   };
 


// vi3.onplay = function() {
//   vi3.classList.add('smooth-zigzag-anim-3')
//   vi3.classList.remove('smooth-zigzag-anim-2')
//   vi3.classList.remove('smooth-zigzag-anim-1')
// };
// vi4.onplay = function() {
//   vi4.classList.add('smooth-zigzag-anim-3')
//   vi4.classList.remove('smooth-zigzag-anim-2')
//   vi4.classList.remove('smooth-zigzag-anim-1')
// };
// vi5.onplay = function() {
//   vi5.classList.add('smooth-zigzag-anim-2')
//   vi5.classList.remove('smooth-zigzag-anim-1')
//   vi5.classList.remove('smooth-zigzag-anim-3')
// };
// vi6.onplay = function() {
//   vi6.classList.add('smooth-zigzag-anim-1')
//   vi6.classList.remove('smooth-zigzag-anim-2')
//   vi6.classList.remove('smooth-zigzag-anim-3')
// };
// let space1 = document.getElementById('space1')
// let button1 = document.getElementById('button1')
// let button = document.getElementById('button')
// button.addEventListener('click', function (){
//   space.classList.toggle('prog11')
//   audio7.classList.toggle('audio7')
//   pp1.classList.toggle('ppshow')
// })
// button1.addEventListener('click', function (){
//   space.classList.toggle('prog11')
//   audio8.classList.toggle('audio8')
//   pp1.classList.toggle('ppshow')
// })


let space1 = document.getElementById('space1')
let space2 = document.getElementById('space2')
let space3 = document.getElementById('space3')
let space4 = document.getElementById('space4')
let space5 = document.getElementById('space5')
let space6 = document.getElementById('space6')

let prog1 = document.getElementById('prog1')
let prog2 = document.getElementById('prog2')
let prog3 = document.getElementById('prog3')
let prog4 = document.getElementById('prog4')
let prog5 = document.getElementById('prog5')
let prog6 = document.getElementById('prog6')
let audio7 = document.querySelector('.audio7')
let audio8 = document.querySelector('.audio8')
let audio9 = document.querySelector('.audio9')
let audio10 = document.querySelector('.audio10')
let audio11 = document.querySelector('.audio11')
let audio12 = document.querySelector('.audio12')
let pp1 = document.querySelector('.pp1')
let pp2 = document.querySelector('.pp2')
let pp3 = document.querySelector('.pp3')
let pp4 = document.querySelector('.pp4')
let pp5 = document.querySelector('.pp5')
let pp6 = document.querySelector('.pp6')



 prog1.addEventListener('click', function (){

  // sopace
   space1.classList.toggle('prog11')
   space2.classList.remove('prog11')
   space3.classList.remove('prog11')
   space4.classList.remove('prog11')
   space5.classList.remove('prog11')
   space6.classList.remove('prog11')
    //qr
    qr3.classList.toggle('prog1')
    qr4.classList.add('prog1')
    qr5.classList.add('prog1')
    qr6.classList.add('prog1')
    qr7.classList.add('prog1')
    qr8.classList.add('prog1')

  //audio remove
    audio7.classList.add('audioshow')
    audio8.classList.remove('audioshow')
    audio9.classList.remove('audioshow')
    audio10.classList.remove('audioshow')
    audio11.classList.remove('audioshow')
    audio12.classList.remove('audioshow')


   
   //add
   pp1.classList.add('ppshow')
   pp2.classList.remove('ppshow')
   pp3.classList.remove('ppshow')
   pp4.classList.remove('ppshow')
   pp5.classList.remove('ppshow')
   pp6.classList.remove('ppshow')
   //remove space
     prog1.classList.toggle('prog1')
     prog2.classList.remove('prog1')
     prog3.classList.remove('prog1')
     prog4.classList.remove('prog1')
     prog5.classList.remove('prog1')
     prog6.classList.remove('prog1')
    //  grcode addevent
  

  
  })
 prog2.addEventListener('click', function(){
   // sopace
   space2.classList.toggle('prog11')
   space1.classList.remove('prog11')
   space3.classList.remove('prog11')
   space4.classList.remove('prog11')
   space5.classList.remove('prog11')
   space6.classList.remove('prog11')

     //qr
   qr4.classList.toggle('prog1')
   qr3.classList.add('prog1')
   qr5.classList.add('prog1')
   qr6.classList.add('prog1')
   qr7.classList.add('prog1')
   qr8.classList.add('prog1')

  //audio remove 
  audio8.classList.add('audioshow')
  audio7.classList.remove('audioshow')
  audio9.classList.remove('audioshow')
  audio10.classList.remove('audioshow')
  audio11.classList.remove('audioshow')
  audio12.classList.remove('audioshow')
   
   //add  
    pp2.classList.add('ppshow')
   pp1.classList.remove('ppshow')
   pp3.classList.remove('ppshow')
   pp4.classList.remove('ppshow')
   pp5.classList.remove('ppshow')
   pp6.classList.remove('ppshow')

   //remove buttn
     prog2.classList.add('prog1')
     prog1.classList.remove('prog1')
     prog3.classList.remove('prog1')
     prog4.classList.remove('prog1')
     prog5.classList.remove('prog1')
     prog6.classList.remove('prog1')
    //  grcode addevent
 

     
 })
 prog3.addEventListener('click', function(){
    // sopace
    space3.classList.toggle('prog11')
    space2.classList.remove('prog11')
    space1.classList.remove('prog11')
    space4.classList.remove('prog11')
    space5.classList.remove('prog11')
    space6.classList.remove('prog11')



     //qr
    qr5.classList.toggle('prog1')
    qr3.classList.add('prog1')
    qr4.classList.add('prog1')
    qr6.classList.add('prog1')
    qr7.classList.add('prog1')
    qr8.classList.add('prog1')
   //audio remove
   audio9.classList.add('audioshow')
   audio8.classList.remove('audioshow')
   audio7.classList.remove('audioshow')
   audio10.classList.remove('audioshow')
   audio11.classList.remove('audioshow')
   audio12.classList.remove('audioshow')
    
    //add
    pp3.classList.add('ppshow')
    pp2.classList.remove('ppshow')
    pp1.classList.remove('ppshow')
    pp4.classList.remove('ppshow')
    pp5.classList.remove('ppshow')
    pp6.classList.remove('ppshow')
    //remove space
      prog3.classList.add('prog1')
      prog2.classList.remove('prog1')
      prog1.classList.remove('prog1')
     prog4.classList.remove('prog1')
     prog5.classList.remove('prog1')
     prog6.classList.remove('prog1')
      //  grcode addevent
   

 })
 prog4.addEventListener('click', function(){
    // sopace
    space4.classList.toggle('prog11')
    space2.classList.remove('prog11')
    space3.classList.remove('prog11')
    space1.classList.remove('prog11')
    space5.classList.remove('prog11')
    space6.classList.remove('prog11')



      //qr
    qr6.classList.toggle('prog1')
    qr4.classList.add('prog1')
    qr5.classList.add('prog1')
    qr3.classList.add('prog1')
    qr7.classList.add('prog1')
    qr8.classList.add('prog1')
   //audio remove
   audio10.classList.add('audioshow')
   audio8.classList.remove('audioshow')
   audio9.classList.remove('audioshow')
   audio7.classList.remove('audioshow')
   audio11.classList.remove('audioshow')
   audio12.classList.remove('audioshow')
    
    //add
    pp4.classList.add('ppshow')
    pp2.classList.remove('ppshow')
    pp3.classList.remove('ppshow')
    pp1.classList.remove('ppshow')
    pp5.classList.remove('ppshow')
    pp6.classList.remove('ppshow')
    //remove space
      prog4.classList.add('prog1')
      prog2.classList.remove('prog1')
      prog1.classList.remove('prog1')
     prog3.classList.remove('prog1')
     prog5.classList.remove('prog1')
     prog6.classList.remove('prog1')
    //  grcode addevent
   

   

 })
 prog5.addEventListener('click', function(){
    // sopace
    space5.classList.toggle('prog11')
    space2.classList.remove('prog11')
    space3.classList.remove('prog11')
    space4.classList.remove('prog11')
    space1.classList.remove('prog11')
    space6.classList.remove('prog11')




     //qr
    qr7.classList.toggle('prog1')
    qr4.classList.add('prog1')
    qr5.classList.add('prog1')
    qr6.classList.add('prog1')
    qr3.classList.add('prog1')
    qr8.classList.add('prog1')
   //audio remove
     audio11.classList.add('audioshow')
     audio8.classList.remove('audioshow')
     audio9.classList.remove('audioshow')
     audio10.classList.remove('audioshow')
     audio7.classList.remove('audioshow')
     audio12.classList.remove('audioshow')
 
 
    
    //add
    pp5.classList.add('ppshow')
    pp2.classList.remove('ppshow')
    pp3.classList.remove('ppshow')
    pp4.classList.remove('ppshow')
    pp1.classList.remove('ppshow')
    pp6.classList.remove('ppshow')
    //remove space
      prog5.classList.add('prog1')
      prog2.classList.remove('prog1')
      prog3.classList.remove('prog1')
      prog4.classList.remove('prog1')
      prog1.classList.remove('prog1')
      prog6.classList.remove('prog1')

        //  grcode addevent


   
 
   

 })
 prog6.addEventListener('click', function(){
  // sopace
  space6.classList.toggle('prog11')
  space2.classList.remove('prog11')
  space3.classList.remove('prog11')
  space4.classList.remove('prog11')
  space5.classList.remove('prog11')
  space1.classList.remove('prog11')




  qr8.classList.toggle('prog1')
  qr4.classList.add('prog1')
  qr5.classList.add('prog1')
  qr6.classList.add('prog1')
  qr7.classList.add('prog1')
  qr3.classList.add('prog1')
 //audio remove
   audio12.classList.add('audioshow')
   audio8.classList.remove('audioshow')
   audio9.classList.remove('audioshow') 
   audio10.classList.remove('audioshow')
   audio11.classList.remove('audioshow')
   audio7.classList.remove('audioshow')


  
  //add
  pp6.classList.add('ppshow')
  pp2.classList.remove('ppshow')
  pp3.classList.remove('ppshow')
  pp4.classList.remove('ppshow')
  pp5.classList.remove('ppshow')
  pp1.classList.remove('ppshow')
  //remove space
    prog6.classList.add('prog1')
    prog2.classList.remove('prog1')
    prog3.classList.remove('prog1')
    prog4.classList.remove('prog1')
    prog5.classList.remove('prog1')
    prog1.classList.remove('prog1')
  //  grcode addevent


  
 })



//  var navLinks = document.querySelectorAll("ul li a");
//  navLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     e.preventDefault();
//     var currentId = e.target.attributes.href.value;
//     var section = document.querySelector(currentId);
//     var sectionPos = section.offsetTop;
//    //  section.scrollIntoView({
//    //    behavior: "smooth",
//   //   });

//      window.scroll({
//        top: sectionPos,
//        behavior: "smooth",
//      });
//   });
// });



const music = new Audio('1.mp3');
const music2 = new Audio('vande.mp3');
const music3 = new Audio('vande.mp3');
const music4 = new Audio('vande.mp3');
const music5 = new Audio('vande.mp3');
const music6 = new Audio('vande.mp3');
const music7 = new Audio('vande.mp3');
const music8 = new Audio('vande.mp3');


// create Array 
let masterPlay = document.getElementById('masterPlay');
let masterPlay1 = document.getElementById('masterPlay1');
let masterPlay2 = document.getElementById('masterPlay2');
let masterPlay3 = document.getElementById('masterPlay3');
let masterPlay4 = document.getElementById('masterPlay4');
let masterPlay5 = document.getElementById('masterPlay5');
let masterPlay6 = document.getElementById('masterPlay6');
let masterPlay7 = document.getElementById('masterPlay7');

let wave = document.getElementsByClassName('wave')[0]; //موجات
// play and puse music audio 1
masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )
// play and puse music audio 1

 masterPlay1.addEventListener('click',function fd(){
     if (music2.paused || music2.currentTime <=0) {
         music2.play();
         masterPlay1.classList.remove('bi-play-fill');
         masterPlay1.classList.add('bi-pause-fill');
         wave.classList.add('active2');
     } else {
         music2.pause();
         masterPlay1.classList.add('bi-play-fill');
         masterPlay1.classList.remove('bi-pause-fill');
         wave.classList.remove('active2');
     }
 } )
// play and puse music audio 3


masterPlay3.addEventListener('click',function(){
  if (music4.paused || music4.currentTime <=0) {
      music4.play();
      masterPlay3.classList.remove('bi-play-fill');
      masterPlay3.classList.add('bi-pause-fill');
      wave.classList.add('active2');
  } else {
      music4.pause();
      masterPlay3.classList.add('bi-play-fill');
      masterPlay3.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');
  }
} )

// play and puse music audio 4


masterPlay4.addEventListener('click',function(){
  if (music5.paused || music5.currentTime <=0) {
      music5.play();
      masterPlay4.classList.remove('bi-play-fill');
      masterPlay4.classList.add('bi-pause-fill');
      wave.classList.add('active2');
  } else {
      music5.pause();
      masterPlay4.classList.add('bi-play-fill');
      masterPlay4.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');
  }
} )

// play and puse music audio 5


masterPlay5.addEventListener('click',function(){
  if (music6.paused || music6.currentTime <=0) {
      music6.play();
      masterPlay5.classList.remove('bi-play-fill');
      masterPlay5.classList.add('bi-pause-fill');
      wave.classList.add('active2');
  } else {
      music6.pause();
      masterPlay5.classList.add('bi-play-fill');
      masterPlay5.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');
  }
} )


// play and puse music audio 6


masterPlay6.addEventListener('click',function(){
  if (music7.paused || music7.currentTime <=0) {
      music7.play();
      masterPlay6.classList.remove('bi-play-fill');
      masterPlay6.classList.add('bi-pause-fill');
      wave.classList.add('active2');
  } else {
      music7.pause();
      masterPlay6.classList.add('bi-play-fill');
      masterPlay6.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');
  }
} )



// play and puse music audio 7


masterPlay7.addEventListener('click',function(){
  if (music8.paused || music8.currentTime <=0) {
      music8.play();
      masterPlay7.classList.remove('bi-play-fill');
      masterPlay7.classList.add('bi-pause-fill');
      wave.classList.add('active2');
  } else {
      music8.pause();
      masterPlay7.classList.add('bi-play-fill');
      masterPlay7.classList.remove('bi-pause-fill');
      wave.classList.remove('active2');
  }
} )


let currentStart = document.getElementById('currentStart');
let currentStart1 = document.getElementById('currentStart1');
let currentStart2 = document.getElementById('currentStart2');
let currentStart3 = document.getElementById('currentStart3');
let currentStart4 = document.getElementById('currentStart4');
let currentStart5 = document.getElementById('currentStart5');
let currentStart6 = document.getElementById('currentStart6');
let currentStart7 = document.getElementById('currentStart7');


let currentEnd = document.getElementById('currentEnd');
let currentEnd1 = document.getElementById('currentEnd1');
let currentEnd2 = document.getElementById('currentEnd2');
let currentEnd3 = document.getElementById('currentEnd3');
let currentEnd4 = document.getElementById('currentEnd4');
let currentEnd5 = document.getElementById('currentEnd5');
let currentEnd6 = document.getElementById('currentEnd6');
let currentEnd7 = document.getElementById('currentEnd7');



let seek = document.getElementById('seek');
let seek1 = document.getElementById('seek1');
let seek2 = document.getElementById('seek2');
let seek3 = document.getElementById('seek3');
let seek4 = document.getElementById('seek4');
let seek5 = document.getElementById('seek5');
let seek6 = document.getElementById('seek6');
let seek7 = document.getElementById('seek7');


let bar2 = document.getElementById('bar2');
let bar3 = document.getElementById('bar3');
let bar4 = document.getElementById('bar4');
let bar5 = document.getElementById('bar5');
let bar6 = document.getElementById('bar6');
let bar7 = document.getElementById('bar7');
let bar8 = document.getElementById('bar8');
let bar9 = document.getElementById('bar9');


let dot = document.getElementsByClassName('dot')[0];
let dot1 = document.getElementsByClassName('dot1')[0];
let dot2 = document.getElementsByClassName('dot2')[0];
let dot3 = document.getElementsByClassName('dot3')[0];
let dot4 = document.getElementsByClassName('dot4')[0];
let dot5 = document.getElementsByClassName('dot5')[0];
let dot6 = document.getElementsByClassName('dot6')[0];
let dot7 = document.getElementsByClassName('dot7')[0];


music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})


music2.addEventListener('timeupdate',()=>{
    let music_curr = music2.currentTime;
    let music_dur = music2.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd1.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart1.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music2.currentTime/music2.duration)*100);
    seek1.value = progressbar;
    let seekbar = seek1.value;
    bar3.style.width = `${seekbar}%`;
    dot1.style.left = `${seekbar}%`;
})

seek1.addEventListener('change', ()=>{
    music2.currentTime = seek1.value * music2.duration/100;
})

music3.addEventListener('timeupdate',()=>{
  let music_curr = music3.currentTime;
  let music_dur = music3.duration;

  let min = Math.floor(music_dur/60);
  let sec = Math.floor(music_dur%60);
  if (sec<10) {
      sec = `0${sec}`
  }
  currentEnd2.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr/60);
  let sec1 = Math.floor(music_curr%60);
  if (sec1<10) {
      sec1 = `0${sec1}`
  }
  currentStart2.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((music3.currentTime/music3.duration)*100);
  seek2.value = progressbar;
  let seekbar = seek2.value;
  bar4.style.width = `${seekbar}%`;
  dot2.style.left = `${seekbar}%`;
})

seek2.addEventListener('change', ()=>{
  music3.currentTime = seek2.value * music3.duration/100;
})

seek3.addEventListener('change', ()=>{
  music4.currentTime = seek3.value * music3.duration/100;
})
seek4.addEventListener('change', ()=>{
  music5.currentTime = seek4.value * music3.duration/100;
})
seek5.addEventListener('change', ()=>{
  music6.currentTime = seek5.value * music3.duration/100;
})
seek6.addEventListener('change', ()=>{
  music7.currentTime = seek6.value * music3.duration/100;
})
seek7.addEventListener('change', ()=>{
  music8.currentTime = seek7.value * music3.duration/100;
})



music4.addEventListener('timeupdate',()=>{
  let music_curr = music4.currentTime;
  let music_dur = music4.duration;

  let min = Math.floor(music_dur/60);
  let sec = Math.floor(music_dur%60);
  if (sec<10) {
      sec = `0${sec}`
  }
  currentEnd3.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr/60);
  let sec1 = Math.floor(music_curr%60);
  if (sec1<10) {
      sec1 = `0${sec1}`
  }
  currentStart3.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((music4.currentTime/music3.duration)*100);
  seek3.value = progressbar;
  let seekbar = seek3.value;
  bar5.style.width = `${seekbar}%`;
  dot3.style.left = `${seekbar}%`;
})

music5.addEventListener('timeupdate',()=>{
  let music_curr = music5.currentTime;
  let music_dur = music5.duration;

  let min = Math.floor(music_dur/60);
  let sec = Math.floor(music_dur%60);
  if (sec<10) {
      sec = `0${sec}`
  }
  currentEnd4.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr/60);
  let sec1 = Math.floor(music_curr%60);
  if (sec1<10) {
      sec1 = `0${sec1}`
  }
  currentStart4.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((music4.currentTime/music3.duration)*100);
  seek4.value = progressbar;
  let seekbar = seek4.value;
  bar6.style.width = `${seekbar}%`;
  dot4.style.left = `${seekbar}%`;
})
music6.addEventListener('timeupdate',()=>{
  let music_curr = music6.currentTime;
  let music_dur = music6.duration;

  let min = Math.floor(music_dur/60);
  let sec = Math.floor(music_dur%60);
  if (sec<10) {
      sec = `0${sec}`
  }
  currentEnd5.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr/60);
  let sec1 = Math.floor(music_curr%60);
  if (sec1<10) {
      sec1 = `0${sec1}`
  }
  currentStart5.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((music4.currentTime/music3.duration)*100);
  seek5.value = progressbar;
  let seekbar = seek5.value;
  bar7.style.width = `${seekbar}%`;
  dot5.style.left = `${seekbar}%`;
})

music7.addEventListener('timeupdate',()=>{
  let music_curr = music7.currentTime;
  let music_dur = music7.duration;

  let min = Math.floor(music_dur/60);
  let sec = Math.floor(music_dur%60);
  if (sec<10) {
      sec = `0${sec}`
  }
  currentEnd6.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr/60);
  let sec1 = Math.floor(music_curr%60);
  if (sec1<10) {
      sec1 = `0${sec1}`
  }
  currentStart6.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((music4.currentTime/music3.duration)*100);
  seek6.value = progressbar;
  let seekbar = seek6.value;
  bar8.style.width = `${seekbar}%`;
  dot6.style.left = `${seekbar}%`;
})



music8.addEventListener('timeupdate',()=>{
  let music_curr = music8.currentTime;
  let music_dur = music8.duration;

  let min = Math.floor(music_dur/60);
  let sec = Math.floor(music_dur%60);
  if (sec<10) {
      sec = `0${sec}`
  }
  currentEnd7.innerText = `${min}:${sec}`;

  let min1 = Math.floor(music_curr/60);
  let sec1 = Math.floor(music_curr%60);
  if (sec1<10) {
      sec1 = `0${sec1}`
  }
  currentStart7.innerText = `${min1}:${sec1}`;

  let progressbar = parseInt((music4.currentTime/music3.duration)*100);
  seek7.value = progressbar;
  let seekbar = seek7.value;
  bar9.style.width = `${seekbar}%`;
  dot7.style.left = `${seekbar}%`;
})
// vol
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];


//vol1
let vol_icon1 = document.getElementById('vol_icon1');
let vol1 = document.getElementById('vol1');
let vol_dot1 = document.getElementById('vol_dot1');
let vol_bar1 = document.getElementsByClassName('vol_bar1')[0];
//vol2  
let vol_icon2 = document.getElementById('vol_icon2');
let vol2 = document.getElementById('vol2');
let vol_dot2 = document.getElementById('vol_dot2');
let vol_bar2 = document.getElementsByClassName('vol_bar2')[0];

//vol3  
let vol_icon3 = document.getElementById('vol_icon3');
let vol3 = document.getElementById('vol3');
let vol_dot3 = document.getElementById('vol_dot3');
let vol_bar3 = document.getElementsByClassName('vol_bar3')[0];

//vol4  
let vol_icon4 = document.getElementById('vol_icon4');
let vol4 = document.getElementById('vol4');
let vol_dot4 = document.getElementById('vol_dot4');
let vol_bar4 = document.getElementsByClassName('vol_bar4')[0];
//vol5  
let vol_icon5 = document.getElementById('vol_icon5');
let vol5 = document.getElementById('vol5');
let vol_dot5 = document.getElementById('vol_dot5');
let vol_bar5 = document.getElementsByClassName('vol_bar5')[0];
//vol6  
let vol_icon6 = document.getElementById('vol_icon6');
let vol6 = document.getElementById('vol6');
let vol_dot6 = document.getElementById('vol_dot6');
let vol_bar6 = document.getElementsByClassName('vol_bar6')[0];
//vol7  
let vol_icon7 = document.getElementById('vol_icon7');
let vol7 = document.getElementById('vol7');
let vol_dot7 = document.getElementById('vol_dot7');
let vol_bar7 = document.getElementsByClassName('vol_bar7')[0];
//vol8  
let vol_icon8 = document.getElementById('vol_icon8');
let vol8 = document.getElementById('vol8');
let vol_dot8 = document.getElementById('vol_dot8');
let vol_bar8 = document.getElementsByClassName('vol_bar8')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})

vol1.addEventListener('change', ()=>{
    if (vol1.value == 0) {
        vol_icon1.classList.remove('bi-volume-down-fill');
        vol_icon1.classList.add('bi-volume-mute-fill');
        vol_icon1.classList.remove('bi-volume-up-fill');
    }
    if (vol1.value > 0) {
        vol_icon1.classList.add('bi-volume-down-fill');
        vol_icon1.classList.remove('bi-volume-mute-fill');
        vol_icon1.classList.remove('bi-volume-up-fill');
    }
    if (vol1.value > 50) {
        vol_icon1.classList.remove('bi-volume-down-fill');
        vol_icon1.classList.remove('bi-volume-mute-fill');
        vol_icon1.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol1.value;
    vol_bar1.style.width = `${vol_a}%`;
    vol_dot1.style.left = `${vol_a}%`;
    music2.volume = vol_a/100;
})


vol2.addEventListener('change', ()=>{
  if (vol2.value == 0) {
      vol_icon2.classList.remove('bi-volume-down-fill');
      vol_icon2.classList.add('bi-volume-mute-fill');
      vol_icon2.classList.remove('bi-volume-up-fill');
  }
  if (vol2.value > 0) {
      vol_icon2.classList.add('bi-volume-down-fill');
      vol_icon2.classList.remove('bi-volume-mute-fill');
      vol_icon2.classList.remove('bi-volume-up-fill');
  }
  if (vol2.value > 50) {
      vol_icon2.classList.remove('bi-volume-down-fill');
      vol_icon2.classList.remove('bi-volume-mute-fill');
      vol_icon2.classList.add('bi-volume-up-fill');
  }

  let vol_a = vol2.value;
  vol_bar2.style.width = `${vol_a}%`;
  vol_dot2.style.left = `${vol_a}%`;
  music3.volume = vol_a/100;
})



vol2.addEventListener('change', ()=>{
  if (vol2.value == 0) {
      vol_icon2.classList.remove('bi-volume-down-fill');
      vol_icon2.classList.add('bi-volume-mute-fill');
      vol_icon2.classList.remove('bi-volume-up-fill');
  }
  if (vol2.value > 0) {
      vol_icon2.classList.add('bi-volume-down-fill');
      vol_icon2.classList.remove('bi-volume-mute-fill');
      vol_icon2.classList.remove('bi-volume-up-fill');
  }
  if (vol2.value > 50) {
      vol_icon2.classList.remove('bi-volume-down-fill');
      vol_icon2.classList.remove('bi-volume-mute-fill');
      vol_icon2.classList.add('bi-volume-up-fill');
  }

  let vol_a = vol2.value;
  vol_bar2.style.width = `${vol_a}%`;
  vol_dot2.style.left = `${vol_a}%`;
  music4.volume = vol_a/100;
})

vol3.addEventListener('change', ()=>{
  if (vol3.value == 0) {
      vol_icon3.classList.remove('bi-volume-down-fill');
      vol_icon3.classList.add('bi-volume-mute-fill');
      vol_icon3.classList.remove('bi-volume-up-fill');
  }
  if (vol3.value > 0) {
      vol_icon3.classList.add('bi-volume-down-fill');
      vol_icon3.classList.remove('bi-volume-mute-fill');
      vol_icon3.classList.remove('bi-volume-up-fill');
  }
  if (vol3.value > 50) {
      vol_icon3.classList.remove('bi-volume-down-fill');
      vol_icon3.classList.remove('bi-volume-mute-fill');
      vol_icon3.classList.add('bi-volume-up-fill');
  }

  let vol_a = vol3.value;
  vol_bar3.style.width = `${vol_a}%`;
  vol_dot3.style.left = `${vol_a}%`;
  music5.volume = vol_a/100;
})

vol4.addEventListener('change', ()=>{
  if (vol4.value == 0) {
      vol_icon4.classList.remove('bi-volume-down-fill');
      vol_icon4.classList.add('bi-volume-mute-fill');
      vol_icon4.classList.remove('bi-volume-up-fill');
  }
  if (vol4.value > 0) {
      vol_icon4.classList.add('bi-volume-down-fill');
      vol_icon4.classList.remove('bi-volume-mute-fill');
      vol_icon4.classList.remove('bi-volume-up-fill');
  }
  if (vol4.value > 50) {
      vol_icon4.classList.remove('bi-volume-down-fill');
      vol_icon4.classList.remove('bi-volume-mute-fill');
      vol_icon4.classList.add('bi-volume-up-fill');
  }

  let vol_a = vol4.value;
  vol_bar4.style.width = `${vol_a}%`;
  vol_dot4.style.left = `${vol_a}%`;
  music6.volume = vol_a/100;
})

vol5.addEventListener('change', ()=>{
  if (vol5.value == 0) {
      vol_icon5.classList.remove('bi-volume-down-fill');
      vol_icon5.classList.add('bi-volume-mute-fill');
      vol_icon5.classList.remove('bi-volume-up-fill');
  }
  if (vol5.value > 0) {
      vol_icon5.classList.add('bi-volume-down-fill');
      vol_icon5.classList.remove('bi-volume-mute-fill');
      vol_icon5.classList.remove('bi-volume-up-fill');
  }
  if (vol5.value > 50) {
      vol_icon5.classList.remove('bi-volume-down-fill');
      vol_icon5.classList.remove('bi-volume-mute-fill');
      vol_icon5.classList.add('bi-volume-up-fill');
  }

  let vol_a = vol5.value;
  vol_bar5.style.width = `${vol_a}%`;
  vol_dot5.style.left = `${vol_a}%`;
  music7.volume = vol_a/100;
})


vol6.addEventListener('change', ()=>{
  if (vol6.value == 0) {
      vol_icon6.classList.remove('bi-volume-down-fill');
      vol_icon6.classList.add('bi-volume-mute-fill');
      vol_icon6.classList.remove('bi-volume-up-fill');
  }
  if (vol6.value > 0) {
      vol_icon6.classList.add('bi-volume-down-fill');
      vol_icon6.classList.remove('bi-volume-mute-fill');
      vol_icon6.classList.remove('bi-volume-up-fill');
  }
  if (vol6.value > 50) {
      vol_icon6.classList.remove('bi-volume-down-fill');
      vol_icon6.classList.remove('bi-volume-mute-fill');
      vol_icon6.classList.add('bi-volume-up-fill');
  }

  let vol_a = vol6.value;
  vol_bar6.style.width = `${vol_a}%`;
  vol_dot6.style.left = `${vol_a}%`;
  music8.volume = vol_a/100;
})

