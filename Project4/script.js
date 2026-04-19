// querySelectorAll selects all elements that have .elem class and stores them in NodeList which has similar properties to arrays
let elem = document.querySelectorAll(".elem");

// forEach loop to iterate through each elemnent in the NodeList
elem.forEach(function (val) {
    //To select the img element inside each .elem div, we use childNodes[3] because the img is the fourth child node (considering text nodes as well)
    val.addEventListener("mouseenter", function () {
        val.childNodes[3].style.opacity = 1;
    });

    val.addEventListener("mouseleave", function () {
      val.childNodes[3].style.opacity = 0;
    });

    val.addEventListener("mousemove", function (dets) {
      val.childNodes[3].style.left = dets.x + "px";
    });
})
