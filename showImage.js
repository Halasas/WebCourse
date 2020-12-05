var imgs = document.getElementById("gallery_body").getElementsByTagName("img");
var bigImg = document.getElementById("bigImg");
var bigImageContainer = bigImg.parentElement;

bigImageContainer.onclick = function() {
     bigImg.src = "";
     bigImageContainer.classList.toggle("show");
 }

for(let image of imgs) {
    image.onclick = function() { ShowImg(image.src)};
}

function ShowImg(src) {
    bigImg.src = src;
    if(bigImageContainer.classList.contains("show") === false) {
        bigImageContainer.classList.add("show");
    }
}