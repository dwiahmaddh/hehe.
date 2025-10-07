let a = 1;

function clicked(){
    if (a == 1) {
        document.getElementById("noo").innerHTML = "Jangan klick no!";
        var img = document.getElementById("img1");
        img.src = "angry2.png";
        a++;
    }
    
    else if (a == 2) {
        document.getElementById("noo").innerHTML = "pls klick yes!";
        var img = document.getElementById("img1");
        img.src = "sad.png";
        a++;
    }
    
    else if (a == 3) {
        document.getElementById("noo").innerHTML = "sayang!";
        var img = document.getElementById("img1");
        img.src = "worried.png";
        a++;
    }

    else if (a == 4) {
        document.getElementById("noo").innerHTML = "Aku punya sesuatu untukmu jika kamu klik ya!";
        var img = document.getElementById("img1");
        img.src = "hugg.png";
        a++;
    }

    var button = document.getElementById("no");
    var maxWidth = window.innerWidth - button.clientWidth;
    var maxHeight = window.innerHeight - button.clientHeight;

    var newX = Math.floor(Math.random() * maxWidth);
    var newY = Math.floor(Math.random() * maxHeight);

    button.style.position = "absolute";
    button.style.left = newX + "px";
    button.style.top = newY + "px";
}
