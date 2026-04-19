let con = document.querySelector("#container");
let love = document.querySelector("i");

con.addEventListener("dblclick",function(){
  love.style.color = 'rgb(255, 30, 50)';
  love.style.transform = 'translate(-50%, -50%) scale(1)';
  love.style.opacity = '0.8';
    

  setTimeout(function () {
    love.style.opacity = 0;
  }, 1000);

  setTimeout(function () {
    love.style.transform = 'translate(-50%, -50%) scale(0)';
  },3000);
})
