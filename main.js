var canvas = new fabric.Canvas("myCanvas");

playerX = 10;
playerY = 10;

blockWidth = 30;
blockHeight = 30;

playerImg = "";
blockImg = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerImg = Img;

        playerImg.scaleToWidth(150);
        playerImg.scaleToHeight(140);
        playerImg.set({
            top: playerY,
            left: playerX
        })
        canvas.add(playerImg);
    })
}

playerUpdate();

function addImg(newBlockImg) {
    fabric.Image.fromURL(newBlockImg, function(Img) {
        blockImg = Img;

        blockImg.scaleToHeight(blockHeight);
        blockImg.scaleToWidth(blockWidth);
        blockImg.set({
            top: playerY,
            left: playerX
        })
        canvas.add(blockImg);
    })
}

//addImg("roof.jpg");

window.addEventListener("keydown", myKeydown);

function myKeydown(e) {
    var CodeofKey = e.keyCode;

    if (CodeofKey == 87) {
        console.log("w");
        addImg("wall.jpg");
    }

    if (CodeofKey == 71) {
        console.log("g");
        addImg("ground.png");
    }

    if (CodeofKey == 76) {
        console.log("l");
        addImg("light_green.png");
    }

    if (CodeofKey == 84) {
        console.log("t");
        addImg("trunk.jpg");
    }

    if (CodeofKey == 82) {
        console.log("r");
        addImg("roof.jpg");
    }

    if (CodeofKey == 89) {
        console.log("y");
        addImg("yellow_wall.png");
    }

    if (CodeofKey == 68) {
        console.log("d");
        addImg("dark_green.png");
    }

    if (CodeofKey == 85) {
        console.log("u");
        addImg("unique.png");
    }

    if (CodeofKey == 67) {
        console.log("c");
        addImg("cloud.jpg");
    }
    if (e.shiftKey == true && CodeofKey == 80) {
        blockWidth = blockWidth + 10;
        blockHeight = blockHeight + 10;
        document.getElementById("current_width").innerHTML = blockWidth;
        document.getElementById("current_height").innerHTML = blockHeight;
        //addImg("roof.jpg");
    }

    if (e.shiftKey == true && CodeofKey == 77) {
        blockWidth = blockWidth - 10;
        blockHeight = blockHeight - 10;
        document.getElementById("current_width").innerHTML = blockWidth;
        document.getElementById("current_height").innerHTML = blockHeight;
        //addImg("roof.jpg");
    }

    if (CodeofKey == 38) {
        up();
    }

    if (CodeofKey == 40) {
        down();
    }

    if (CodeofKey == 37) {
        left();
    }

    if (CodeofKey == 39) {
        right();
    }
}

function up() {
    if (playerY > 0) {
        playerY = playerY - blockHeight;
        canvas.remove(playerImg);
        playerUpdate();
    }
}

function down() {
    if (playerY < canvas.height - 100) {
        playerY = playerY + blockHeight;
        canvas.remove(playerImg);
        playerUpdate();
    }
}

function left() {
    if (playerX > 0) {
        playerX = playerX - blockWidth;
        canvas.remove(playerImg);
        playerUpdate();
    }
}

function right() {
    if (playerX < canvas.width - 150) {
        playerX = playerX + blockWidth;
        canvas.remove(playerImg);
        playerUpdate();
    }
}