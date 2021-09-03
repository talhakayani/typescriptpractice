/**
 * ther are 2 types of loops
 * definte and indefinte
 */
/**
 * for loop is definte loop in this type of loop we know the ending point
 */
var arr = [10, 23, 30, 34];
for (var i_1 = 0; i_1 < 4; i_1++) {
    console.log(arr[i_1]);
}
/**
 * While loop is indefinte loop in this type of loop we don't know the end point
 * we just know about the break condition on that condition we exit from the loop
 *
 */
var i = 0;
while (arr[i]) {
    console.log(arr[i]);
    i++;
}
/**
 * another indefinite loop which is similar to while loop but it will execute once even if the given condition is false
 */
var index = 4;
do {
    index--;
} while (arr[index]);
