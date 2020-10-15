// Challenge 1: Age in days

function ageInDays() {
    var birthYear = prompt('What year were you born... good friend?');
    var ageInDayss = (2018 - birthYear) * 356;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDayss + ' days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}    

function reset() {
    document.getElementById('ageInDays').remove();
}