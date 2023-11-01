document.getElementById("next1").onclick = function(){
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
}

document.getElementById("next2").onclick = function(){
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
}

document.getElementById("start").onclick = function(){
    alert("You are welcome!")
}

document.getElementById("skip1").onclick = function(){
    document.getElementById("first").style.display = "none";
    document.getElementById("third").style.display = "block";
}

document.getElementById("skip2").onclick = function(){
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
}

