const chalk = require("chalk");
const chalkAnimation = require("chalk-animation");

var w;
var h;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

getVal();
async function getVal() {
  readline.question(
    chalk.hex("#38ffd7")(`\n:: What's your weight? (In Kg)\n>>`),
    (weight) => {
      if (!isNaN(weight)) {
        w = weight;
        readline.question(
          chalk.hex("#38ffd7")(
            `\n\n:: What's your height shawty? (In meters)\n>>>`
          ),
          (height) => {
            if (!isNaN(height)) {
              h = height;
              readline.close();
            } else {
              console.clear();
              console.log(
                chalk.hex("#ff0000")("Please enter a numeric value !")
              );
              getVal();
            }
          }
        );
      } else {
        console.clear();
        console.log(chalk.hex("#ff0000")("Please enter a numeric value !"));
        getVal();
      }
    }
  );

  readline.on("close", function () {
    calcBMI(w, h);
    process.exit(0);
  });
}

async function calcBMI(weight, height) {
  if (weight != "" && height != "") {
    h1 = height * height;
    calculatedVal = weight / h1;
    console.clear();
    if (calculatedVal > 18.5 && calculatedVal < 24.9) {
      return (
        console.log(chalk.hex("#ff00a2")(`Height -> ${h}\nWeight -> ${w}`)),
        console.log(
          `\nYour BMI is ${chalk.hex("#33ff00")(calculatedVal + "%")}\n\n`
        )
      );
    } else {
      return (
        console.log(chalk.hex("#ff00a2")(`Height -> ${h+' kg'}\nWeight -> ${w+' m'}`)),
        console.log(
          `\nYour BMI is ${chalk.hex("#ff0000")(calculatedVal + "%")}\n\n`
        )
      );
    }
  } else {
    console.clear();
    return console.log(chalk.blue("\n\nValues are null nigger\n\n"));
  }
}

// calcBMI(w,h)
