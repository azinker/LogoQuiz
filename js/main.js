// script.js

console.log("linked");
$(document).ready(function() {

    var deck = new Array();
    var currcard = null;


    startGame(); //brings up start



    // EVENT HANDLER
    $("#clickme").click(function() {
        //useranswer = the anwer i submit in the text box
        var useranswer = $("#answer").val();


        // If the current card answertext = my submitted answer
        if (currcard.answertext == useranswer) {
            // alert("correct");
            var correct = $('<div class="correct" id="correct1">Correct!</div>');
            correct.appendTo('.logoGame'); //Tells you are correct
            ClearText(); // Calls cleartext function
            Draw(); // Calls draw function to get next card
        } else {
            alert("try again");
            ClearText();
        }
    });

    function ClearText() {
        $("#answer").val("");
        $("#status").html("Try again!");
        $("#correct1").animate HERE IS WHERE I LEFT OUT, we need to ease the ID correct 1
        into easing out right when it says correct.
            // document.getElementById("correct1").style.display = "none";
    }

    function Draw() {
        currcard = deck.shift();
        $("#a").attr("src", currcard.picture);
        $("#hint").text(currcard.hint);
    }

    // STARTING POINT
    function startGame() {
            var start = $('<div class="gameStart" id="gameStart1">Are you ready? Timer will start!</div>');
            var startBtn = $('<button type="submit" id="startbtn1" class="startMe">Enter</button>');
            start.appendTo('.logoGame');
            startBtn.appendTo('.logoGame');
            document.getElementById("answer").style.display = "none";
            document.getElementById("clickme").style.display = "none";
            document.getElementById("hint").style.display = "none";

        }
        // STARTING CLICK
    $(".startMe").click(function() {
        document.getElementById("gameStart1").style.display = "none";
        document.getElementById("startbtn1").style.display = "none";
        document.getElementById("answer").style.display = "";
        document.getElementById("clickme").style.display = "";
        document.getElementById("hint").style.display = "";
        Init();
        Draw();
        timer()
    });



    function Init() {

        var card1 = {
            card: 1,
            picture: "images/logo2.png",
            hint: "HINT: ITS A COMPUTER LOGO",
            answertext: "logo1"
        };

        var card2 = {
            card: 2,
            picture: "images/logo2.png",
            hint: "HINT: ITS A COMPUTER LOGO984",
            answertext: "logo2"
        };
        console.log(deck);

        var card3 = {
            card: 3,
            picture: "images/logo.png",
            hint: "HINT: ITS A COMPUTER LOGO393",
            answertext: "logo3"
        };

        deck.push(card1);
        console.log('card 1 was pushed' + deck);
        deck.push(card2);
        console.log('card 2 was pushed' + deck);
        deck.push(card3);
        console.log('card 3 was pushed' + deck);
    }


    // TIMER SETTINGS
    var h3 = document.getElementsByTagName('h3')[0],
        seconds = 0,
        minutes = 0,
        hours = 0,
        t;

    function add() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }

        h3.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

        timer();
    }

    function timer() {
        t = setTimeout(add, 1000);
    }



    /* Stop button */
    function stopTime() {
            clearTimeout(t);
        }
        // END OF TIMER SETTINGS



});