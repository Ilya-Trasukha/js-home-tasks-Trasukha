function Quiz(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}
var q1 = new Quiz('Известный код из Матрицы на самом деле обозначает?', ['Двоичный код', 'Набор цифр', 'Рецепт суши'], 2);
var q2 = new Quiz('Плохому танцору мешают?', ['Яйца', 'Зрители', 'Длинные брюки', 'Новые туфли'], 0);                                       
var q3 = new Quiz('Дополните слова из песни: жизнь разменяна, но не "....." обычно губит, а к одиннадцати туз?',['Лох', 'Владимирский централ', 'Ветер северный', 'Очко'], 3);
var questions = [q1, q2, q3];

Quiz.prototype.startQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
        console.log(i + ': ' + this.answers[i]);
    } 
};

Quiz.prototype.Answer = function(answ) {
    if (answ === this.correct) {
        console.log('И это правильный ответ!');
    } else {
        console.log('Вы потерпели неудачу :(');
    }
};

var next = Math.floor(Math.random() * questions.length);
questions[next].startQuestion();

var answer = +prompt('Выберите правильный вариант ответа:');   
questions[next].Answer(answer);