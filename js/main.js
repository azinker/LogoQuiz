// script.js

console.log("linked");

var currcard = null;
var cards = [];
var totalTime = [];
var deck = [{
        card: 1,
        picture: "images/logos/shell.png",
        hint: "HINT: CAR FUEL!",
        answertext: "shell",
        cardCount: "1/20"
    },

    {
        card: 2,
        picture: "images/logos/atari.jpg",
        hint: "HINT: GAMING!",
        answertext: "atari",
        cardCount: "2/20"
    },
    // {
    //     card: 3,
    //     picture: "images/logos/ga.png",
    //     hint: "HINT: SCHOOL!",
    //     answertext: "general assembly",
    //     cardCount: "3/20"
    // },
    // {
    //     card: 4,
    //     picture: "images/logos/firestone.png",
    //     hint: "HINT: CARS NEED THEM!",
    //     answertext: "firestone",
    //     cardCount: "4/20"
    // }, {
    //     card: 5,
    //     picture: "images/logos/fbi.png",
    //     hint: "HINT: KEEPS AMERICA SAFE!",
    //     answertext: "fbi",
    //     cardCount: "5/20"
    // }, {
    //     card: 6,
    //     picture: "images/logos/adobe.png",
    //     hint: "HINT: PDF's!",
    //     answertext: "adobe",
    //     cardCount: "6/20"
    // }, {
    //     card: 7,
    //     picture: "images/logos/newbalance.jpg",
    //     hint: "HINT: WE RUN IN THEM!",
    //     answertext: "new balance",
    //     cardCount: "7/20"
    // }, {
    //     card: 8,
    //     picture: "images/logos/aim.jpg",
    //     hint: "HINT: INSTANT MESSAGING",
    //     answertext: "aim",
    //     cardCount: "8/20"
    // }, {
    //     card: 9,
    //     picture: "images/logos/chrome.png",
    //     hint: "HINT: YOU MAYBE PLAYING IN IT NOW?",
    //     answertext: "chrome",
    //     cardCount: "9/20"
    // }, {
    //     card: 10,
    //     picture: "images/logos/xbox.jpg",
    //     hint: "HINT: VIDEO GAMES!",
    //     answertext: "xbox",
    //     cardCount: "10/20"
    // }, {
    //     card: 11,
    //     picture: "images/logos/capmorgan.jpg",
    //     hint: "HINT: MUST BE 18 YEARS OR OLDER!",
    //     answertext: "captain morgan",
    //     cardCount: "11/20"
    // }, {
    //     card: 12,
    //     picture: "images/logos/batman.png",
    //     hint: "HINT: GOTHAM!",
    //     answertext: "batman",
    //     cardCount: "12/20"
    // }, {
    //     card: 13,
    //     picture: "images/logos/ie.png",
    //     hint: "HINT: MICROSOFT!",
    //     answertext: "internet explorer",
    //     cardCount: "13/20"
    // }, {
    //     card: 14,
    //     picture: "images/logos/paypal.png",
    //     hint: "HINT: ONLINE MONEY TRANSFER!",
    //     answertext: "paypal",
    //     cardCount: "14/20"
    // }, {
    //     card: 15,
    //     picture: "images/logos/dd.jpg",
    //     hint: "HINT: CAFFIENE KEEPS YOU AWAKE!",
    //     answertext: "dunkin donuts",
    //     cardCount: "15/20"
    // }, {
    //     card: 16,
    //     picture: "images/logos/gmail.png",
    //     hint: "HINT: INTERNET MESSAGES!",
    //     answertext: "gmail",
    //     cardCount: "16/20"
    // }

];
startGame();

function finishDeck() {
    if (deck.length === 0) {
        document.getElementById("completion").style.display = "";

    }

}

function ClearText() {
    $("#answer").val("");
    setTimeout(function() {
        $("#correct1").remove();
        $("#wrong1").remove();
    }, 600);
}

function Draw() {
    currcard = deck.shift();
    $("#a").attr("src", currcard.picture);
    $("#hint").text(currcard.hint);
    $("#cardCount").text(currcard.cardCount);

};




// TIMER SETTINGS
var points = document.getElementById('stopWatch')[0],
    seconds = 0,
    minutes = 0,
    hours = 0,
    t;



function add() {
    var totalSeconds = seconds++;
    if (seconds >= 9000) {
        seconds = 0;
        var totalMinutes = minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    stopWatch.textContent = (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

function timer() {
    t = setTimeout(add, 85);
}

/* Stop button */
function stopTime() {
    clearTimeout(t);
}


// END OF TIMER SETTINGS





// EVENT HANDLER
$("#clickme").click(function() {
    //useranswer = the anwer i submit in the text box
    var useranswer = $("#answer").val();

    // If the current card answertext = my submitted answer
    if (currcard.answertext == useranswer) {

        //TIME FOR CARD
        var newCard = $('<h3 class="defaultCardTime" id="cardTime1"></h3><br> ');
        newCard.text(useranswer + ' ' + '-' + ' ' + stopWatch.textContent);
        cards.push(newCard);
        $('.topScore').children().remove();


        for (var i = 0; i < cards.length; i++) {
            cards[i].appendTo('.topScore');
        }



        // CORRECT ANSWER FLASH
        var correct = $('<div class="correct" id="correct1">Correct!</div>');
        correct.appendTo('.logoGame'); //Tells you are correct
        $("#status").html("Good Job!");


        ClearText(); // Calls cleartext function
        Draw(); // Calls draw function to get next card
        finishDeck();


    } else {
        // WRONG ANSWER FLASH
        var wrong = $('<div class="wrong" id="wrong1">Wrong!</div>');
        wrong.appendTo('.logoGame');
        $("#status").html('<font color="ff0000">Guess again...</font>');
        setTimeout(function() {
            $("#status").html('<font color="34cd39">Check the Hint!</font>');
        }, 3000);
        ClearText();
    }
});



// INITIAL STARTING POINT
function startGame() {
    var start = $('<div class="gameStart" id="gameStart1">How to play:</div>');
    var howto = $('<div class="howto" id="howto1">When the logo appears, enter the correct brand as fast as you can!</div>');
    var example = $('<img src="images/example.png" id="example1">');
    var startBtn = $('<button type="submit" id="startbtn1" class="startMe">Ready?</button>');
    var readyHint = $('<div class="ready" id="ready1">Points will start once clicked!<br>User lower case only</div>');
    start.appendTo('.logoGame');
    howto.appendTo('.logoGame');
    example.appendTo('.logoGame');
    startBtn.appendTo('.logoGame');
    readyHint.appendTo('.logoGame');
    document.getElementById("answer").style.display = "none";
    document.getElementById("clickme").style.display = "none";
    document.getElementById("hint").style.display = "none";
    document.getElementById("cardCount").style.display = "none";
    document.getElementById("completion").style.display = "none";

};


// STARTING CLICK
$(".startMe").click(function() {
    document.getElementById("gameStart1").style.display = "none";
    document.getElementById("howto1").style.display = "none";
    document.getElementById("example1").style.display = "none";
    document.getElementById("startbtn1").style.display = "none";
    document.getElementById("ready1").style.display = "none";
    document.getElementById("completion").style.display = "none";
    document.getElementById("answer").style.display = "";
    document.getElementById("clickme").style.display = "";
    document.getElementById("hint").style.display = "";
    document.getElementById("cardCount").style.display = "";
    Draw();
    timer();
});

// STARTING CLICK 2
$(".startMe2").click(function() {

});