/**
 * if statement
 * one-line if statement
 * multi-line if statement
 */
var marksEng = 10;
var marksMath = 20;
//single line if statement
if (marksEng == marksMath)
    console.log('Marks are equal');
//multiline if statement
if (marksEng != marksMath) {
    console.log('marks are not equal');
    console.log('English marks: ' + marksEng);
    console.log('Math marks: ' + marksMath);
}
/**
 * if else statement
 */
if (marksMath == marksEng) {
    console.log('marks are equal');
}
else {
    console.log('marks are not equal');
}
/**
 * Multi if else
 */
if (marksMath == marksEng) {
    console.log('marks are equal');
}
else if (marksEng < marksMath) {
    console.log('math have higher marks than english');
}
else {
    console.log('english have higher marks than math');
}
// Switch case statement;
switch (marksMath) {
    case 10:
        console.log('marks are 10');
        break;
    case 20:
        console.log('marks are 20');
        break;
    default:
        console.log('invalid marks');
}
