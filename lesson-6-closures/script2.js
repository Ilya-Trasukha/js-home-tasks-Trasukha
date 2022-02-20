function interviewQuestion(work) {
    if (work === 'designer') {
        return function(human) {
            console.log(human + ' can you please explain what UX design is?');
        };
    } else if (work === 'teacher') {
        return function(human) {
            console.log('What subject do you teach ' + human + ' ?');
        };
    } else {
        return function(human) {
            console.log('Hello ' + human + ', what do you do?');
        };
    }
}

var designerInterviewQuestion = interviewQuestion('designer');
var teacherInterviewQuestion = interviewQuestion('teacher'); 

interviewQuestion('designer')('Margaret Hamilton');
interviewQuestion('teacher')('John');
interviewQuestion('teacher')('Mark');
interviewQuestion('engeneer')('Michael Vazovski');
interviewQuestion('cosmonaut')('Yuri Gagarin');
interviewQuestion('teacher')('Julia Shwirtz');