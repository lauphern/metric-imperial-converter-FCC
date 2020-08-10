/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai');
const assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

const convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      const input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      const input = "3.1mi";
      assert.equal(convertHandler.getNum(input), 3.1);
      done();
    });
    
    test('Fractional Input', function(done) {
      const input = "3/4kg";
      assert.equal(convertHandler.getNum(input), 0.75);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      const input = "1.5/4gal";
      assert.equal(convertHandler.getNum(input), 0.375);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      const input = "1.5/4/7gal";
      assert.equal(convertHandler.getNum(input), "invalid number");
      done();
    });
    
    test('No Numerical Input', function(done) {
      const input = "kg";
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['1gal','4/3l','5.6mi','7/7/7km','lbs','2.5.6kg','5GAL','4L','MI','6KM','9LBS','10KG'];
      const expect = ['gal','l','mi','km','lbs','kg','gal','l','mi','km','lbs','kg'];
      input.forEach(function(el, i) {
        assert.equal(convertHandler.getUnit(el), expect[i])
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      const input = "m";
      assert.equal(convertHandler.getUnit(input), "invalid unit");
      done()
    });  
    
  });
  
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      const input = ['gal','l','mi','km','lbs','kg'];
      const expect = ['l','gal','km','mi','kg','lbs'];
      input.forEach(function(el, i) {
        assert.equal(convertHandler.getReturnUnit(el), expect[i]);
      });
      done();
    });
    
  });  
  
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      //see above example for hint
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      const input = [5, 'gal'];
      const expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      
      //done();
    });
    
    test('Mi to Km', function(done) {
      
      //done();
    });
    
    test('Km to Mi', function(done) {
      
      //done();
    });
    
    test('Lbs to Kg', function(done) {
      
      //done();
    });
    
    test('Kg to Lbs', function(done) {
      
      //done();
    });
    
  });

});