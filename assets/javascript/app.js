//set variables for timer, questions, score,
var userPick;

var correctAnswer = 0;

var incorrectAnswer = 0;

var unAnswer = 0;

var question = 0;

var images;

var count = 30;

//create questions

$.Trivia = function () {

    var popQuiz = [{
        question: "Which Nintendo game lets you play sports without actually leaving your couch?",
        choices: ["Mario Party", "Castlevania", "Wii Sports", "Nintendo Sports"],
        images: ["../images/wiisports.jpg"],
        validAnswer: 0
    }, {
        question: "In Game of Thrones, which of these castles belongs to the Starks?",
        choices: ["Highgarden", "Winterfell", "Kings Landing", "Riverrun"],
        images: ["../images/starks.png"],
        validAnswer: 1

    }, {
        question: "What is the speed necessary to travel through time in the Back to the Future trilogy?",
        choices: ["Light Speed", "88 mph", "100 mph", "Ludicrous Speed"],
        images: ["../images/delorean.jpg"],
        validAnswer: 1

    }, {
        question: "Which Playstation 2 game let you travel through Disney worlds with Donald and Goofy?",
        choices: ["Kingdom Hearts", "Disney Advetures", "Final Fantasy", "Keyblade Saga"],
        images: ["../images/kh.jpg"],
        validAnswer: 0

    }, {
        question: "In Star Wars: A Phantom Menace, what did Anakin have inside him that made him special?",
        choices: ["Mitochondria", "Mandalorians", "Midichlorians", "The Force"],
        images: ["../images/anakin.png"],
        validAnswer: 2

    }, {
        question: "Which 2017 indie film took place in Sacramento?",
        choices: ["American Beauty", "The Zookeeper's Wife", "A Ghost Story", "Lady Bird"],
        images: ["../images/ladybird.jpg"],
        validAnswer: 3

    }, {
        question: "Which football team blew a 27-3 lead against the Patriots in the Superbowl?",
        choices: ["Jaguars", "Broncos", "Rams", "Falcons"],
        images: ["../images/sorrylol.jpg"],
        validAnswer: 3

    }, {
        question: "Which of these cartoons is the most memeable?",
        choices: ["Invader Zim", "Courage the Cowardly Dog", "Spongebob", "King of the Hill"],
        images: ["../images/spongebob.jpg"],
        validAnswer: 2
    }

    ];

    //start button 

    $("#start_button").click(function () {
        $(this).hide();
        counter = setInterval(timer, 1000);
        displayTrivia();
    });

    //timer 

    function timer() {
        count--;
        if (count <= 0) {
            clearInterval(counter);
            return;
        }

        $("#timer").html("Time remaining: " + "00:" + count + " secs");
    }


    function displayTrivia() {
        $("#question").html(popQuiz[0].question);
        question++;

        var choicesArr = popQuiz[0].choices;
        var buttonsArr = [];

        for (let i = 0; i < choicesArr.length; i++) {
            var button = $('<button>');
            button.text(choicesArr[i]);
            button.attr('data-id', i);
            $('#choices').append(button);
        }

    }

    $('#choices').on('click', 'button', function (e) {
        userPick = $(this).data("id");
        popQuiz[0].validAnswer;
        if (userPick != popQuiz[0].validAnswer) {

            $('#choices').text("Wrong Answer! The correct answer is " + validAnswer);
            incorrectAnswer++;

        } else if (userPick === popQuiz[0].validAnswer) {
            $('#choices').text("Correct!");
            correctAnswer++;

        }

    });
}