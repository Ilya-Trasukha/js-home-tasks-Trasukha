'use strict';
(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function() {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function(ans, tablescore) {
        var score;
        if (ans === this.correct) {
            console.log('И это правильный ответ!');
            score = tablescore(true);

        } else {
            console.log('Вы потерпели неудачу :(')
            score = tablescore(false);
        }
        this.displayScore(score);
    }

    Question.prototype.displayScore = function(score) {
        console.log('Ваш текущий счет:' + score);
    }

    var q1 = new Question('Известный код из Матрицы на самом деле обозначает?',
        ['Двоичный код', 'Набор цифр', 'Рецепт суши'], 
        2);

    var q2 = new Question('Плохому танцору мешают?',
        ['Яйца', 'Зрители', 'Длинные брюки', 'Новые туфли'],
        0);

    var q3 = new Question('Дополните слова из песни: жизнь разменяна, но не "....." обычно губит, а к одиннадцати туз?',
        ['Лох', 'Владимирский централ', 'Ветер северный', 'Очко'],
        3);

    var questions = [q1, q2, q3];
    
    function sc() {
        var score = 0;
        return function (correct) {
            if (correct) {
                score++;
            }
            return score;
        }
    }

    var keepScore = sc();

    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        
        questions[n].displayQuestion();

        var answer = prompt('Выберите правильный вариант ответа:');

        if (answer !== 'выход') {
            questions[n].checkAnswer(parseInt(answer), keepScore);
            nextQuestion();
        }
    }
    nextQuestion();
})();