
document.getElementById("like").addEventListener("click", function(){
    incrLikes();
});


function incrLikes(){
    document.getElementById("likes").innerText = Number(document.getElementById("likes").innerText) + 1;
    return document.getElementById("likes").innerText;
}


document.getElementById("like2").addEventListener("click", function(){
    incrLikes2();
});


function incrLikes2(){
    document.getElementById("likes2").innerText = Number(document.getElementById("likes2").innerText) + 1;
    return document.getElementById("likes2").innerText;
}