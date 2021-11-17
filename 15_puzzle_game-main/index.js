// GAME INITIATOR
// GAME INITIATOR
function game() {

    // TURNS DIV WITH 0 AS WHITE AND OTHER WITH COLORS
    // TURNS DIV WITH 0 AS WHITE AND OTHER WITH COLORS
    function White() {
        for (var i = 1; i <= 4; i++) {
            for (var j = 1; j <= 4; j++) {
                var white = document.querySelector("#box" + i + j);
                if (white.innerText == 0) {
                    white.style.backgroundColor = "white";
                } else {
                    white.style.backgroundColor = "#5F939A";
                }
            }
        }
    }

    White();

    // SWAP DIVS WITH 0 NEAR THEM
    // SWAP DIVS WITH 0 NEAR THEM
    function swapDivs(cell1, cell2) {
        var tmp = document.querySelector(cell1).innerText;
        document.querySelector(cell1).innerText =
            document.querySelector(cell2).innerText;
        document.querySelector(cell2).innerText = tmp;
    }

    function shuffle() {
        for (var i = 1; i <= 4; i++) {
            for (var j = 1; j <= 4; j++) {
                var num1 = Math.floor(Math.random() * 4 + 1);
                var num2 = Math.floor(Math.random() * 4 + 1);
                swapDivs("#box" + i + j, "#box" + num1 + num2);
            }
        }
        White();
    }

    // AS THE GAME STARTS SHUFFLE AND STARTS CLOCK
    // AS THE GAME STARTS SHUFFLE AND STARTS CLOCK
    shuffle();
    clock();

    // CHECK WINNING CONDITON AND INITIATES ALERT THAT YOU HAVE WON
    // CHECK WINNING CONDITON AND INITIATES ALERT THAT YOU HAVE WON
    function check() {
        colorChange();
        for (var i = 1; i <= 16; i++) {
            var box = document.querySelector(".boxes" + i);
            if (i == 16) {
                if (box.innerText == 0) {

                    return true;
                } else {
                    return false;
                }
            } else {
                if (box.innerText == i) {
                    continue;
                } else {
                    return false;
                }
            }
        }
    }

    // CHNAGES COLOR IF INNERTEXT MATCHES POSI
    // CHNAGES COLOR IF INNERTEXT MATCHES POSI
    function colorChange() {
        for (var i = 1; i <= 16; i++) {
            if (document.querySelector(".boxes" + i).innerText == i) {
                document.querySelector(".boxes" + i).style.backgroundColor = "#4A1C40";
            }
        }
    }


    // TIME IN SECONDS
    // TIME IN SECONDS
    function clock(time) {
        time = 0;
        setInterval(() => {
            document.querySelector(".time").innerText = time + " sec";

            if (!check()) {
                time++;
            }
        }, 1000);
    }

    // ADDING EVENT LISTENER CLICK
    // ADDING EVENT LISTENER CLICK
    for (var i = 1; i <= 4; i++) {
        for (var j = 1; j <= 4; j++) {
            document.getElementById("box" + i + j).addEventListener("click", click);
        }
    }


    // COUNTING NUMBER OF CLICK ATTEMPTS AND FURTHER CHECKING WINNING AND ALSO MAKING DIVS WHITE ACCORDING TO NEED
    // COUNTING NUMBER OF CLICK ATTEMPTS AND FURTHER CHECKING WINNING AND ALSO MAKING DIVS WHITE ACCORDING TO NEED
    var clickcount = 1;
    function click() {
        $(this).fadeOut(50).fadeIn(50);
        var key1 = this.id[3];
        var key2 = this.id[4];
        if (this.innerText === "0") {
            return;
        }
        document.querySelector(".count").innerText = clickcount + " clicks";
        clickcount++;

        var right = Number(key2) + 1;
        var left = Number(key2) - 1;
        var up = Number(key1) - 1;
        var down = Number(key1) + 1;

        if (key2 != 4) {
            if (document.querySelector("#box" + key1 + right).innerText === "0") {
                swapDivs("#box" + key1 + key2, "#box" + key1 + right);
            }
        }
        if (key2 != 1) {
            if (document.querySelector("#box" + key1 + left).innerText === "0") {
                swapDivs("#box" + key1 + key2, "#box" + key1 + left);
            }
        }
        if (key1 != 1) {
            if (document.querySelector("#box" + up + key2).innerText === "0") {
                swapDivs("#box" + key1 + key2, "#box" + up + key2);
            }
        }
        if (key1 != 4) {
            if (document.querySelector("#box" + down + key2).innerText === "0") {
                swapDivs("#box" + key1 + key2, "#box" + down + key2);
            }
        }
        White();
        if (check()) {




            for (var i = 1; i <= 4; i++) {
                for (var j = 1; j <= 4; j++) {
                    $("#box" + i + j).css("background-color", "#4A1C40");
                }
            }
            alert("CONGRATS YOU WON 🎉🎉");
        }
    }

    document.addEventListener("keypress", (event) => {
        var zero;
        for (var i = 1; i <= 16; i++) {
            if (document.querySelector(".boxes" + i).innerText === "0") {
                zero = document.querySelector(".boxes" + i);
            }
        }
        var key1 = zero.id[3];
        var key2 = zero.id[4];
        document.querySelector(".count").innerText = clickcount + " clicks";
        clickcount++;

        var right = Number(key2) + 1;
        var left = Number(key2) - 1;
        var up = Number(key1) - 1;
        var down = Number(key1) + 1;

        if(key2==4 && event.key=="a")
        {
            return;
        }
        if(key2==1 && event.key=="d")
        {
            return;
        }
        if(key1==1 && event.key=="s")
        {
            return;
        }
        if(key1==4 && event.key=="w")
        {
            return;
        }
       
        if(event.key=="a")
        {
            swapDivs("#box" + key1 + key2, "#box" + key1 + right);
        }
        else if(event.key=="d")
        {
            swapDivs("#box" + key1 + key2, "#box" + key1 + left);
        }
        else if(event.key=="w")
        {
            swapDivs("#box" + key1 + key2, "#box" + down + key2);
        }
        else if(event.key=="s")
        {
            swapDivs("#box" + key1 + key2, "#box" + up + key2);
        }

        White();
        if (check()) {




            for (var i = 1; i <= 4; i++) {
                for (var j = 1; j <= 4; j++) {
                    $("#box" + i + j).css("background-color", "#4A1C40");
                }
            }
            alert("CONGRATS YOU WON 🎉🎉");
        }
    })
}

$(".btn-success").click(game);

