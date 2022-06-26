module.exports = 
function toReadable(number) {
  let wordOrdinary = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  let wordDecimals = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
  let wordTens = ["", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
  let wordHundreds = ["hundred"];
  let humanReady = [];
  number = number.toString().split('');
  //all 3 digit numbers except ..0 and .1. and .0.
  if (number.length == 3 && number[1] > 1 && number[2] != 0) {
    humanReady = [wordOrdinary[+number[0]], wordHundreds[0], wordDecimals[+number[1]], wordOrdinary[number[2]]];
  } else
    // 3 digit numbers .0.
    if (number.length == 3 && number[1] == 0 && number[2] != 0) {
      humanReady = [wordOrdinary[+number[0]], wordHundreds[0], wordOrdinary[number[2]]];
    } else
      // 3 digit numbers .1.
      if (number.length == 3 && number[1] == 1 && number[2] != 0) {
        humanReady = [wordOrdinary[+number[0]], wordHundreds[0], wordTens[+number[2]]];
      } else
        // 3 digit numbers ..0
        if (number.length == 3 && number[1] != 0 && number[2] == 0) {
          humanReady = [wordOrdinary[+number[0]], wordHundreds[0], wordDecimals[+number[1]]];
        } else
          // 3 digit numbers .00
          if (number.length == 3 && number[1] == 0 && number[2] == 0) {
            humanReady = [wordOrdinary[+number[0]], wordHundreds[0]];
          }
          else
            //for 2 digit numbers from 11 to 19
            if (number.length == 2 && number[0] == 1 && number[1] != 0) {
              humanReady = [wordTens[number[1]]];
            } else
              //for 2 digit numbers 10,20 ..90 
              if (number.length == 2 && number[0] != 0 && number[1] == 0) {
                humanReady = [wordDecimals[number[0]]];
               } else
                //for all the rest 2 digit numbers
                if (number.length == 2) {
                  humanReady = [wordDecimals[number[0]], wordOrdinary[number[1]]];
                 } else
                  //for 1 digit numbers from 0 to 9
                  if (number.length == 1) {
                    humanReady = [wordOrdinary[number[0]]];
                  }

  //number string normalisation
  return humanReady.join(' ');
}







