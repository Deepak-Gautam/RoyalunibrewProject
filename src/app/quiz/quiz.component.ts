import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }

  public ngOnInit() {

    let currentQuestion = 0;
    let correctAnswers = 0;
    let quizOver = false;

    const questions = [{
      question: 'How many drinks can you take at one time?',
      choices: ['one', 'Two', 'Three', 'Four'],
      correctAnswer: 0
  }, {
      question: 'Which is safety dress is most Compulsory?',
      choices: [ 'Safety Goggles', 'Wearing Shoes', 'Jeans Pant', 'Gloves'],
      correctAnswer: 1
  }, {
      question: 'What do you need to get out with loaded turck?',
      choices: ['Get Key', 'Written Documents', 'Licenese Number', 'Exit Code'],
      correctAnswer: 3
  }, {
      question: 'Where should you walk always?',
      choices: ['Between the Line', 'Anywhere you like', 'Middle of the road', 'I dont know'],
      correctAnswer: 0
  }, {
      question: 'What do you need to take Load?',
      choices: ['Transport Number', 'License Number', 'Letter From Company', 'Fill exit form'],
      correctAnswer: 2
  }];

    $(document).ready(function() {

      // Display the first question
      displayCurrentQuestion();
      $(this).find('.quizMessage').hide();

      // On clicking next, display the next question
      // tslint:disable-next-line:only-arrow-functions
      $(this).find('.nextButton').on('click', function() {
        if (!quizOver) {

          const value = $('input[type=\'radio\']:checked').val();

          // tslint:disable-next-line:triple-equals
          if (value == undefined) {
            $(document).find('.quizMessage').text('Please select an answer');
            $(document).find('.quizMessage').show();
          } else {
            // TODO: Remove any message -> not sure if this is efficient to call this each time....
            $(document).find('.quizMessage').hide();

            // tslint:disable-next-line:triple-equals
            if (value == questions[currentQuestion].correctAnswer) {
              correctAnswers++;
            }

            currentQuestion++; // Since we have already displayed the first question on DOM ready
            if (currentQuestion < questions.length) {
              displayCurrentQuestion();
            } else {
              displayScore();
              $(document).find('.nextButton').text('Play Again?');
              quizOver = true;
            }
          }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
          quizOver = false;
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

      const question = questions[currentQuestion].question;
      const questionClass = $(document).find('.quizContainer > .question');
      const choiceList = $(document).find('.quizContainer > .choiceList');
      const numChoices = questions[currentQuestion].choices.length;

      // Set the questionClass text to the current question
      $(questionClass).text(question);

      // Remove all current <li> elements (if any)
      $(choiceList).find('li').remove();
      let choice;
      let i: number;
      for ( i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</li>').appendTo(choiceList);
      }
    }

    function resetQuiz() {
      currentQuestion = 0;
      correctAnswers = 0;
      hideScore();
    }

    function displayScore() {
      $(document).find('.quizContainer > .result').text('You scored: ' + correctAnswers + ' out of: ' + questions.length);
      $(document).find('.quizContainer > .result').show();
    }

    function hideScore() {
      $(document).find('.result').hide();
    }

  }

}
