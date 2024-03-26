var questions = [{
	question: "What is the baby of a Moth called?",
	choices: ["baby", "infant", "kit", "larva"],
	correctAnswer: 3
}, {
	question: "What is the baby of a Goat called?",
	choices: ["calf", "doe", "kid", "chick"],
	correctAnswer: 2
}, {
	question: "what is the young of Bufallo called?",
	choices: ["calf", "baby", "pup", "cow"],
	correctAnswer: 0
}, {
	question: "what is a baby Aligator called?",
	choices: ["baby", "gator", "hatchling", "calf"],
	correctAnswer: 2
}, {
	question: "What is a baby Goose called?",
	choices: ["gooser", "gosling", "gup", "pup"],
	correctAnswer: 1
}, {
	question: "What is a baby Hamster called?",
	choices: ["pup", "chick", "infant", "billy"],
	correctAnswer: 0
}, {
	question: "What is a baby Hawk called?",
	choices: ["hawklett", "pup", "larva", "eyas"],
	correctAnswer: 3
}, {
	question: "What is a baby Grasshopper called?",
	choices: ["hopper", "nymph", "stick", "pup"],
	correctAnswer: 1
}, {
	question: "What is a baby Kangaroo called?",
	choices: ["kinga", "joey", "calf", "baby"],
	correctAnswer: 1
}, {
	question: "What is a baby Whale called?",
	choices: ["whala", "cub", "grub", "infant"],
	correctAnswer: 1
}, {
	question: "What is a baby Monkey called?",
	choices: ["infant", "baby", "calf", "pup"],
	correctAnswer: 0
}, {
	question: "What is a baby Bear called?",
	choices: ["cub", "baby balu", "young bear", "bearlet"],
	correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswer = 0;
var quizOver = false;

$(document).ready(function () {
	displayCurrentQuestion();
	$(this).find(".quizMessage").hide();
	$(this).find(".nextButton").on("click", function () {
		if (!quizOver) {
			value = $("input[type='radio']:checked").val();
			if (value == undefined) {
				$(document).find(".quizMessage").text("Please select an answer");
				$(document).find(".quizMessage").show();
			} else {
				$(document).find(".quizMessage").hide();
				if (value == questions[currentQuestion].correctAnswer) {
					correctAnswer++;
				}
				currentQuestion++;
				if (currentQuestion < questions.length) {
					displayCurrentQuestion();
				} else {
					displayScore();
					$(document).find(".nextButton").text("Play Again?");
					quizOver = true;
				}
			}
		}
		else {
			quizOver = false;
			$(document).find(".nextButton").text("Next Question");
			resetQuiz();
			displayCurrentQuestion();
			hideScore();
		}
	});
});

function displayCurrentQuestion() {

	console.log("In display current Question");

	var question = questions[currentQuestion].question;
	var questionClass = $(document).find(".quizContainer > .question");
	var choiceList = $(document).find(".quizContainer > .choiceList");
	var numChoices = questions[currentQuestion].choices.length;

	//Set the questionClass text to the current question
	$(questionClass).text(question);

	//Remove all current <li> elements (if any)
	$(choiceList).find("li").remove();

	var choice;
	for (i = 0; i < numChoices; i++) {
		choice = questions[currentQuestion].choices[i];
		$('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
	}
}
function resetQuiz() {
	currentQuestion = 0;
	correctAnswer = 0;
	hideScore();
}

function displayScore() {
	$(document).find(".quizContainer > .result").text("You scored: " + correctAnswer + " out of: " + questions.length);
	$(document).find(".quizContainer > .result").show();
}

function hideScore() {
	$(document).find(".result").hide();
}