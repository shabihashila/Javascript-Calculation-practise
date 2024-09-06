/***
Grade Calculator
Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/
// this rules also  right
const mark = 696;

if (mark >= 90 && mark <= 100) {
  console.log("Your Grade is A");
} else {
  // 1.again if else condition
  if (mark >= 80 && mark <= 89) {
    console.log("Your Grade is B");
  } else {
    if (mark >= 70 && mark <= 79) {
      console.log("Your Grade is C");
    } else {
      if (mark >= 60 && mark <= 69) {
        console.log("Your Grade is D");
      } else {
        if (mark >= 0 && mark <= 59) {
          console.log("Your Grade is F");
        } else {
          console.log("invalid mark,please enter e valid mark 0-100");
        }
      }
    }
  }
}
// if i want,i can write a another way code

// const mark = 56;

// if (mark >= 90 && mark <= 100) {
//   console.log("Your Grade is A");
// } else if (mark >= 80 && mark <= 89) {
//   console.log("Your Grade is B");
// } else if (mark >= 70 && mark <= 79) {
//   console.log("Your Grade is C");
// } else if (mark >= 60 && mark <= 69) {
//   console.log("Your Grade is D");
// } else if (mark >= 0 && mark <= 59) {
//   console.log("Your Grade is F");
// } else {
//   console.log("Invalid mark, please enter a value between 0 and 100.");
// }
