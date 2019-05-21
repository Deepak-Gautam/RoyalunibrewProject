import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {


  constructor() {}

  questions = [{
      question: 'What is the population of Brazil?',
      choices: ['145 million', '199 million', '182 million', '205 million'],
      correctAnswer: 1
    }, {
      question: 'What is 27*14?',
      choices: ['485', '634', '408', '528'],
      correctAnswer: 2
    }, {
      question: 'What is the busiest train station in the world?',
      choices: ['Grand Central, NY', 'Shibuya, Tokyo', 'Beijing Central, Chine', 'Gard du Nord, Paris'],
      correctAnswer: 1
    }, {
      question: 'What is the longest river?',
      choices: ['Nile', 'Amazon', 'Mississippi', 'Yangtze'],
      correctAnswer: 0
    }, {
      question: 'What is the busiest tube station in the London?',
      choices: ['Waterloo', 'Baker Street', 'Kings Cross', 'Victoria'],
      correctAnswer: 0
    }];

  currentQuestion = 0;
  correctAnswers = 0;
  quizOver = false;

  public ngOnInit() {
    // tslint:disable-next-line:space-before-function-paren
    $(document).ready(function () {

      // Display the first question
      displayCurrentQuestion();
      $(this).find('.quizMessage').hide();

      // On clicking next, display the next question
      // tslint:disable-next-line:only-arrow-functions
      $(this).find('.nextButton').on('click', function() {
        if (!this.quizOver) {

          const value = $('input[type=\'radio\']:checked').val();

          if (value === undefined) {
            $(document).find('.quizMessage').text('Please select an answer');
            $(document).find('.quizMessage').show();
          } else {
            // TODO: Remove any message -> not sure if this is efficient to call this each time....
            $(document).find('.quizMessage').hide();

            if (value === this.questions[this.currentQuestion].correctAnswer) {
              this.correctAnswers++;
            }

            this.currentQuestion++; // Since we have already displayed the first question on DOM ready
            if (this.currentQuestion < this.questions.length) {
              displayCurrentQuestion();
            } else {
              displayScore();
              //                    $(document).find(".nextButton").toggle();
              //                    $(document).find(".playAgainButton").toggle();
              // Change the text in the next button to ask if user wants to play again
              $(document).find('.nextButton').text('Play Again?');
              this.quizOver = true;
            }
          }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
          this.quizOver = false;
          $(document).find('.nextButton').text('Next Question');
          resetQuiz();
          displayCurrentQuestion();
          hideScore();
        }
      });

    });

    // This displays the current question AND the choices
    function displayCurrentQuestion() {

      console.log('In display current Question');

      const question = this.questions[this.currentQuestion].question;
      const questionClass = $(document).find('.quizContainer > .question');
      const choiceList = $(document).find('.quizContainer > .choiceList');
      const numChoices = this.questions[this.currentQuestion].choices.length;

      // Set the questionClass text to the current question
      $(questionClass).text(question);

      // Remove all current <li> elements (if any)
      $(choiceList).find('li').remove();

      let choice;

      for (let i = 0; i < numChoices; i++) {
        choice = this.questions[this.currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
      }
    }

    function resetQuiz() {
      this.currentQuestion = 0;
      this.correctAnswers = 0;
      hideScore();
    }

    function displayScore() {
      // tslint:disable-next-line:quotemark
      $(document).find('.quizContainer > .result').text("You scored: " + this.correctAnswers + " out of: " + this.questions.length);
      $(document).find('.quizContainer > .result').show();
    }

    function hideScore() {
      $(document).find('.result').hide();

    }


  }
}
