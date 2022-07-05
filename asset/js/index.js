window.onscroll = function() {myFunction()};

var navbar = document.getElementById("contactus");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= 30) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// $(document).ready(function() {
//     //change the integers below to match the height of your upper div, which I called
//     //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
//     //to figure out what the scroll position is when exactly you want to fix the nav
//     //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
//     //you know the position.
//     $(window).scroll(function () { 
  
//       console.log($(window).scrollTop());
  
//       if ($(window).scrollTop() > 20) {
//         $('#contactus').addClass('navbar-fixed-top');
//       }
  
//       if ($(window).scrollTop() < 20) {
//         $('#contactus').removeClass('navbar-fixed-top');
//       }
//     });
//   });
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//     document.getElementById("contactus").style.width = "100%";
//     // document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("contactus").style.width = "80%";
//     // document.getElementById("logo").style.fontSize = "35px";
//   }
// }