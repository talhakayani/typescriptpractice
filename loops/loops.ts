/**
 * ther are 2 types of loops
 * definte and indefinte
 */

/**
 * for loop is definte loop in this type of loop we know the ending point
 */

const arr: number[] = [10, 23, 30, 34];

for (let i: number = 0; i < 4; i++) {
  console.log(arr[i]);
}

/**
 * While loop is indefinte loop in this type of loop we don't know the end point
 * we just know about the break condition on that condition we exit from the loop
 *
 */
let i: number = 0;
while (arr[i]) {
  console.log(arr[i]);
  i++;
}

/**
 * another indefinite loop which is similar to while loop but it will execute once even if the given condition is false
 */
let index: number = 4;
do {
  index--;
} while (arr[index]);
