/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function (input) {
    let result;
    let generalRegex = /[^a-zA-Z]+/gm;
    let slashRegex = /\/+/gm;
    let dotRegex = /\.+/gm;
    let numbersRegex = /[0-9]+/gm;
    let lettersRemoved = input.match(generalRegex)[0];
    //1. Check there are numbers
    if(!lettersRemoved.match(numbersRegex)) return "invalid number";
    //2. Check for fractions
    let isItFraction = lettersRemoved.match(slashRegex);
    if(!!isItFraction) {
      if(isItFraction.length > 1) return "invalid number";
      else {
        let numbersArray = lettersRemoved.split("/");
        result = parseFloat(numbersArray[0]) / parseFloat(numbersArray[1]);
        return result;
      }
    }
    //3. Check for floats
    let isItFloat = lettersRemoved.match(dotRegex);
    if(!!isItFloat) {
      if(isItFloat.length > 1) return "invalid number";
      else {
        result = parseFloat(lettersRemoved);
        return result;
      }
    }
    //4. Integers
    //Check that there are only numbers
    if(input.match(generalRegex) !== input.match(numbersRegex)) return "invalid number";
    else {
      result = lettersRemoved;
      return result;
    }
  };

  this.getUnit = function (input) {
    let acceptedUnits = ["gal", "l", "lbs", "kg", "mi", "km"];
    let regex = /[a-zA-Z]+/gm;
    let result = input.match(regex)[0];
    if(acceptedUnits.includes(result)) return result.toLowerCase();
    else return "invalid unit";
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    switch (initUnit) {
      case "gal":
        result = "l";
        break;
      case "l":
        result = "gal";
        break;
      case "lbs":
        result = "kg";
        break;
      case "kg":
        result = "lbs";
        break;
      case "mi":
        result = "km";
        break;
      case "km":
        result = "mi";
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    switch (unit) {
      case "gal":
        result = "gallons";
        break;
      case "l":
        result = "litres";
        break;
      case "lbs":
        result = "pounds";
        break;
      case "kg":
        result = "kilograms";
        break;
      case "mi":
        result = "miles";
        break;
      case "km":
        result = "kilometres";
        break;
      default:
        result = "invalid unit";
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
        break;
      default:
        result = "invalid number";
    }
    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;
    if(initNum === "invalid number" && initUnit === "invalid unit") return "invalid number and unit";
    else if(initNum === "invalid number") return initNum;
    else if(initUnit === "invalid unit") return initUnit;
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${parseFloat(returnNum.toFixed(5))} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
}

module.exports = ConvertHandler;
