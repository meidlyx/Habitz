function toggleAside() {
    var aside = document.getElementById("myAside");
    var computedStyle = window.getComputedStyle(aside);
    var left = computedStyle.getPropertyValue("left");
    var closeAsideButton = document.getElementById("closeAsideButton");

    if (left === "-495px" || left === "") {
        aside.style.left = "0";
        aside.classList.add("open"); 
        closeAsideButton.style.display = 'block';
    } else {
        aside.style.left = "-495px";
        aside.classList.remove("open"); 
        closeAsideButton.style.display = 'none';
    }
}


function closeAside() {
    var aside = document.getElementById("myAside");
    aside.style.left = "-495px";
    aside.classList.remove("open"); 
}