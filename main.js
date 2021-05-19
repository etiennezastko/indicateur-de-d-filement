window.addEventListener("scroll", function () {
  let a = document.documentElement.scrollTop;
  console.log("a=" + a);

  let b = document.documentElement.scrollHeight;
  console.log("b=" + b);

  let c = document.documentElement.clientHeight;
  console.log("c=" + c);

  let d = b - c;
  console.log("d=" + d);

  let e = (a / d) * 100;
  console.log(e);

  document.getElementById("bar").style.width = e + "%";
});
/* 
window.addEventListener("scroll", function () {
  let scrolling = document.documentElement.scrollTop;
  console.log(scrolling);
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrolled = (scrolling / height) * 100;
  document.getElementById("bar").style.width = scrolled + "%";
});
 */
