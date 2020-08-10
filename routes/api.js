/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  const convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      const input = req.query.input;
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);
      const returnNum = convertHandler.convert(initNum, initUnit);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      const body = {initNum, initUnit, returnNum, returnUnit, string: toString}
      
      if(toString === "invalid number and unit") {
        return res.status(400).json(body);
      } else if(initNum === "invalid number" || returnNum === "invalid number" || toString === "invalid number") {
        return res.status(400).json(body);
      } else if(initUnit === "invalid unit" || returnUnit === "invalid unit" || returnNum === "invalid unit" || toString === "invalid unit") {
        return res.status(400).json(body);
      }

      res.status(200).json(body);
    });
    
};
