/*
 *
 *
 *       Complete the handler logic below
 *
 *
 */

function ConvertHandler() {
  this.getNum = function (input) {
    debugger
    let result;
    let generalRegex = /[^a-zA-Z]+/gm;
    let slashRegex = /\/+/gm;
    let dotRegex = /\.+/gm;
    let numbersRegex = /[0-9]+/gm;
    let lettersRemoved = input.match(generalRegex);
    //1. If there is no match, the input only had the unit, so we should return the default value: 1
    if(!lettersRemoved) return 1
    //2. Check there are numbers
    if(!lettersRemoved[0].match(numbersRegex)) return "invalid number";
    //3. Check for fractions
    let isItFraction = lettersRemoved[0].match(slashRegex);
    if(!!isItFraction) {
      if(isItFraction.length > 1) return "invalid number";
      else {
        let numbersArray = lettersRemoved[0].split("/");
        result = parseFloat(numbersArray[0]) / parseFloat(numbersArray[1]);
        return result;
      }
    }
    //4. Check for floats
    let isItFloat = lettersRemoved[0].match(dotRegex);
    if(!!isItFloat) {
      if(isItFloat.length > 1) return "invalid number";
      else {
        result = parseFloat(lettersRemoved[0]);
        return result;
      }
    }
    //5. Integers
    //Check that there are only numbers, comparing the two arrays: we should get the same array with both regex
    if(!input.match(generalRegex).every(val => input.match(numbersRegex).map(val2 => val === val2))) {
      //The default is 1
      result = 1;
      return result
    }
    else {
      result = lettersRemoved[0];
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
    if(initNum === "invalid number") return "invalid number"
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
        result = "invalid unit";
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
