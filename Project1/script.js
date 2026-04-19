let istatus = document.querySelector("h5");

let btn = document.querySelector("#add");

let container = document.querySelector("button");

let check = 0;
btn.addEventListener('click',function(){
    if(check === 0) {
        istatus.innerHTML = "Friends";
        istatus.style.color = "green";
        btn.innerHTML = "Remove Friend";
        btn.style.color = "#111"; 
        container.style.backgroundColor = "#dadada";
        check = 1;
    }
    else {
        istatus.innerHTML = "Stranger";
        istatus.style.color = "red";
        btn.innerHTML = "Add Friend";
        btn.style.color = "#fff"; 
        container.style.backgroundColor = "cadetblue";
        check = 0;
    }

});

