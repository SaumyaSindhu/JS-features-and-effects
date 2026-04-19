let arr = [
  {
    dp: "https://i.pinimg.com/1200x/08/82/59/08825990b038808a5172e976987cf411.jpg",
    story:
      "https://i.pinimg.com/1200x/08/82/59/08825990b038808a5172e976987cf411.jpg",
  },
  {
    dp: "https://i.pinimg.com/736x/42/46/33/4246337da95457b8c5dd648ed9179a99.jpg",
    story:
      "https://i.pinimg.com/736x/42/46/33/4246337da95457b8c5dd648ed9179a99.jpg",
  },
  {
    dp: "https://akm-img-a-in.tosshub.com/aajtak/images/story/202512/6939392468be6-arjun-rampal-emotional-over-dhurandhar-success-10105516-16x9.jpg?size=948:533",
    story:
      "https://akm-img-a-in.tosshub.com/aajtak/images/story/202512/6939392468be6-arjun-rampal-emotional-over-dhurandhar-success-10105516-16x9.jpg?size=948:533",
  },
  {
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZgj1CY4SXZMR8d36a8L9-6zfB-94-lWahhw&s",
    story:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZgj1CY4SXZMR8d36a8L9-6zfB-94-lWahhw&s",
  },
  {
    dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4s387zvE5oIDqzi-wKzf1-2iOwCh-46ZwA&s",
    story:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm4s387zvE5oIDqzi-wKzf1-2iOwCh-46ZwA&s",
  },
];

let storiyan = document.querySelector("#storiyan");
let clutter = "";
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
                <img id="${idx}" src="${elem.dp}" alt="">
            </div>`;
});

storiyan.innerHTML = clutter;

//when we pass dets it will have details about the event that has happened and in the console we have PointerEvent where we can see all the details
storiyan.addEventListener("click",function (dets) {
    document.querySelector("#full-screen").style.display = "block";
    document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;

    setTimeout(function () {
        document.querySelector("#full-screen").style.display = "none";
    },3000);

});