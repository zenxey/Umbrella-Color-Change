function bluefun() {
    document.getElementById('myImage')
        .src = "assets/blue.png"
    document.getElementById('message')
        .innerHTML = "Blue";
}

function pinkfun() {
    document.getElementById('myImage').src = "assets/pink.png";
    document.getElementById('message').innerHTML = "Pink";
}

function yellowfun() {
    document.getElementById('myImage').src = "assets/yellow.png";
    document.getElementById('message').innerHTML = "Yellow";
}

var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};