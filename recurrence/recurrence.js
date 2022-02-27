const factorial = (number) =>
  number === 1 ? number : number * factorial(number - 1);

const toRomanianNumber = (number) => {
  switch (true) {
    case number >= 1000:
      return "M" + toRomanianNumber(number - 1000);

    case number >= 900:
      return "CM" + toRomanianNumber(number - 900);

    case number >= 500:
      return "D" + toRomanianNumber(number - 500);

    case number >= 400:
      return "CD" + toRomanianNumber(number - 400);

    case number >= 100:
      return "C" + toRomanianNumber(number - 100);

    case number >= 90:
      return "XC" + toRomanianNumber(number - 90);

    case number >= 50:
      return "L" + toRomanianNumber(number - 50);

    case number >= 40:
      return "XL" + toRomanianNumber(number - 40);

    case number >= 10:
      return "X" + toRomanianNumber(number - 10);

    case number === 9:
      return "IX";

    case number >= 5:
      return "V" + toRomanianNumber(number - 5);

    case number === 4:
      return "IV";

    case number >= 1:
      return "I" + toRomanianNumber(number - 1);

    case number === 0:
      return "";
  }
};

console.log(toRomanianNumber(8));
