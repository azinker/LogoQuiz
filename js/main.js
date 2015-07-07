// script.js
$(document).ready(function() {

    var deck = new Array();
    var currcard = null;

    Init();
    Draw();

    // EVENT HANDLER
    $("#clickme").click(function() {

        var useranswer = $("#answer").val();
        $("#status").html(useranswer);

        if (currcard.answertext == useranswer) {
            alert("correct");
            ClearText();
            Draw(); // GET the next card
        } else {
            alert("try again");
            ClearText();
        }
    });

    function ClearText() {
        $("#answer").val("");
        $("#status").html("Try again!");
    }


    function Init() {

        var card1 = {
            card: 1,
            picture: "images/logo.png",
            answertext: "logo1"
        };

        var card2 = {
            card: 2,
            picture: "images/logo2.png",
            answertext: "logo2"
        };

        deck.push(card1);
        console.log('card 1 was pushed' + deck);
        deck.push(card2);
        console.log('card 2 was pushed' + deck);
    }

    function Draw() {
        currcard = deck.shift();
        $("#a").attr("src", currcard.picture);
    }

});